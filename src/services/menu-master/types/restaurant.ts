import { Address } from './address'


export interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  phoneNumber: string;
  rating: number;
  address: Address
}