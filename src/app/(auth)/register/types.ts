export interface UserRegisterFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  cep: string;
  state: string;
  complement?: string;
  landmark?: string;
}