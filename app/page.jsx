

import ProductCarousel from "@/components/ProductCarousel"; 
import HomeAdd from "@/components/HomeAdd"; 
import Link from 'next/link';
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
 
      image: "https://i.pinimg.com/474x/11/a0/d1/11a0d1666b9926582c55e9c50edd3f52.jpg"
    },
    {
      id: 111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/474x/7e/34/87/7e3487f72a884d7110ccf30e0a3bcd27.jpg"
    },
    {
      id: 1111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/474x/f3/2d/a9/f32da9ad43bbcc2c176c364d982895d5.jpg"
    },
    {
      id: 11111,
      name: "Classic Pearl Necklace",
 
      image: "https://i.pinimg.com/474x/d8/6c/2c/d86c2c9b682d634ce574df795bade08f.jpg"
    },

  ];


  return (
    <>
      {/* <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Accessories</h1>
          <p>Discover elegant and timeless pieces</p>
        </div>
      </div> */}
       <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
        <h1>Welcome to Our Accessories</h1>
        <p>Discover elegant and timeless pieces</p>

        <div className="w-4/5 md:w-3/5 flex items-center mx-auto" >
        <input className="bg-white text-black border-0 p-2 outline-none w-full" type="text" name="" id="" />
        {/* <button className="w-[100px] h-[40px] bg-[#FF6F00] " >Axtar</button>   */}
        <button className="w-[100px] h-[40px] bg-red-800 hover:bg-red-700 transition-colors duration-300 shadow-md">
           Axtar
        </button>
        </div>
             
        </div>
      </section>
      
      <div className="trending-container">
     
     <div id="trending" className="trending-title">Trending Products</div>
 
        <ProductCarousel products={products} />
      </div>
     <HomeAdd/>
    </>
  );
}