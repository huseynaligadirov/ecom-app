'use client';


import React from 'react';
import './style.css'; 

const ProductCarousel = ({ products }) => {
  const containerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 300;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel">
      <button 
        className="carousel__button carousel__button--prev"
        onClick={() => scroll('left')}
      >
        &lt;
      </button>
      
      <div className="carousel__container" ref={containerRef}>
        {products.map(product => (
          <div key={product.id} className="carousel__card">
            <img 
              src={product.image} 
              alt={product.name}
              className="carousel__image"
            />
            <div className="carousel__content">
              <h3 className="carousel__title">{product.name}</h3>
             
           
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="carousel__button carousel__button--next"
        onClick={() => scroll('right')}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductCarousel;