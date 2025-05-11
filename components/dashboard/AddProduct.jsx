'use client'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import AWS from 'aws-sdk'

const AddProduct = ({set}) => {
    const [details, setDetails] = useState({
        title: '',
        category: '',
        subcategory: '',
        description: '',
        photos: [],
        price: 0,
    })
    const [loading, setLoading] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0)
   
    AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
    })

    const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME
        }
    });

    const uploadToS3 = (selectedFile) => {
        if (!selectedFile) return;
    
        setLoading(true); 
        
        const params = {
          Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
          Key: `uploads/${Date.now()}_${selectedFile.name}`,
          Body: selectedFile,
          ContentType: selectedFile.type
        };
    
        const options = {
          partSize: 10 * 1024 * 1024, // 10MB chunks
          queueSize: 1
        };
    
        const upload = s3.upload(params, options);
    
        upload.on('httpUploadProgress', (progress) => {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          setUploadProgress(percent);
        });
    
        upload.send((err, data) => {
          setLoading(false); 
          if (err) {
            console.error('Upload error:', err);
          } else {
            console.log('Upload success:', data.Location);
            setDetails({ ...details, photos: [...details.photos, data.Location ] });
            return data.Location;
          }
        });
    };

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const imageUrl = uploadToS3(file);
            } catch (error) {
                console.error('Failed to upload image:', error);
                setLoading(false); 
            }
        }
    }

    const handleRemovePhoto = (indexToRemove) => {
        // Create a new array without the photo at the specified index
        const updatedPhotos = details.photos.filter((_, index) => index !== indexToRemove);
        setDetails(prev => ({
            ...prev,
            photos: updatedPhotos
        }));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails(prev => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true); 

            if (!details.title || !details.category || !details.price || !details.photos?.length) {
                throw new Error('Please fill in all required fields');
            }

            const photoUrls = details.photos
            
            if (photoUrls.length === 0) {
                throw new Error('Photo URLs are missing or invalid');
            }

            const productData = {
                title: details.title,
                category: details.category,
                subcategory: details.subcategory || '',
                description: details.description || '',
                price: details.price,
                photos: photoUrls,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
    
            Object.entries(productData).forEach(([key, value]) => {
                if (value === undefined) {
                    throw new Error(`Field '${key}' is undefined`);
                }
            });
    
            const docRef = await addDoc(collection(db, 'products'), details);

            setDetails({
                title: '',
                category: '',
                subcategory: '',
                description: '',
                photos: [],
                price: 0,
            });
            set(false);
    
            console.log('Product added successfully with ID:', docRef.id);
        } catch (error) {
            console.error('Error adding product:', error.message || error);
        } finally {
            setLoading(false); 
        }
    };
    
    return (
        <div className='absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)] flex items-center justify-center' >
            <div className='flex flex-col bg-white rounded-2xl p-4 gap-2 min-w-[200px] w-[80%] md:w-[40%] relative' >
                {/* Loading Overlay */}
                {loading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.8)] flex flex-col items-center justify-center rounded-2xl z-10">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-blue-500 font-semibold">Yüklənir... {uploadProgress > 0 ? `${uploadProgress}%` : ''}</p>
                    </div>
                )}
                
                <div className='flex justify-between px-2'>
                    <div></div>
                    <button onClick={()=> set(false)} className='text-black text-[16px] font-bold' >x</button>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input 
                        className='text-black p-2 placeholder:text-black border-[1px]' 
                        placeholder='Ad' 
                        type="text" 
                        name='title'
                        value={details.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        className='text-black p-2 placeholder:text-black border-[1px]' 
                        placeholder='Kateqoriya' 
                        type="text" 
                        name='category'
                        value={details.category}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        className='text-black p-2 placeholder:text-black border-[1px]' 
                        placeholder='Alt kateqoriya' 
                        type="text" 
                        name='subcategory'
                        value={details.subcategory}
                        onChange={handleInputChange}
                    />
                    <textarea 
                        className='text-black p-2 placeholder:text-black border-[1px]' 
                        placeholder='Təsvir' 
                        name="description"
                        value={details.description}
                        onChange={handleInputChange}
                    />
                    <input 
                        className='text-black p-2 placeholder:text-black border-[1px]' 
                        placeholder='Qiymət' 
                        type="number" 
                        name="price"
                        value={details.price}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="photos border-[1px] p-2 border-black flex flex-col gap-2">
                        <b className='text-black'>Şəkillər</b>
                        <div className='flex gap-2'>
                            {
                                details.photos.map((photo, index) => (
                                    <div key={index} className="relative">
                                        <img 
                                            className='w-[50px] h-[50px] object-cover' 
                                            src={photo} 
                                            width={50} 
                                            height={50} 
                                            alt={`Product image ${index + 1}`}
                                        />
                                        <button 
                                            type="button"
                                            className='absolute top-0 right-0 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs'
                                            onClick={() => handleRemovePhoto(index)}
                                        >
                                            x
                                        </button>
                                    </div>
                                ))
                            }

                            <div className='w-[50px] h-[50px] flex items-center justify-center bg-blue-500' >
                                <label htmlFor="file" className="cursor-pointer text-white text-xl">+</label>
                                {details.photos.length < 5 && (
                                    <input 
                                        id='file' 
                                        className='hidden' 
                                        onChange={handlePhotoUpload} 
                                        type="file" 
                                        accept="image/*"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className='bg-blue-500 p-2 rounded-xl text-white'
                        disabled={loading}
                    >
                        {loading ? 'Yüklənir...' : 'Yadda Saxla'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct