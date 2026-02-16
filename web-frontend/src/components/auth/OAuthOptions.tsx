'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { GoogleSignUpButton } from './GoogleSignUpButton';
import { AppleSignUpButton } from './AppleSignUpButton';

export function OAuthOptions() {
  const oauthProvider = useAppSelector((state) => state.auth.oauthProvider);

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-300 rounded-3xl">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <GoogleSignUpButton />
        <AppleSignUpButton />
      </div>

      {oauthProvider && (
        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-sm text-green-400">
          ✓ {oauthProvider.charAt(0).toUpperCase() + oauthProvider.slice(1)} account ready
        </div>
      )}
    </div>
  );
}
