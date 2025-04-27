
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../app/navbar.css';

export default function Navbar() {
    const pathname = usePathname();

    return (
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
        </nav>
    );
}
