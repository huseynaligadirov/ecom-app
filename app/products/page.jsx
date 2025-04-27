// import React from 'react';
// import './products.css';



// async function getProducts() {
//   return  [
//     { name: 'gold bracelet', category: 'bracelet', price: 99, image: 'https://i.pinimg.com/474x/47/99/0e/47990e29b594921cf2740f16f71918f4.jpg' },
//     { name: 'gold earing', category: 'earring', price: 149, image: 'https://i.pinimg.com/474x/d8/6c/2c/d86c2c9b682d634ce574df795bade08f.jpg' },
//     { name: 'gold earing 2', category: 'earring', price: 79, image: 'https://i.pinimg.com/474x/20/ae/5a/20ae5acab18fcfe2e2b8f8cae2b08bb4.jpg' },
//     { name: 'olivia burton watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/51/b2/92/51b29250597ee90a811c2c3211aa8647.jpg' },
//     { name: 'cartier watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/68/89/58/688958cbc7fac1d152fe66933c47eef0.jpg' },
//     { name: 'gold ring', category: 'ring', price: 79, image: 'https://i.pinimg.com/474x/1c/cc/e6/1ccce68196c5ead26c0743dd45071a92.jpg' },
//     { name: 'silver heart necklace', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/12/57/e7/1257e73920d9d96c7ef2d7a18116ab0c.jpg' },
//     { name: 'blue butterfly', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/39/bf/72/39bf72c1240e6a0f7e4733ff835b9b35.jpg' },
//     { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg' },
//   ];

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
//       <div style={{
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

//       {/* Filters */}
//       <div className="filters" style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgb(53, 57, 53)' }}>
//         <form method="get">
//           <input
//             type="text"
//             name="search"
//             placeholder="Search by name"
//             defaultValue={searchQuery}
//             style={{ padding: '0.5rem', fontSize: '1rem' }}
//           />
//           <select
//             name="category"
//             defaultValue={selectedCategory}
//             style={{ padding: '0.5rem', fontSize: '1rem', marginLeft: '1rem' }}
//           >
//             <option value="all">All Categories</option>
//             <option value="bracelet">Bracelets</option>
//             <option value="earring">Earrings</option>
//             <option value="watch">Watches</option>
//             <option value="ring">Rings</option>
//             <option value="necklace">Necklaces</option>
//           </select>
//           <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>Search</button>
//         </form>
//       </div>

//       {/* Product list */}
//       <section className="products-container">
//         {filteredProducts.map((product, index) => (
//           <div className="product-card" key={index}>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//           </div>
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
        { name: 'gold earing 2', category: 'earring', price: 79, image: 'https://i.pinimg.com/474x/20/ae/5a/20ae5acab18fcfe2e2b8f8cae2b08bb4.jpg' },
        { name: 'olivia burton watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/51/b2/92/51b29250597ee90a811c2c3211aa8647.jpg' },
        { name: 'cartier watch', category: 'watch', price: 79, image: 'https://i.pinimg.com/474x/68/89/58/688958cbc7fac1d152fe66933c47eef0.jpg' },
        { name: 'gold ring', category: 'ring', price: 79, image: 'https://i.pinimg.com/474x/1c/cc/e6/1ccce68196c5ead26c0743dd45071a92.jpg' },
        { name: 'silver heart necklace', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/12/57/e7/1257e73920d9d96c7ef2d7a18116ab0c.jpg' },
        { name: 'blue butterfly', category: 'necklace', price: 79, image: 'https://i.pinimg.com/736x/39/bf/72/39bf72c1240e6a0f7e4733ff835b9b35.jpg' },
        { name: 'cartier bracelet', category: 'bracelet', price: 79, image: 'https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg' },
      ];
}

export default async function Products({ searchParams }) {
  const allProducts = await getProducts();
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const selectedCategory = searchParams?.category || 'all';

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
      
      <section className="products-container">
        {filteredProducts.map((product, index) => (
          <ProductCardWithModal key={index} product={product} />
        ))}
      </section>
    </div>
  );
}