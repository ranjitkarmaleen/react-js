'use client'
import { useState } from 'react';
import Link from 'next/link';
import './styles.css'; // Import the regular CSS file

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`navbar ${isHovered ? 'navbar-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container">
                {/* Left Side - Logo */}
                <div className="logo">
                    <Link href="/">
                        <span className={`${isHovered ? 'logo-hovered' : ''} font-bold`}>
                            R
                        </span>
                    </Link>
                </div>

                {/* Right Side - Menu Items for Desktop */}
                <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                    <Link href="/about">
                        <span className={`${isHovered ? 'menu-item-hovered' : 'menu-items'} font-bold`}>
                            About
                        </span>
                    </Link>
                    <Link href="/contact">
                        <span className={`${isHovered ? 'menu-item-hovered' : 'menu-items'} font-bold`}>
                            Contact
                        </span>
                    </Link>

                    {/* Down Arrow */}
                    <div className={`arrow ${isHovered ? 'arrow-hidden' : ''} `}>
                        <svg
                            className="arrow-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>

                {/* Hamburger Icon for Small and Medium Devices */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg className={`${isHovered ? 'close-icon-hovered' : 'close-icon'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className={`${isHovered ? 'close-icon-hovered' : 'close-icon'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link href="/about" onClick={toggleMenu}>
                        <span className="mobile-menu-item font-bold">About</span>
                    </Link>
                    <Link href="/contact" onClick={toggleMenu}>
                        <span className="mobile-menu-item font-bold">Contact</span>
                    </Link>
                </div>
            )}


        </nav>
    );
}
