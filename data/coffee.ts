export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
  stock: number;
}

export const getCoffeesUrl = () => "https://fake-coffee-api.vercel.app/api";
