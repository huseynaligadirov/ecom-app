// 'use client';

// import React, { useState } from 'react';


// export default function ProductCardWithModal({ product }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* Ürün Kartı */}
//       <div 
//         className="product-card" 
//         onClick={() => setIsModalOpen(true)}
//       >
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           loading="lazy" // Performans optimizasyonu
//         />
//         <h3>{product.name}</h3>
//         <p>${product.price}</p>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div 
//           className="product-modal-overlay" 
//           onClick={() => setIsModalOpen(false)}
//         >
//           <div 
//             className="product-modal" 
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button 
//               className="close-modal" 
//               onClick={() => setIsModalOpen(false)}
//               aria-label="Close modal"
//             >
//               ×
//             </button>
            
//             <div className="modal-content">
//               <div className="modal-image-container">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="modal-image" 
//                 />
//               </div>
              
//               <div className="modal-details">
//                 <h2>{product.name}</h2>
//                 <div className="price-category">
//                   <span className="modal-price">${product.price}</span>
//                   <span className="modal-category">{product.category}</span>
//                 </div>
                
//                 <div className="modal-actions">
//                   <button className="add-to-cart">
//                     Add to Cart
//                   </button>
//                   <button className="buy-now">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



'use client';

import React, { useState } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons'; // You can use any favorite icon library

export default function ProductCardWithModal({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevent opening the modal when clicking favorite
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {/* Product Card */}
      <div 
        className="product-card" 
        onClick={() => setIsModalOpen(true)}
      >
        <div className="product-card-header">
          <button 
            className="favorite-button"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? <HeartFill color="red" /> : <Heart />}
          </button>
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
          />
        </div>
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
            <div className="modal-header">
              <button 
                className="close-modal" 
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
              <button 
                className="favorite-button-modal"
                onClick={toggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite ? <HeartFill color="red" /> : <Heart />}
              </button>
            </div>
            
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

      <style jsx>{`
        .product-card-header {
          position: relative;
        }
        .favorite-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.7);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
        }
        .favorite-button:hover {
          background: rgba(255, 255, 255, 0.9);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .favorite-button-modal {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }
      `}</style>
    </>
  );
}