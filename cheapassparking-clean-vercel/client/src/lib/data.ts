/**
 * Cheap Ass Parking — Scalable Data Architecture
 * 
 * Location hierarchy: State → City → Category → Individual Location
 * This structure supports hundreds/thousands of locations without redesign.
 */

export interface ParkingLocation {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  cityId: string;
  stateId: string;
  address: string;
  pricePerDay: number;
  description: string;
  features: string[];
  image?: string;
  reserveUrl?: string;
}

export interface ParkingCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  image?: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  stateId: string;
  image?: string;
}

export interface State {
  id: string;
  name: string;
  slug: string;
  abbreviation: string;
}

// Parking Categories
export const categories: ParkingCategory[] = [
  {
    id: "cruise",
    name: "Cruise Parking",
    slug: "cruise-parking",
    icon: "Ship",
    description: "Secure parking near cruise terminals. Park and sail with peace of mind.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483694095/UzhBvPoiRHUjo69tRbdKC6/hero-parking-cityscape-7UsL7n2oFPcxxsdAWBSABz.webp",
  },
  {
    id: "downtown",
    name: "Downtown Parking",
    slug: "downtown-parking",
    icon: "Building2",
    description: "Affordable spots in the heart of the city. Skip the meter, save the hassle.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483694095/UzhBvPoiRHUjo69tRbdKC6/downtown-parking-LA4gGnCMmnZ8t36yNSFC3B.webp",
  },
  {
    id: "event",
    name: "Event Parking",
    slug: "event-parking",
    icon: "Ticket",
    description: "Game day, concert night, or festival weekend — your spot is guaranteed.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483694095/UzhBvPoiRHUjo69tRbdKC6/event-parking-AWJJXXB4iE9HbGfE4Xa5Km.webp",
  },
  {
    id: "monthly",
    name: "Monthly Parking",
    slug: "monthly-parking",
    icon: "Calendar",
    description: "Lock in a monthly rate and never worry about daily parking again.",
  },
  {
    id: "airport",
    name: "Airport Parking",
    slug: "airport-parking",
    icon: "Plane",
    description: "Fly without the parking stress. Secure lots with shuttle service to terminals.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483694095/UzhBvPoiRHUjo69tRbdKC6/airport-parking-SazHtC9DyVrx8HVMETsbKL.webp",
  },
  {
    id: "hotel",
    name: "Hotel Parking",
    slug: "hotel-parking",
    icon: "Hotel",
    description: "Park near your hotel without the resort fee markup.",
  },
  {
    id: "valet",
    name: "Valet Parking",
    slug: "valet-parking",
    icon: "CarFront",
    description: "Drop your keys and go. Premium service at budget prices.",
  },
  {
    id: "rv",
    name: "RV Parking",
    slug: "rv-parking",
    icon: "Truck",
    description: "Oversized vehicle? No problem. Spacious lots for RVs and large vehicles.",
  },
  {
    id: "special-events",
    name: "Special Events",
    slug: "special-events",
    icon: "Star",
    description: "Festivals, concerts, sports, and more. Pre-book and skip the chaos.",
  },
  {
    id: "commuter",
    name: "Commuter Parking",
    slug: "commuter-parking",
    icon: "Train",
    description: "Park-and-ride made easy. Daily and weekly rates for commuters.",
  },
  {
    id: "long-term",
    name: "Long-Term Parking",
    slug: "long-term-parking",
    icon: "Clock",
    description: "Extended trips? Extended savings. The longer you stay, the more you save.",
  },
  {
    id: "daily",
    name: "Daily Parking",
    slug: "daily-parking",
    icon: "Sun",
    description: "Need a spot for the day? Find the cheapest daily rates near you.",
  },
];

// States
export const states: State[] = [
  { id: "tx", name: "Texas", slug: "texas", abbreviation: "TX" },
  { id: "fl", name: "Florida", slug: "florida", abbreviation: "FL" },
  { id: "ca", name: "California", slug: "california", abbreviation: "CA" },
  { id: "la", name: "Louisiana", slug: "louisiana", abbreviation: "LA" },
];

// Cities
export const cities: City[] = [
  { id: "galveston", name: "Galveston", slug: "galveston", stateId: "tx" },
  { id: "houston", name: "Houston", slug: "houston", stateId: "tx" },
  { id: "dallas", name: "Dallas", slug: "dallas", stateId: "tx" },
  { id: "san-antonio", name: "San Antonio", slug: "san-antonio", stateId: "tx" },
  { id: "miami", name: "Miami", slug: "miami", stateId: "fl" },
  { id: "orlando", name: "Orlando", slug: "orlando", stateId: "fl" },
  { id: "tampa", name: "Tampa", slug: "tampa", stateId: "fl" },
  { id: "los-angeles", name: "Los Angeles", slug: "los-angeles", stateId: "ca" },
  { id: "new-orleans", name: "New Orleans", slug: "new-orleans", stateId: "la" },
];

