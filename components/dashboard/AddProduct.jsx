'use client'
import React, { useState } from 'react'

const AddProduct = ({set}) => {
    const [details, setDetails] = useState({
        title: '',
        category: '',
        subcategory: '',
        description: '',
        photos: [],
        price: 0,
    })
    return (
        <div className='absolute top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)] flex items-center justify-center' >
            <div className='flex flex-col bg-white rounded-2xl p-4 gap-2' >
                <div className='flex justify-between px-2'>
                    <div></div>
                    <button onClick={()=> set(false)} className='text-black text-[16px] font-bold' >x</button>
                </div>
                <input className='text-black p-2 placeholder:text-black border-[1px]' placeholder='Ad' type="text" name='title' />
                <input className='text-black p-2 placeholder:text-black border-[1px]' placeholder='Kateqoriya' type="text" name='category' />
                <input className='text-black p-2 placeholder:text-black border-[1px]' placeholder='Alt kateqoriya' type="text" name='subcategory' />
                <textarea className='text-black p-2 placeholder:text-black border-[1px]' placeholder='Təsvir' name="description" id=""></textarea>
                <input className='text-black p-2 placeholder:text-black border-[1px]' placeholder='Qiymət' type="number" name="price" id="" />
                <div className="photos border-[1px] p-2 border-black flex flex-col gap-2">
                    <b className='text-black' >Şəkillər</b>
                    <div className='flex gap-2'>
                        {
                            details.photos.map((x, index) => <img className='w-[50px] h-[50px]' key={index} src={URL.createObjectURL(x)} width={200} height={200} />)
                        }

                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-blue-500' >
                            <label htmlFor="file">+</label>
                            <input id='file' className='hidden' onChange={e => setDetails({ ...details, photos: [...details.photos, e.target.files[0]] })} type="file" />
                        </div>
                    </div>
                </div>

                <button className='bg-blue-500 p-2 rounded-xl'>Yadda Saxla</button>
            </div>
        </div>
    )
}

export default AddProduct