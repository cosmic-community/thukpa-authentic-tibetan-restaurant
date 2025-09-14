import Link from 'next/link'
import { ChefHat, ArrowRight } from 'lucide-react'
import { ChefSpecialty } from '@/types'

interface ChefSpecialtiesProps {
  specialties: ChefSpecialty[]
}

export default function ChefSpecialties({ specialties }: ChefSpecialtiesProps) {
  if (!specialties || specialties.length === 0) {
    return null
  }

  const displaySpecialties = specialties.slice(0, 2)

  return (
    <section className="py-20 bg-warm-50">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <ChefHat className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary text-sm font-medium">From Our Kitchen</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chef's Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet Chef Tenzin Norbu and discover the authentic stories behind our traditional recipes.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="space-y-16">
          {displaySpecialties.map((specialty, index) => (
            <div 
              key={specialty.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {specialty.metadata?.specialty_image?.imgix_url ? (
                    <img
                      src={`${specialty.metadata.specialty_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={specialty.metadata?.specialty_name || specialty.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                      width="400"
                      height="300"
                    />
                  ) : (
                    <div className="w-full h-96 lg:h-[500px] bg-gradient-warm flex items-center justify-center">
                      <ChefHat className="w-16 h-16 text-white" />
                    </div>
                  )}
                  
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {specialty.metadata?.specialty_name || specialty.title}
                  </h3>
                  
                  {/* Chef's Story */}
                  <div 
                    className="prose-custom text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: specialty.metadata?.chefs_story || 'A special story from our chef about this traditional recipe.' 
                    }}
                  />
                </div>

                {/* Related Menu Item */}
                {specialty.metadata?.related_menu_item && (
                  <div className="bg-white rounded-xl p-6 shadow-md border border-warm-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Try This Dish:</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-primary">
                          {specialty.metadata.related_menu_item.metadata?.dish_name || specialty.metadata.related_menu_item.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {specialty.metadata.related_menu_item.metadata?.price}
                        </p>
                      </div>
                      <Link 
                        href="/menu"
                        className="flex items-center text-accent hover:text-accent-600 font-medium text-sm transition-colors"
                      >
                        View Menu
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Chef Quote */}
                <blockquote className="border-l-4 border-accent pl-6 italic text-gray-700">
                  "Each dish tells a story of our heritage and the love we put into every ingredient."
                  <cite className="block text-sm text-gray-500 mt-2 not-italic">— Chef Tenzin Norbu</cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* View All Specialties */}
        {specialties.length > 2 && (
          <div className="text-center mt-16">
            <Link 
              href="/chef-specialties"
              className="btn-secondary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Chef's Stories
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}