import Link from 'next/link'
import { Star, Flame } from 'lucide-react'
import { MenuItem } from '@/types'

interface FeaturedMenuProps {
  menuItems: MenuItem[]
}

export default function FeaturedMenu({ menuItems }: FeaturedMenuProps) {
  // Filter featured items (chef's specials) and limit to 6
  const featuredItems = menuItems
    .filter(item => item.metadata?.chefs_special)
    .slice(0, 6)

  // If no featured items, show first 6 regular items
  const displayItems = featuredItems.length > 0 ? featuredItems : menuItems.slice(0, 6)

  const getSpiceColor = (spiceLevel?: string) => {
    switch (spiceLevel) {
      case 'Mild': return 'spice-mild'
      case 'Medium': return 'spice-medium'
      case 'Spicy': return 'spice-spicy'
      default: return 'spice-mild'
    }
  }

  const getSpiceIcon = (spiceLevel?: string) => {
    const count = spiceLevel === 'Spicy' ? 3 : spiceLevel === 'Medium' ? 2 : 1
    return Array.from({ length: count }, (_, i) => (
      <Flame key={i} className="w-3 h-3 fill-current" />
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary text-sm font-medium">Featured Dishes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chef's Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved dishes, prepared with authentic Tibetan recipes 
            passed down through generations.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Dish Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                {item.metadata?.dish_image?.imgix_url ? (
                  <img
                    src={`${item.metadata.dish_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={item.metadata?.dish_name || item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width="300"
                    height="200"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-warm flex items-center justify-center">
                    <span className="text-4xl">🍜</span>
                  </div>
                )}
                
                {/* Chef's Special Badge */}
                {item.metadata?.chefs_special && (
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Chef's Special
                    </div>
                  </div>
                )}

                {/* Price Badge */}
                {item.metadata?.price && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.metadata.price}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {item.metadata?.dish_name || item.title}
                  </h3>
                  
                  {/* Spice Level */}
                  {item.metadata?.spice_level?.value && (
                    <div className={`spice-badge ${getSpiceColor(item.metadata.spice_level.value)} flex items-center`}>
                      {getSpiceIcon(item.metadata.spice_level.value)}
                      <span className="ml-1">{item.metadata.spice_level.value}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.metadata?.description || 'A delicious authentic Tibetan dish prepared with traditional ingredients and spices.'}
                </p>

                {/* Category */}
                {item.metadata?.category?.value && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary font-medium bg-secondary-50 px-2 py-1 rounded">
                      {item.metadata.category.value}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Link 
            href="/menu"
            className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}