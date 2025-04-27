'use client';

import React, { useState } from 'react';


export default function ProductCardWithModal({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Ürün Kartı */}
      <div 
        className="product-card" 
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy" // Performans optimizasyonu
        />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="product-modal-overlay" 
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="product-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-modal" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="modal-image" 
                />
              </div>
              
              <div className="modal-details">
                <h2>{product.name}</h2>
                <div className="price-category">
                  <span className="modal-price">${product.price}</span>
                  <span className="modal-category">{product.category}</span>
                </div>
                
                <div className="modal-actions">
                  <button className="add-to-cart">
                    Add to Cart
                  </button>
                  <button className="buy-now">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}