import ProductCard from "@/components/ProductCard"; 
import './products.css'; 
import {  collection, getDocs, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";



  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      return productsList
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      console.log('')
    }
  }


export default async function Products({ searchParams }) {
  const allProducts = await fetchProducts();
  console.log(allProducts);
  
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const selectedCategory = searchParams?.category || 'all';
  
  const categories = ['all', ...new Set(allProducts.map(product => product.category))];

  const filteredProducts = allProducts.filter(product =>
    (product.title.toLowerCase().includes(searchQuery) || searchQuery === '') &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );
  
  return (
    <div className="products">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '3rem',
        marginTop: '2rem',
        color: 'black',
        fontWeight: '500',
        fontFamily: 'Bellefair, serif',
      }}>
        Products
      </div>
      
      <div className="search-filter-container">
        <form className="search-form" action="/products">
          <div className="category-dropdown">
            <select 
              name="category" 
              defaultValue={selectedCategory}
              className="category-select text-red-900"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            defaultValue={searchQuery}
            className="search-input text-red-800"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      
      <section className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-results">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}