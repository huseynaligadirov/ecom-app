
// import ProductCardWithModal from "@/components/ProductCardWithModal"; 
// import './products.css'; 

// async function getProducts() {
//   return  [
//         { name: 'gold bracelet', category: 'bracelet', price: 99, image: 'https://i.pinimg.com/474x/47/99/0e/47990e29b594921cf2740f16f71918f4.jpg' },
//         { name: 'gold earing', category: 'earring', price: 149, image: 'https://i.pinimg.com/474x/d8/6c/2c/d86c2c9b682d634ce574df795bade08f.jpg' },
//         { name: 'gold earing 2', category: 'earring', price: 79, image: 'https://i.pinimg.com/474x/4c/f3/09/4cf3095b3fea2491f3c99cca63b2c0fb.jpg' },
//         { name: 'olivia burton watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/51/b2/92/51b29250597ee90a811c2c3211aa8647.jpg' },
//         { name: 'cartier watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/68/89/58/688958cbc7fac1d152fe66933c47eef0.jpg' },
//         { name: 'gold ring', category: 'ring', price: 79, image: 'https://i.pinimg.com/474x/1c/cc/e6/1ccce68196c5ead26c0743dd45071a92.jpg' },
//         { name: 'silver heart necklace', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/12/57/e7/1257e73920d9d96c7ef2d7a18116ab0c.jpg' },
//         { name: 'blue butterfly', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/39/bf/72/39bf72c1240e6a0f7e4733ff835b9b35.jpg' },
//         { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/f6/9b/d1/f69bd1a794af030807043c3c50297f91.jpg' },
//         { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/fd/14/8a/fd148a9eed04dcf452d177d4c57b8172.jpg' },
//         { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/d0/d4/81/d0d481276ddf56fddc871790a5216cc7.jpg' },
//         { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/736x/6a/e0/8e/6ae08e4e7a2a37f396967bd3fe148ebd.jpg' },
//       ];
// }

// export default async function Products({ searchParams }) {
//   const allProducts = await getProducts();
//   const searchQuery = searchParams?.search?.toLowerCase() || '';
//   const selectedCategory = searchParams?.category || 'all';

//   const filteredProducts = allProducts.filter(product =>
//     (product.name.toLowerCase().includes(searchQuery) || searchQuery === '') &&
//     (selectedCategory === 'all' || product.category === selectedCategory)
//   );
  
//   return (
//     <div className="products">
//     <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         fontSize: '3rem',
//         marginTop: '2rem',
//         color: 'black',
//         fontWeight: '500',
//         fontFamily: 'Bellefair, serif',
//       }}>
//         Products
//       </div>
      
//       <section className="products-container">
//         {filteredProducts.map((product, index) => (
//           <ProductCardWithModal key={index} product={product} />
//         ))}
//       </section>
//     </div>
//   );
// }



import ProductCardWithModal from "@/components/ProductCardWithModal"; 
import './products.css'; 

async function getProducts() {
  return  [
        { name: 'gold bracelet', category: 'bracelet', price: 99, image: 'https://i.pinimg.com/474x/47/99/0e/47990e29b594921cf2740f16f71918f4.jpg' },
        { name: 'gold earing', category: 'earring', price: 149, image: 'https://i.pinimg.com/474x/d8/6c/2c/d86c2c9b682d634ce574df795bade08f.jpg' },
        { name: 'gold earing 2', category: 'earring', price: 79, image: 'https://i.pinimg.com/474x/4c/f3/09/4cf3095b3fea2491f3c99cca63b2c0fb.jpg' },
        { name: 'olivia burton watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/51/b2/92/51b29250597ee90a811c2c3211aa8647.jpg' },
        { name: 'cartier watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/68/89/58/688958cbc7fac1d152fe66933c47eef0.jpg' },
        { name: 'gold ring', category: 'ring', price: 79, image: 'https://i.pinimg.com/474x/1c/cc/e6/1ccce68196c5ead26c0743dd45071a92.jpg' },
        { name: 'silver heart necklace', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/12/57/e7/1257e73920d9d96c7ef2d7a18116ab0c.jpg' },
        { name: 'blue butterfly', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/39/bf/72/39bf72c1240e6a0f7e4733ff835b9b35.jpg' },
        { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/f6/9b/d1/f69bd1a794af030807043c3c50297f91.jpg' },
        { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/fd/14/8a/fd148a9eed04dcf452d177d4c57b8172.jpg' },
        { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/474x/d0/d4/81/d0d481276ddf56fddc871790a5216cc7.jpg' },
        { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/736x/6a/e0/8e/6ae08e4e7a2a37f396967bd3fe148ebd.jpg' },
      ];
}

export default async function Products({ searchParams }) {
  const allProducts = await getProducts();
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const selectedCategory = searchParams?.category || 'all';
  
  // Get unique categories for the dropdown
  const categories = ['all', ...new Set(allProducts.map(product => product.category))];

  const filteredProducts = allProducts.filter(product =>
    (product.name.toLowerCase().includes(searchQuery) || searchQuery === '') &&
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
      
      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <form className="search-form" action="/products">
          <div className="category-dropdown">
            <select 
              name="category" 
              defaultValue={selectedCategory}
              className="category-select"
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
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      
      <section className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCardWithModal key={index} product={product} />
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