

import ProductCarousel from "@/components/ProductCarousel"; 

export default async function Home() {
   const products = [
    {
      id: 1,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/736x/0a/33/07/0a330793038fba55862184d70abd51ac.jpg"
    },
    {
      id: 2,
      name: "Leather Wrap Bracelet",
   
      image: "/images/leather-bracelet.jpg"
    },
    {
      id: 3,
      name: "Geometric Earrings",
   
      image: "/images/geometric-earrings.jpg"
    },
    {
      id: 4,
      name: "Silver Bangle Set",

      image: "/images/silver-bangles.jpg"
    },
    {
      id: 5,
      name: "Statement Ring",

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
        <ProductCarousel products={products} />
      </div>
    </>
  );
}