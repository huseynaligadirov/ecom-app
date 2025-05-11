// "use client"
// import React, { useState } from 'react'
// import AddProduct from './AddProduct'

// const Products = () => {
//   const [showAdd, setShow] = useState(false)
//   return (
//     <>
//       {showAdd && <AddProduct set={setShow} />}
//       <div>
//         <button onClick={() => setShow(true)} className='bg-green-800 text-white p-2 rounded-md' >+ Yeni</button>
//         <p>here will be table</p>
//       </div>
//     </>
//   )
// }

// export default Products




'use client'
import React, { useState, useEffect } from 'react'
import AddProduct from './AddProduct'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const Products = () => {
  const [showAdd, setShow] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchProducts = async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(productsList)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }


  const handleDelete = async (id) => {
    if (window.confirm('Bu məhsulu silmək istədiyinizə əminsiniz?')) {
      try {
        await deleteDoc(doc(db, 'products', id))
       
        fetchProducts()
      } catch (error) {
        console.error('Error deleting product:', error)
      }
    }
  }


  useEffect(() => {
    fetchProducts()
  }, [showAdd])

  return (
    <>
      {showAdd && <AddProduct set={setShow} />}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">Məhsullar</h2>
          <button 
            onClick={() => setShow(true)} 
            className='bg-green-800 text-white p-2 rounded-md'
          >
            + Yeni
          </button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-gray-100 p-4 rounded-md text-gray-700 text-center">
            Heç bir məhsul tapılmadı
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="py-2 px-4 border">Şəkil</th>
                  <th className="py-2 px-4 border">Ad</th>
                  <th className="py-2 px-4 border">Kateqoriya</th>
                  <th className="py-2 px-4 border">Qiymət</th>
                  <th className="py-2 px-4 border">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="text-black">
                    <td className="py-2 px-4 border">
                      <div className="flex gap-1 overflow-x-auto" style={{ maxWidth: '200px' }}>
                        {product.photos && product.photos.length > 0 ? (
                          product.photos.map((photo, index) => (
                            <img 
                              key={index}
                              src={photo} 
                              alt={`${product.title} - ${index}`}
                              className="w-16 h-16 object-cover border rounded"
                            />
                          ))
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">No image</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-2 px-4 border">{product.title}</td>
                    <td className="py-2 px-4 border">
                      {product.category}
                      {product.subcategory && <span className="text-xs text-gray-500 block">{product.subcategory}</span>}
                    </td>
                    <td className="py-2 px-4 border">{product.price}</td>
                    <td className="py-2 px-4 border">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Products