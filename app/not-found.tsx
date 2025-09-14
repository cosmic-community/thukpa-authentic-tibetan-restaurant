import Link from 'next/link'
import { MapPin, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-50 section-padding">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-6xl">🍜</span>
          </div>
          <div className="text-8xl font-bold text-primary mb-4">404</div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Page Not Found
            </h1>
            <p className="text-gray-600">
              Looks like this page took a detour to Tibet! 
              The page you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          {/* Navigation Help */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-accent mr-2" />
              <span className="text-sm font-medium text-gray-700">Let us help you find your way</span>
            </div>
            <div className="space-y-2 text-sm">
              <Link 
                href="/"
                className="block text-primary hover:text-primary-600 transition-colors"
              >
                → Visit our homepage
              </Link>
              <Link 
                href="/menu"
                className="block text-primary hover:text-primary-600 transition-colors"
              >
                → Browse our delicious menu
              </Link>
              <Link 
                href="/chef-specialties"
                className="block text-primary hover:text-primary-600 transition-colors"
              >
                → Discover chef's specialties
              </Link>
              <Link 
                href="/contact"
                className="block text-primary hover:text-primary-600 transition-colors"
              >
                → Get in touch with us
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
            <Link
              href="/menu"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Search className="w-4 h-4" />
              <span>Browse Menu</span>
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-12 p-4 bg-accent-50 rounded-lg">
          <p className="text-sm text-accent-700">
            🥢 While you're here, why not explore our authentic Tibetan dishes? 
            Our thukpa is always ready to warm your soul!
          </p>
        </div>
      </div>
    </div>
  )
}