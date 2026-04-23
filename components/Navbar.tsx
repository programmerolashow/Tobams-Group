"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#', active: true },
        { name: 'What We Do', href: '#', hasDropdown: true },
        { name: 'Jobs', href: '#', hasDropdown: true },
        { name: 'Projects', href: '#' },
        { name: 'TG Academy', href: '#' },
        { name: 'Strategic Partnership', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Book a Consultation', href: '#' },
    ];

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Top Bar: Logo and Buttons */}
            <div className="flex flex-row w-full max-w-[1440px] mx-auto h-[70px] md:h-[104px] justify-between px-6 md:px-16 items-center">
                <div className="relative w-[120px] md:w-[180px] h-[50px] md:h-[80px]">
                    <Image
                        src="/Tobams-logo.png"
                        alt="Tobams Group"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="hidden md:flex items-center gap-6 h-[48px]">
                    <button className="flex flex-row items-center w-fit h-fit rounded-[4px] border border-[#571244] bg-[#571244] py-2 px-4 gap-3 text-white bg-tobams-dark">
                        <span className="flex flex-row items-center justify-center w-8 h-8 rounded-full bg-[#DDD0DA] gap-[2.67px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#571244" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </span>
                        Account
                        <ChevronDown size={16} />
                    </button>
                    <button className="flex flex-row items-center w-fit h-fit rounded-[4px] bg-[#EF4353] py-2.5 px-5 gap-[10px] text-white bg-tobams-red hover:bg-opacity-90 transition-all">
                        Take Assessment
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden flex items-center justify-center w-11 h-11 bg-black rounded-[12px] shadow-md hover:bg-gray-900 transition-all active:scale-95"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <X size={24} color="white" strokeWidth={3} />
                    ) : (
                        <div className="flex flex-col gap-[4.5px] items-center justify-center transition-all">
                            <div className="w-6 h-[2.5px] bg-white rounded-full" />
                            <div className="w-6 h-[2.5px] bg-white rounded-full" />
                            <div className="w-6 h-[2.5px] bg-white rounded-full" />
                        </div>
                    )}
                </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-[32px] text-sm font-medium text-gray-600">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href} 
                            className={`flex items-center gap-1 transition-colors hover:text-tobams-dark ${link.active ? 'text-tobams-dark border-b-2 border-tobams-dark pb-1' : ''}`}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={14} />}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href} 
                                className={`text-base font-medium py-2 flex items-center justify-between ${link.active ? 'text-tobams-dark font-bold' : 'text-gray-600'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                            <button className="flex items-center justify-center w-full rounded-[4px] bg-tobams-dark py-3 px-4 gap-3 text-white">
                                Account
                            </button>
                            <button className="flex items-center justify-center w-full rounded-[4px] bg-tobams-red py-3 px-5 text-white">
                                Take Assessment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;