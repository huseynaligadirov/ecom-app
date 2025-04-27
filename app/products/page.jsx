//                                                EL ILE MEHSUL YERLESDIRME 

'use client'
import React, { useState } from 'react';
import './products.css';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Məhsulların məlumatları
  const products = [
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

  // Məhsul axtarışı və kateqoriya filtri
  const filteredProducts = products.filter(product => 
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') &&
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

      {/* Axtarış və kateqoriya filterləri */}
      <div className="filters" style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgb(53, 57, 53)' }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem', marginLeft: '1rem' }}
        >
          <option value="all">All Categories</option>
          <option value="bracelet">Bracelets</option>
          <option value="earring">Earrings</option>
          <option value="watch">Watches</option>
          <option value="ring">Rings</option>
          <option value="necklace">Necklaces</option>
        </select>
      </div>

      {/* Məhsul siyahısı */}
      <section className="products-container">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}



                                                        //FETCH OLANDAN SONRA 
// // import React, { useEffect, useState } from 'react';
// // import './products.css';  // CSS faylını import et

// // export default function Products() {
// //   const [products, setProducts] = useState([]); // Məhsulların saxlanacağı state
// //   const [loading, setLoading] = useState(true); // Yükləmə vəziyyəti

// //   // Məhsulları fetch edirik
// //   useEffect(() => {
// //     fetch('https://api.example.com/products') // API linki
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data);  
// //         setLoading(false);    
// //       })
// //       .catch((error) => console.error('Error fetching products:', error));
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;  
// //   }

// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <div key={product.id} className="product-card">
// //           <img src={product.image} alt={product.name} />
// //           <h3>{product.name}</h3>
// //           <p>{product.price} AZN</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

