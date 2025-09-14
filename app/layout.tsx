import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thukpa - Authentic Tibetan Restaurant | Chandmari, Guwahati',
  description: 'Experience authentic Tibetan cuisine at Thukpa Restaurant in Chandmari, Guwahati, Assam. Traditional thukpa, handmade momos, and warming comfort food with recipes passed down through generations.',
  keywords: 'Tibetan restaurant, thukpa, momos, Guwahati, Chandmari, authentic Tibetan food, Assam, traditional recipes',
  authors: [{ name: 'Thukpa Restaurant' }],
  creator: 'Thukpa Restaurant',
  publisher: 'Thukpa Restaurant',
  robots: 'index, follow',
  openGraph: {
    title: 'Thukpa - Authentic Tibetan Restaurant',
    description: 'Experience authentic Tibetan cuisine in Chandmari, Guwahati. Traditional recipes, fresh ingredients, warm hospitality.',
    url: 'https://thukparestaurant.com',
    siteName: 'Thukpa Restaurant',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/5f96cfe0-916c-11f0-82f6-5d2d79fe0767-photo-1517248135467-4c7edcad34c4-1757855522725.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Thukpa Restaurant - Authentic Tibetan Cuisine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thukpa - Authentic Tibetan Restaurant',
    description: 'Experience authentic Tibetan cuisine in Chandmari, Guwahati.',
    images: ['https://imgix.cosmicjs.com/5f96cfe0-916c-11f0-82f6-5d2d79fe0767-photo-1517248135467-4c7edcad34c4-1757855522725.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
  },
  alternates: {
    canonical: 'https://thukparestaurant.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-warm-50">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <CosmicBadge bucketSlug={bucketSlug} />
        </div>
      </body>
    </html>
  )
}