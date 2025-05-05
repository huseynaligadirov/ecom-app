"use client"
import React, { useState } from 'react'
import AddProduct from './AddProduct'

const Products = () => {
  const [showAdd, setShow] = useState(false)
  return (
    <>
      {showAdd && <AddProduct set={setShow} />}
      <div>
        <button onClick={() => setShow(true)} className='bg-green-800 text-white p-2 rounded-md' >+ Yeni</button>
        <p>here will be table</p>
      </div>
    </>
  )
}

export default Products