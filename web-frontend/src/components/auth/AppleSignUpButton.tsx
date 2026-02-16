'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { setOAuthLoading, handleOAuthSuccess } from '@/store/auth.slice';

export function AppleSignUpButton() {
  const dispatch = useAppDispatch();
  const isOAuthLoading = useAppSelector((state) => state.auth.isOAuthLoading);

  const handleAppleSignUp = async () => {
    dispatch(setOAuthLoading(true));
    try {
      // Simulating Apple OAuth flow
      // In production, use Apple Sign In JavaScript library
      const mockAppleResponse = {
        email: 'user@icloud.com',
        name: 'Jane Doe',
        picture: 'https://via.placeholder.com/150',
        provider: 'apple' as const,
      };

      // Simulate async call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      dispatch(handleOAuthSuccess(mockAppleResponse));
    } catch (error) {
      console.error('Apple sign up failed:', error);
      dispatch(setOAuthLoading(false));
    }
  };

  return (
    <button
      onClick={handleAppleSignUp}
      disabled={isOAuthLoading}
      className="w-full px-4 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isOAuthLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Signing up...
        </>
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 13.5c-.91 0-1.64.09-2.04.27a3.84 3.84 0 0 0-1.33.91c-.35.35-.64.77-.86 1.24-.22.47-.33.99-.33 1.54 0 .48.04.93.12 1.33.08.4.22.75.41 1.05.19.3.43.53.72.7.29.17.61.25.97.25.65 0 1.23-.17 1.73-.52.5-.35.88-.85 1.13-1.5h1.1c-.16.71-.44 1.3-.85 1.76-.4.46-.92.82-1.56 1.07-.64.26-1.37.39-2.19.39-1.13 0-2.08-.22-2.85-.67-.77-.45-1.35-1.09-1.75-1.91-.4-.82-.6-1.78-.6-2.88 0-1.1.2-2.07.6-2.88.4-.82.98-1.45 1.75-1.9.77-.45 1.72-.67 2.85-.67.76 0 1.46.13 2.08.38.62.25 1.14.63 1.56 1.13.42.5.73 1.14.94 1.88h-1.08c-.25-.58-.63-1.08-1.1-1.41-.48-.33-1.04-.5-1.68-.5zm-3.27 6.63h-2.89V5.76H13.78c2.01 0 3.4.35 4.16 1.06.76.71 1.13 1.73 1.13 3.07v.02c0 1.26-.3 2.26-.88 2.98-.59.72-1.52 1.14-2.8 1.14v.01c-.75 0-1.42.15-2.01.45-.59.3-1.09.75-1.49 1.33v3.34zm-.54-8.6h3.63c.81 0 1.63-.23 2.46-.67.83-.44 1.47-1.15 1.93-2.1.45-.96.68-2.08.68-3.36 0-1.24-.25-2.31-.75-3.19-.5-.88-1.23-1.54-2.18-1.98-.95-.44-2.03-.66-3.23-.66H13.24v12z" />
          </svg>
          Sign up with Apple
        </>
      )}
    </button>
  );
}
