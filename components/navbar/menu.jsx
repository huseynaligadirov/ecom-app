// import React from 'react'

// const SideMenu = ({ isOpen, type, toggle }) => {
//     switch (type) {
//         case 'menu':
//             return <div className={`side-menu ${isOpen ? 'open' : ''}`}>
//                 <div className="side-menu-header">
//                     <span className="close-menu" onClick={toggle}>&times;</span>
//                     <h3>Links</h3>
//                 </div>
//                 <div className="side-menu-content">
//                     <p>Menu content will go here</p>
//                 </div>
//             </div>
//         case 'like':
//             return <div className={`side-menu ${isOpen ? 'open' : ''}`}>
//                 <div className="side-menu-header">
//                     <span className="close-menu" onClick={toggle}>&times;</span>
//                     <h3>Liked Items</h3>
//                 </div>
//                 <div className="side-menu-content">
//                     <p>Menu content will go here</p>
//                 </div>
//             </div>
//     }
// }

// export default SideMenu


import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideMenu = ({ isOpen, type, toggle }) => {
    const pathname = usePathname()
    
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
                            <li>
                                <Link 
                                    href="/" 
                                    className={`side-nav-link ${pathname === '/' ? 'active' : ''}`}
                                    onClick={toggle}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/products" 
                                    className={`side-nav-link ${pathname === '/products' ? 'active' : ''}`}
                                    onClick={toggle}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className={`side-nav-link ${pathname === '/about' ? 'active' : ''}`}
                                    onClick={toggle}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className={`side-nav-link ${pathname === '/contact' ? 'active' : ''}`}
                                    onClick={toggle}
                                >
                                    Contact
                                </Link>
                            </li>
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
                        <p>Menu content will go here</p>
                    </div>
                </div>
            )
    }
}

export default SideMenu