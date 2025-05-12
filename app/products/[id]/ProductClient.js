'use client'

import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styles from './page.module.css'

const ProductClient = ({ product, id }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(item => item.id === id)
    setIsFavorite(!!found)
  }, [id])

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const isAlreadyFav = favorites.some(item => item.id === id)

    let updatedFavorites
    if (isAlreadyFav) {
      updatedFavorites = favorites.filter(item => item.id !== id)
    } else {
      updatedFavorites = [...favorites, { id, name: product.name, image: product.image }]
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setIsFavorite(!isAlreadyFav)
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <div className={styles.mainImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.thumbnailContainer}>
          {product.photos.map((img, index) => (
            <div key={index} className={styles.thumbnail}>
              <img src={img} alt={`${product.name} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.actions}>
          <button className={styles.favorite} onClick={handleFavoriteClick}>
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductClient
