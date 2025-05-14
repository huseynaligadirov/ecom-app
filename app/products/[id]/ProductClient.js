'use client'

import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const ProductClient = ({ product, id }) => {
  const [active, setActive] = useState(product.photos[0])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(item => item.id === id)
    setIsFavorite(!!found)
  }, [id])

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const isAlreadyFav = favorites.some(item => item.id === id)

    const updatedFavorites = isAlreadyFav
      ? favorites.filter(item => item.id !== id)
      : [...favorites, { id, name: product.name, image: product.image }]

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setIsFavorite(!isAlreadyFav)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-10 text-gray-800 flex flex-col md:flex-row gap-8">
      {/* Images */}
      <div className="flex-1">
        <div className="border rounded-lg h-[500px] flex items-center justify-center overflow-hidden mb-4">
          <img className="max-w-full max-h-full object-contain" src={active} alt={product.name} />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {product.photos.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(img)}
              className="w-20 h-20 border rounded cursor-pointer overflow-hidden"
            >
              <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 px-0 md:px-6">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-[#b12704] mb-3">${product.price}</p>
        <p className="capitalize text-gray-600 mb-4">{product.category}</p>
        <p className="leading-relaxed text-base mb-6">{product.description}</p>

        <div className="flex items-center gap-4">
          <button onClick={handleFavoriteClick} className="text-2xl">
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductClient
