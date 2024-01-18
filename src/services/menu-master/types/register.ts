import { Address } from './address'

export interface RegisterRequest extends Address{
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
