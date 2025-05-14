import styles from './page.module.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ProductClient from './ProductClient';


export default async function ProductPage({ params }) {
  const {id} = params
  async function fetchProductById(productId) {
    try {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("No such product!");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  const product = await fetchProductById(params.id);
  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }
  return <ProductClient product={product} id={id} />;
}
