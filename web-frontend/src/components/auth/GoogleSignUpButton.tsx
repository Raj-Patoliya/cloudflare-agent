'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { setOAuthLoading, handleOAuthSuccess } from '@/store/auth.slice';

export function GoogleSignUpButton() {
  const dispatch = useAppDispatch();
  const isOAuthLoading = useAppSelector((state) => state.auth.isOAuthLoading);

  const handleGoogleSignUp = async () => {
    dispatch(setOAuthLoading(true));
    try {
      // Simulating Google OAuth flow
      // In production, use @react-oauth/google library
      const mockGoogleResponse = {
        email: 'user@gmail.com',
        name: 'John Doe',
        picture: 'https://via.placeholder.com/150',
        provider: 'google' as const,
      };

      // Simulate async call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      dispatch(handleOAuthSuccess(mockGoogleResponse));
    } catch (error) {
      console.error('Google sign up failed:', error);
      dispatch(setOAuthLoading(false));
    }
  };

  return (
    <button
      onClick={handleGoogleSignUp}
      disabled={isOAuthLoading}
      className="w-full px-4 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isOAuthLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
          Signing up...
        </>
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          Sign up with Google
        </>
      )}
    </button>
  );
}
