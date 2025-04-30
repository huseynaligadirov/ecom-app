"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../app/navbar.css';
import { FaHeart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import SideMenu from '@/components/navbar/menu'
export default function Navbar() {
    const pathname = usePathname();
    const [menuType, setMenuType] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="menu-icon" onClick={()=> {
                    toggleMenu()
                    setMenuType('menu')
                }}>
                    <IoMenu size={28} color='#333333a2' />
                </div>
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
                <div className="liked-icon" onClick={()=> {
                    toggleMenu()
                    setMenuType('like')
                }}>
                    <FaHeart size={22} color='#333333a2'/>
                </div>
            </nav>

            <SideMenu isOpen={isMenuOpen} toggle={toggleMenu} type={menuType} />


            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </>
    );
}