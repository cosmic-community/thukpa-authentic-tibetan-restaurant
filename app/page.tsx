import Hero from '@/components/Hero'
import FeaturedMenu from '@/components/FeaturedMenu'
import ChefSpecialties from '@/components/ChefSpecialties'
import NewsEvents from '@/components/NewsEvents'
import RestaurantInfo from '@/components/RestaurantInfo'
import { getMenuItems } from '@/lib/cosmic'
import { getChefSpecialties } from '@/lib/cosmic'
import { getNewsEvents } from '@/lib/cosmic'
import { getRestaurantInfo } from '@/lib/cosmic'

export default async function Home() {
  // Fetch all data concurrently
  const [menuItems, chefSpecialties, newsEvents, restaurantInfo] = await Promise.all([
    getMenuItems(),
    getChefSpecialties(),
    getNewsEvents(),
    getRestaurantInfo(),
  ])

  return (
    <div className="min-h-screen">
      <Hero restaurantInfo={restaurantInfo} />
      <FeaturedMenu menuItems={menuItems} />
      <ChefSpecialties specialties={chefSpecialties} />
      <NewsEvents events={newsEvents} />
      <RestaurantInfo restaurantInfo={restaurantInfo} />
    </div>
  )
}