# Thukpa - Authentic Tibetan Restaurant

![Restaurant Preview](https://imgix.cosmicjs.com/5f96cfe0-916c-11f0-82f6-5d2d79fe0767-photo-1517248135467-4c7edcad34c4-1757855522725.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, modern website for Thukpa Authentic Tibetan Restaurant in Chandmari, Guwahati, Assam. This responsive web application showcases authentic Tibetan cuisine with a warm, inviting design that reflects Tibetan culture and hospitality.

## ✨ Features

- **Dynamic Menu Display** - Interactive menu organized by categories (Appetizers, Soups & Thukpa, Momos, Main Dishes, Beverages, Desserts)
- **Chef's Specialties** - Featured stories and recipes from Chef Tenzin Norbu
- **News & Events** - Restaurant announcements, special offers, and upcoming events
- **Restaurant Gallery** - Beautiful photo gallery showcasing the restaurant atmosphere
- **Contact Information** - Complete restaurant details including address, hours, and contact info
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Performance Optimized** - Fast loading with optimized images and efficient code

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c6be7d0a2eeaef39f42d13&clone_repository=68c6c2b10a2eeaef39f42d2b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a beautyful webiste for thukpa authentic tebetian resturant chnadmari guwahati assam a nice webiste for them"

### Code Generation Prompt

> "Based on the content model I created for "Create a beautyful webiste for thukpa authentic tebetian resturant chnadmari guwahati assam a nice webiste for them", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React** - Component-based UI library
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your restaurant content

### Installation

1. Clone this repository
```bash
git clone <your-repo-url>
cd thukpa-restaurant
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=thukpa-production
COSMIC_READ_KEY=your_read_key_here
COSMIC_WRITE_KEY=your_write_key_here
```

4. Run the development server
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Cosmic SDK Examples

### Fetching Menu Items by Category
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getMenuItemsByCategory() {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Getting Chef Specialties with Related Menu Items
```typescript
export async function getChefSpecialties() {
  try {
    const response = await cosmic.objects
      .find({ type: 'chef-specialties' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## 🎯 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Menu Items** (`menu-items`) - Restaurant menu with categories, prices, and descriptions
- **Chef Specialties** (`chef-specialties`) - Featured recipes and chef stories
- **News & Events** (`news-events`) - Restaurant announcements and events  
- **Restaurant Info** (`restaurant-info`) - Contact details, hours, and photos

All content is dynamically loaded from your Cosmic bucket and displayed with beautiful, responsive layouts.

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your project to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Environment Variables for Production

Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key  
- `COSMIC_WRITE_KEY` - Your Cosmic write key

<!-- README_END -->