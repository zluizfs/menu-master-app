export interface User {
  token: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  authenticate: (user: User) => void;
  logout: () => void;
}