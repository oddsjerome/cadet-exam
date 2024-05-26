export interface Coffee {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string | string[];
}

export const getCoffeesUrl = () => "https://fake-coffee-api.vercel.app/api";
export const getCoffeeDetailUrl = (id: string) =>
  `https://fake-coffee-api.vercel.app/api/${id}`;
