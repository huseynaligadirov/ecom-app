import React, { useState } from 'react'

const Products = () => {
    const [showAdd, setShow] = useState(false)
  return (
    <div>
        <button className='bg-green-800 text-white p-2 rounded-md' >+ Yeni</button>
        <p>here will be table</p>
    </div>
  )
}

export default Products