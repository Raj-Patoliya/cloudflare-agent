import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, RegistrationFormData, OAuthResponse } from '@/types/auth.types';

const INITIAL_REGISTRATION_DATA: RegistrationFormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  countryCode: '+1',
  password: '',
  confirmPassword: '',
  profilePicturePreview: null,
};

const initialState: AuthState = {
  formData: INITIAL_REGISTRATION_DATA,
  isLoading: false,
  error: null,
  success: false,
  oauthProvider: null,
  isOAuthLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Form field updates
    updateFormField: (
      state,
      action: PayloadAction<{
        field: keyof RegistrationFormData;
        value: string | File | null;
      }>
    ) => {
      const { field, value } = action.payload;
      if (field !== 'profilePicture' && field !== 'profilePicturePreview') {
        (state.formData as Record<string, unknown>)[field] = value;
      }
    },

    // Profile picture preview handling
    setProfilePicturePreview: (state, action: PayloadAction<string | null>) => {
      // Revoke previous object URL to prevent memory leaks
      if (state.formData.profilePicturePreview?.startsWith('blob:')) {
        URL.revokeObjectURL(state.formData.profilePicturePreview);
      }
      state.formData.profilePicturePreview = action.payload;
    },

    // Registration actions
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },

    // OAuth actions
    setOAuthProvider: (state, action: PayloadAction<'google' | 'apple' | null>) => {
      state.oauthProvider = action.payload;
    },

    setOAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isOAuthLoading = action.payload;
    },

    // OAuth response handling
    handleOAuthSuccess: (state, action: PayloadAction<OAuthResponse>) => {
      const { email, name, picture, provider } = action.payload;
      state.formData.email = email;
      state.formData.fullName = name;
      if (picture) {
        state.formData.profilePicturePreview = picture;
      }
      state.oauthProvider = provider;
      state.isOAuthLoading = false;
    },

    // Reset form
    resetAuthForm: (state) => {
      // Cleanup object URL before resetting
      if (state.formData.profilePicturePreview?.startsWith('blob:')) {
        URL.revokeObjectURL(state.formData.profilePicturePreview);
      }
      state.formData = INITIAL_REGISTRATION_DATA;
      state.error = null;
      state.success = false;
      state.oauthProvider = null;
    },

    // Reset all auth state
    resetAuthState: (state) => {
      return initialState;
    },
  },
});

export const {
  updateFormField,
  setProfilePicturePreview,
  setIsLoading,
  setError,
  setSuccess,
  setOAuthProvider,
  setOAuthLoading,
  handleOAuthSuccess,
  resetAuthForm,
  resetAuthState,
} = authSlice.actions;

export default authSlice.reducer;
