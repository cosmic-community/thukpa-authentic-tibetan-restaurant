import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Get all menu items
export async function getMenuItems() {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error?.status === 404) {
      return []
    }
    console.error('Error fetching menu items:', error)
    throw new Error('Failed to fetch menu items')
  }
}

// Get chef specialties
export async function getChefSpecialties() {
  try {
    const response = await cosmic.objects
      .find({ type: 'chef-specialties' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error?.status === 404) {
      return []
    }
    console.error('Error fetching chef specialties:', error)
    throw new Error('Failed to fetch chef specialties')
  }
}

// Get news and events
export async function getNewsEvents() {
  try {
    const response = await cosmic.objects
      .find({ type: 'news-events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error?.status === 404) {
      return []
    }
    console.error('Error fetching news events:', error)
    throw new Error('Failed to fetch news events')
  }
}

// Get restaurant info (singleton)
export async function getRestaurantInfo() {
  try {
    const response = await cosmic.objects
      .find({ type: 'restaurant-info' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects[0] || null
  } catch (error: any) {
    if (error?.status === 404) {
      return null
    }
    console.error('Error fetching restaurant info:', error)
    throw new Error('Failed to fetch restaurant info')
  }
}

// Get menu items by category
export async function getMenuItemsByCategory(category: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'menu-items',
        'metadata.category.value': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error?.status === 404) {
      return []
    }
    console.error('Error fetching menu items by category:', error)
    throw new Error('Failed to fetch menu items by category')
  }
}

// Get featured menu items (chef's specials)
export async function getFeaturedMenuItems() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'menu-items',
        'metadata.chefs_special': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error: any) {
    if (error?.status === 404) {
      return []
    }
    console.error('Error fetching featured menu items:', error)
    throw new Error('Failed to fetch featured menu items')
  }
}