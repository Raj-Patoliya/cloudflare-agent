export interface RegistrationFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  confirmPassword: string;
  profilePicturePreview: string | null;
}

export interface AuthState {
  formData: RegistrationFormData;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  oauthProvider: 'google' | 'apple' | null;
  isOAuthLoading: boolean;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  profilePicture?: File;
}

export interface OAuthResponse {
  email: string;
  name: string;
  picture?: string;
  provider: 'google' | 'apple';
}
