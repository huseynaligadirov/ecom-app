

import ProductCarousel from "@/components/ProductCarousel"; 

export default async function Home() {
   const products = [
    {
      id: 1,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 11,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 1111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 11111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },

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
        <ProductCarousel products={products} />
      </div>
    </>
  );
}