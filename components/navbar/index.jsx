
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import '../../app/navbar.css';

// export default function Navbar() {
//     const pathname = usePathname();

//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <Link href="/">LUJIRIYA</Link>
//             </div>
//             <ul className="nav-links">
//                 <li>
//                     <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
//                 </li>
//                 <li>
//                     <Link href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Products</Link>
//                 </li>
//                 <li>
//                     <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
//                 </li>
//                 <li>
//                     <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../app/navbar.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link href="/">LUJIRIYA</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Products</Link>
                    </li>
                    <li>
                        <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </nav>

            {/* Side Menu */}
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="side-menu-header">
                    <span className="close-menu" onClick={toggleMenu}>&times;</span>
                    <h3>Menu</h3>
                </div>
                <div className="side-menu-content">
                    {/* Placeholder for future favorite products */}
                    <p>Menu content will go here</p>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </>
    );
}