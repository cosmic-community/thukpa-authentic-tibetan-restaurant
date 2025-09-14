import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍜</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Thukpa</h3>
                <p className="text-primary-200 text-sm">Authentic Tibetan Restaurant</p>
              </div>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Experience the authentic flavors of Tibet in the heart of Guwahati. 
              Our traditional recipes and warm hospitality make every meal a memorable journey 
              through the rich culinary heritage of the Himalayas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/thukparestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/thukparestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/thukparestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                Menu
              </Link>
              <Link 
                href="/chef-specialties" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                Chef's Specialties
              </Link>
              <Link 
                href="/news" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                News & Events
              </Link>
              <Link 
                href="/about" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block text-primary-200 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-200 text-sm">
                  <p>Chandmari Road,</p>
                  <p>Near Gauhati University</p>
                  <p>Guwahati, Assam 781014</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+919876543210"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@thukparestaurant.com"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  info@thukparestaurant.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-200 text-sm">
                  <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
                  <p className="text-xs opacity-75">Break: 3:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary-900 py-6">
        <div className="container-width section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-300 text-sm">
            <p>
              © {currentYear} Thukpa Restaurant. All rights reserved. 
              Authentic Tibetan cuisine in Guwahati, Assam.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}