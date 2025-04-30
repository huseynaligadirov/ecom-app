
import React from 'react';
import Link from 'next/link';


export default function HomeAdd() {
  const categories = [
    { name: "Necklaces", image: "https://i.pinimg.com/474x/70/a0/45/70a045d6146336f581eecc3be902dd28.jpg", slug:'necklackes' },
    { name: "Rings", image: "https://i.pinimg.com/474x/eb/83/fe/eb83fef71973eb19e92c462fcbc8a021.jpg" ,slug:'rings'},
    { name: "Earrings", image: "https://i.pinimg.com/474x/1f/05/12/1f0512ab67b98ce06f08113283229b2b.jpg" , slug:'earrings'},
  ];

  const reviews = [
    { id: 1, text: "The quality exceeded my expectations!", author: "Zeynep A." },
    { id: 2, text: "Perfect gift for my mother.", author: "Can D." },
  ];

  return (
    <div>
      {/* HeroSection */}
      <section className="hero-section2">
        <div className="hero-overlay2"></div>
        <div className="hero-content2">
          <h1>Welcome to Benim Jewelry</h1>
          <p>Timeless elegance, crafted for you</p>
     <Link href="/products">
     <button className="cta-button">Explore Collections</button>
     </Link>     
        </div>
      </section>

      {/* FeaturedCategories */}
      <div className="categories-container">
        <h2 className="section-title text-red-900">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
                <Link key={index} href={`/products?category=${category.slug}`}>

            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>

             </Link>
          ))}
        </div>
      </div>

      {/* SpecialOffer */}
      <section className="special-offer" id='indirimler'>
        <div className="offer-content text-red-500 font-medium ">
          <h2>Limited Time Offer!</h2>
          <p>
            Get 15% off with code: <strong>GOLD15</strong>
          </p>
          <button className="offer-button mt-8 ">Shop Now</button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="testimonials-container">
        <h2 className="section-title text-red-900">Loved by Customers</h2>
        <div className="reviews-grid text-gray-900">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p>"{review.text}"</p>
              <span className='text-gray-500 ' >— {review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
