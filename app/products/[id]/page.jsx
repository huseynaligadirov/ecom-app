import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './page.module.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function fetchProductById(productId) {
  try {
    const docRef = doc(db, "products", productId); // "products" is your collection name
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // returns the product data
    } else {
      throw new Error("No such product!");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const product = await fetchProductById(params.id)

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
          <button className={styles.addToCart}>Add to Cart</button>
          <button className={styles.favorite}>
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
}