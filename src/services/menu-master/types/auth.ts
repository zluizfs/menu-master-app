import { Address } from './address'

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationReponse {
  user: {
    name: string;
    addresses: Address[];
  };
  token: string;
}
