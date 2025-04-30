import React from 'react'

const SideMenu = ({ isOpen, type, toggle }) => {
    switch (type) {
        case 'menu':
            return <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="side-menu-header">
                    <span className="close-menu" onClick={toggle}>&times;</span>
                    <h3>Links</h3>
                </div>
                <div className="side-menu-content">
                    <p>Menu content will go here</p>
                </div>
            </div>
        case 'like':
            return <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="side-menu-header">
                    <span className="close-menu" onClick={toggle}>&times;</span>
                    <h3>Liked Items</h3>
                </div>
                <div className="side-menu-content">
                    <p>Menu content will go here</p>
                </div>
            </div>
    }
}

export default SideMenu