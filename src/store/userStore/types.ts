import { Address } from '@menu-master-app/services/menu-master/types/address'

export interface User {
  name: string;
  addresses: Address[]
  token: string;
}

export interface AuthState {
  user: User | null;
  sessionRestore: () => void
  authenticate: (user: User) => void;
  logout: () => void;
}