// Sample Parking Locations
export const locations: ParkingLocation[] = [
  {
    id: "galveston-cruise-a",
    name: "Port Parking Lot A",
    slug: "port-parking-lot-a",
    categoryId: "cruise",
    cityId: "galveston",
    stateId: "tx",
    address: "2502 Harborside Dr, Galveston, TX 77550",
    pricePerDay: 9,
    description: "Closest lot to the Galveston cruise terminal. Secure, paved, and shuttle-serviced.",
    features: ["24/7 Security", "Free Shuttle", "Paved Lot", "Well-Lit"],
    reserveUrl: "#",
  },
  {
    id: "galveston-cruise-b",
    name: "Seawall Cruise Parking",
    slug: "seawall-cruise-parking",
    categoryId: "cruise",
    cityId: "galveston",
    stateId: "tx",
    address: "1800 Seawall Blvd, Galveston, TX 77550",
    pricePerDay: 7,
    description: "Budget-friendly cruise parking with complimentary shuttle to port.",
    features: ["Free Shuttle", "Fenced", "Surveillance Cameras"],
    reserveUrl: "#",
  },
  {
    id: "galveston-downtown-strand",
    name: "Strand District Parking",
    slug: "strand-district-parking",
    categoryId: "downtown",
    cityId: "galveston",
    stateId: "tx",
    address: "2100 Strand St, Galveston, TX 77550",
    pricePerDay: 5,
    description: "Walk to shops, restaurants, and the historic Strand district.",
    features: ["Central Location", "Well-Lit", "ADA Accessible"],
    reserveUrl: "#",
  },
  {
    id: "houston-event-nrg",
    name: "NRG Event Parking",
    slug: "nrg-event-parking",
    categoryId: "event",
    cityId: "houston",
    stateId: "tx",
    address: "8400 Kirby Dr, Houston, TX 77054",
    pricePerDay: 15,
    description: "Steps from NRG Stadium. Perfect for Texans games, rodeo, and concerts.",
    features: ["Stadium Adjacent", "Tailgating Allowed", "Paved"],
    reserveUrl: "#",
  },
  {
    id: "houston-airport-iah",
    name: "IAH Airport Parking",
    slug: "iah-airport-parking",
    categoryId: "airport",
    cityId: "houston",
    stateId: "tx",
    address: "3100 N Terminal Rd, Houston, TX 77032",
    pricePerDay: 8,
    description: "Affordable long-term parking near George Bush Intercontinental Airport.",
    features: ["Free Shuttle", "Covered Options", "24/7 Security", "EV Charging"],
    reserveUrl: "#",
  },
  {
    id: "dallas-airport-dfw",
    name: "DFW Airport Parking",
    slug: "dfw-airport-parking",
    categoryId: "airport",
    cityId: "dallas",
    stateId: "tx",
    address: "2400 Aviation Dr, DFW Airport, TX 75261",
    pricePerDay: 10,
    description: "Convenient parking with direct shuttle to all DFW terminals.",
    features: ["Free Shuttle", "Covered Parking", "24/7 Security", "Online Booking"],
    reserveUrl: "#",
  },
  {
    id: "houston-monthly-downtown",
    name: "Downtown Houston Monthly",
    slug: "downtown-houston-monthly",
    categoryId: "monthly",
    cityId: "houston",
    stateId: "tx",
    address: "1200 Main St, Houston, TX 77002",
    pricePerDay: 6,
    description: "Monthly parking in the heart of downtown Houston. Walk to offices and restaurants.",
    features: ["Covered Garage", "24/7 Access", "Reserved Spot", "EV Charging"],
    reserveUrl: "#",
  },
  {
    id: "miami-cruise-port",
    name: "Miami Port Parking",
    slug: "miami-port-parking",
    categoryId: "cruise",
    cityId: "miami",
    stateId: "fl",
    address: "1015 N America Way, Miami, FL 33132",
    pricePerDay: 12,
    description: "Park and cruise from the Port of Miami. Secure and convenient.",
    features: ["Port Adjacent", "24/7 Security", "Covered Options", "Free Shuttle"],
    reserveUrl: "#",
  },
];

// Helper functions for data querying
export function getLocationsByCategory(categoryId: string): ParkingLocation[] {
  return locations.filter(l => l.categoryId === categoryId);
}

export function getLocationsByCity(cityId: string): ParkingLocation[] {
  return locations.filter(l => l.cityId === cityId);
}

export function getLocationsByCityAndCategory(cityId: string, categoryId: string): ParkingLocation[] {
  return locations.filter(l => l.cityId === cityId && l.categoryId === categoryId);
}

export function getCitiesByState(stateId: string): City[] {
  return cities.filter(c => c.stateId === stateId);
}

export function getCategoryBySlug(slug: string): ParkingCategory | undefined {
  return categories.find(c => c.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getLocationBySlug(slug: string): ParkingLocation | undefined {
  return locations.find(l => l.slug === slug);
}

// Navigation categories (subset shown in main nav)
export const navCategories = categories.slice(0, 6);
