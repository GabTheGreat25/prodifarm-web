export interface ProfileForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface ContactForm {
  fullName: string;
  phoneNumber: string;
}

export interface AddressForm {
  name: string;
  unit: string;
  street: string;
  barangay: string;
  city: string;
  district: string;
  province: string;
  country: string;
  zip: number;
  type: string;
}

export interface ShippingAddressForm {
  address: string;
  city: string;
  province: string;
  zip: string;
  makeDefault: boolean;
  asBilling: boolean;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface PasswordForm {
  password: string;
  confirmPassword: string;
}

export interface EmailForm {
  email: string;
}
