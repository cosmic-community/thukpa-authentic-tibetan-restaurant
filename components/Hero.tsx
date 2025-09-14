import { ChevronDown } from 'lucide-react'
import { RestaurantInfo } from '@/types'

interface HeroProps {
  restaurantInfo: RestaurantInfo | null
}

export default function Hero({ restaurantInfo }: HeroProps) {
  const restaurantName = restaurantInfo?.metadata?.restaurant_name || 'Thukpa - Authentic Tibetan Restaurant'
  const aboutDescription = restaurantInfo?.metadata?.about_description || 'Experience the authentic flavors of Tibet in the heart of Guwahati.'
  const heroImage = restaurantInfo?.metadata?.restaurant_photos?.[0]?.imgix_url || 
    'https://imgix.cosmicjs.com/5f96cfe0-916c-11f0-82f6-5d2d79fe0767-photo-1517248135467-4c7edcad34c4-1757855522725.jpg'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress)`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-full mb-8">
            <span className="text-accent-200 text-sm font-medium">Welcome to Authentic Tibetan Cuisine</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="block text-white drop-shadow-2xl">
              {restaurantName.split(' - ')[0] || 'Thukpa'}
            </span>
            <span className="block text-accent text-3xl md:text-4xl font-medium mt-2 drop-shadow-lg">
              {restaurantName.split(' - ')[1] || 'Authentic Tibetan Restaurant'}
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-8">
            <div 
              className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: aboutDescription }}
            />
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-10">
            <span className="text-white/90 font-medium">📍 Chandmari, Guwahati, Assam</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/menu"
              className="btn-primary px-8 py-4 text-lg font-semibold bg-accent hover:bg-accent-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="px-8 py-4 text-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Make a Reservation
            </a>
          </div>

          {/* Opening Hours */}
          <div className="mt-12 text-white/80">
            <p className="text-sm font-medium">Open Daily</p>
            <p className="text-lg">11:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-gentle">
        <ChevronDown className="w-6 h-6" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  )
}