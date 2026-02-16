import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serialization check
        ignoredActions: ['auth/updateFormField', 'auth/setProfilePicture'],
        // Ignore these paths in the state
        ignoredPathPatterns: ['auth.formData.profilePicture'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
