import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react'
import { RestaurantInfo as RestaurantInfoType } from '@/types'

interface RestaurantInfoProps {
  restaurantInfo: RestaurantInfoType | null
}

export default function RestaurantInfo({ restaurantInfo }: RestaurantInfoProps) {
  if (!restaurantInfo) {
    return null
  }

  const {
    restaurant_name,
    address,
    phone_number,
    email,
    opening_hours,
    about_description,
    restaurant_photos
  } = restaurantInfo.metadata || {}

  // Parse opening hours into structured data
  const parseOpeningHours = (hours?: string) => {
    if (!hours) return { main: 'Hours not available', break: '' }
    
    const lines = hours.split('\n').filter(line => line.trim())
    const main = lines[0] || 'Hours not available'
    const break_info = lines.find(line => line.toLowerCase().includes('break')) || ''
    
    return { main, break: break_info }
  }

  const hours = parseOpeningHours(opening_hours)
  const galleryImages = restaurant_photos?.slice(0, 6) || []

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary text-sm font-medium">Visit Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Restaurant Information
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know for your visit to our authentic Tibetan restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* About */}
            {about_description && (
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
                <div 
                  className="prose-custom text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: about_description }}
                />
              </div>
            )}

            {/* Contact Details */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                {/* Address */}
                {address && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 whitespace-pre-line">{address}</p>
                      <a 
                        href={`https://maps.google.com/search/${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-600 text-sm font-medium mt-2 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {phone_number && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a 
                        href={`tel:${phone_number}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {phone_number}
                      </a>
                    </div>
                  </div>
                )}

                {/* Email */}
                {email && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${email}`}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warm-200 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warm-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">{hours.main}</p>
                    {hours.break && (
                      <p className="text-gray-500 text-sm mt-1">{hours.break}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          {galleryImages.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Restaurant Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((photo, index) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                      index === 0 ? 'col-span-2 h-64' : 'h-32'
                    }`}
                  >
                    <img
                      src={`${photo.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={`${restaurant_name || 'Restaurant'} - Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width="300"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-warm rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Authentic Tibetan Cuisine?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join us for an unforgettable dining experience with traditional flavors and warm hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone_number}`}
              className="btn-secondary bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Call for Reservation
            </a>
            <a
              href="/contact"
              className="px-8 py-4 text-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}