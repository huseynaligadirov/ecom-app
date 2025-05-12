

'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'; 

const SideMenu = ({ isOpen, type, toggle }) => {
    const pathname = usePathname();
    const [favorites, setFavorites] = useState([]);
  
    // Favorileri localStorage'dan oku
    useEffect(() => {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    }, [isOpen]);

    const removeFromFavorites = (id) => {
      const updated = favorites.filter((item) => item.id !== id);
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    };
  switch (type) {
    case 'menu':
      return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
          <div className="side-menu-header">
            <span className="close-menu text-gray-600" onClick={toggle}>&times;</span>
            <h3 className='text-gray-600 hover:text-gray-800'>Menu</h3>
          </div>
          <div className="side-menu-content">
            <ul className="side-nav-links space-y-6 text-[19px] text-gray-700 ">
              <li><Link href="/" onClick={toggle} className={pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link href="/products" onClick={toggle} className={pathname === '/products' ? 'active' : ''}>Products</Link></li>
              <li><Link href="/about" onClick={toggle} className={pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link href="/contact" onClick={toggle} className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )
      case 'like':
        return (
          <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="side-menu-header">
              <span className="close-menu" onClick={toggle}>&times;</span>
              <h3>Liked Items</h3>
            </div>
            <div className="side-menu-content">
              {favorites.length === 0 ? (
                <p>No favorite items.</p>
              ) : (
                <ul className="space-y-4">
                  {favorites.map(item => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
                    >
                 
                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center space-x-3 w-full"
                        onClick={toggle}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-gray-800 font-medium">{item.name}</span>
                      </Link>
      
                      
                      <button
                        onClick={() => removeFromFavorites(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                        title="Remove from favorites"
                      >
                        <FaHeart />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      
      
      
      
  }
}

export default SideMenu
