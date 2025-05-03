import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './page.module.css';

// This should match your product data structure
const products = [
  { 
    id: 1, 
    name: 'gold bracelet', 
    category: 'bracelet', 
    price: 99, 
    description: 'Beautiful gold bracelet with intricate details.', 
    image: 'https://i.pinimg.com/474x/47/99/0e/47990e29b594921cf2740f16f71918f4.jpg',
    altImages: [
      'https://example.com/alt1.jpg',
      'https://example.com/alt2.jpg'
    ]
  },
  // Add all other products with the same structure
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(id) {
  return products.find(product => product.id === parseInt(id));
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <div className={styles.mainImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.thumbnailContainer}>
          {product.altImages.map((img, index) => (
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
          <button className={styles.addToCart}>Add to Cart</button>
          <button className={styles.favorite}>
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
}