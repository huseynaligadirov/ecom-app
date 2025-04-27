

// import React from 'react';


// export default function Home() {

//   return (
//     <>
//      <div className="hero-section">
//       <div className="hero-content">
//         <h1>Welcome to Our Accessories</h1>
//         <p>Discover elegant and timeless pieces</p>
//       </div>
//     </div>
//     <div className='trending-title'>
//     Trending Products
//     </div>
//     </>
//   );
// }


export default async function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Pearl Necklace",
      description: "Elegant freshwater pearls",
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 2,
      name: "Leather Wrap Bracelet",
      description: "Genuine leather bracelet",
      image: "/images/leather-bracelet.jpg"
    },
    {
      id: 3,
      name: "Geometric Earrings",
      description: "Modern geometric design",
      image: "/images/geometric-earrings.jpg"
    },
    {
      id: 4,
      name: "Silver Bangle Set",
      description: "Set of three silver bangles",
      image: "/images/silver-bangles.jpg"
    },
    {
      id: 5,
      name: "Statement Ring",
      description: "Bold fashion statement ring",
      image: "/images/statement-ring.jpg"
    }
  ];

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Accessories</h1>
          <p>Discover elegant and timeless pieces</p>
        </div>
      </div>
      
      <div className="trending-container">
        <div className="trending-title">Trending Products</div>
        <div className="carousel">
          <button className="arrow left-arrow">&lt;</button>
          <div className="products-containerr">
            {products.map(product => (
              <div key={product.id} className="product-cardd">
                <div className="product-imagee">
               
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
              </div>
            ))}
          </div>
          <button className="arrow right-arrow">&gt;</button>
        </div>
      </div>
    </>
  );
}