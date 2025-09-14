// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Menu item types
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    dish_name?: string;
    description?: string;
    price?: string;
    category?: {
      key: string;
      value: MenuCategory;
    };
    dish_image?: {
      url: string;
      imgix_url: string;
    };
    spice_level?: {
      key: string;
      value: SpiceLevel;
    };
    chefs_special?: boolean;
  };
}

// Chef specialty types
export interface ChefSpecialty extends CosmicObject {
  type: 'chef-specialties';
  metadata: {
    specialty_name?: string;
    chefs_story?: string;
    specialty_image?: {
      url: string;
      imgix_url: string;
    };
    related_menu_item?: MenuItem;
  };
}

// News and events types
export interface NewsEvent extends CosmicObject {
  type: 'news-events';
  metadata: {
    title?: string;
    content?: string;
    event_date?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Restaurant info types
export interface RestaurantInfo extends CosmicObject {
  type: 'restaurant-info';
  metadata: {
    restaurant_name?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    opening_hours?: string;
    about_description?: string;
    restaurant_photos?: Array<{
      url: string;
      imgix_url: string;
    }>;
  };
}

// Type literals for select-dropdown values
export type MenuCategory = 'Appetizers' | 'Soups & Thukpa' | 'Momos' | 'Main Dishes' | 'Beverages' | 'Desserts';
export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isMenuItem(obj: CosmicObject): obj is MenuItem {
  return obj.type === 'menu-items';
}

export function isChefSpecialty(obj: CosmicObject): obj is ChefSpecialty {
  return obj.type === 'chef-specialties';
}

export function isNewsEvent(obj: CosmicObject): obj is NewsEvent {
  return obj.type === 'news-events';
}

export function isRestaurantInfo(obj: CosmicObject): obj is RestaurantInfo {
  return obj.type === 'restaurant-info';
}

// Utility types
export type CreateMenuItemData = Omit<MenuItem, 'id' | 'created_at' | 'modified_at'>;
export type UpdateMenuItemData = Partial<CreateMenuItemData>;