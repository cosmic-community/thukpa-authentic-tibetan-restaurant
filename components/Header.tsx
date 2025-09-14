'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg border-b-2 border-primary-200 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2">
        <div className="container-width section-padding">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden sm:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Chandmari Road, Guwahati</span>
              </div>
            </div>
            <div className="text-xs opacity-90">
              Open: Mon-Sun 11:00 AM - 10:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-width section-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍜</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Thukpa</h1>
              <p className="text-sm text-secondary -mt-1">Authentic Tibetan Restaurant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/chef-specialties" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Chef's Specialties
            </Link>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              News & Events
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Menu
              </Link>
              <Link 
                href="/chef-specialties" 
                className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Chef's Specialties
              </Link>
              <Link 
                href="/news" 
                className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                News & Events
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="btn-primary inline-block text-center mt-4"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}