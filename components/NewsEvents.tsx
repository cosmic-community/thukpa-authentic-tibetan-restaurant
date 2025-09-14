import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { NewsEvent } from '@/types'

interface NewsEventsProps {
  events: NewsEvent[]
}

export default function NewsEvents({ events }: NewsEventsProps) {
  if (!events || events.length === 0) {
    return null
  }

  const displayEvents = events.slice(0, 3)

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Date TBD'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <Calendar className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary text-sm font-medium">What's New</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements, special offers, and upcoming events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event) => (
            <article 
              key={event.id}
              className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white"
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                {event.metadata?.featured_image?.imgix_url ? (
                  <img
                    src={`${event.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={event.metadata?.title || event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width="300"
                    height="200"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                )}
                
                {/* Date Badge */}
                {event.metadata?.event_date && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-2 rounded-lg shadow-lg text-center">
                      <div className="text-sm leading-none">
                        {formatDate(event.metadata.event_date).split(' ')[0]}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {formatDate(event.metadata.event_date).split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                    {event.metadata?.title || event.title}
                  </h3>
                  
                  <div 
                    className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ 
                      __html: event.metadata?.content?.substring(0, 150) + '...' || 'Stay tuned for more details about this exciting event.' 
                    }}
                  />
                </div>

                {/* Event Date */}
                {event.metadata?.event_date && (
                  <div className="flex items-center text-secondary text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(event.metadata.event_date)}
                  </div>
                )}

                {/* Read More Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href={`/news/${event.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent-600 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Link 
            href="/news"
            className="btn-secondary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  )
}