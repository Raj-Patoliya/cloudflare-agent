'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { updateFormField } from '@/store/auth.slice';
import { useState } from 'react';

export function ConfirmPasswordInput() {
  const dispatch = useAppDispatch();
  const password = useAppSelector((state) => state.auth.formData.password);
  const confirmPassword = useAppSelector((state) => state.auth.formData.confirmPassword);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordMatch = password && confirmPassword && password === confirmPassword;
  const isPasswordMismatch = password && confirmPassword && password !== confirmPassword;

  return (
    <div className="space-y-2">
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
        Confirm Password
      </label>
      <div className="relative">
        <input
          id="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) =>
            dispatch(updateFormField({ field: 'confirmPassword', value: e.target.value }))
          }
          className={`w-full px-4 py-3 pr-12 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
            isPasswordMatch
              ? 'border-green-500 focus:ring-1 focus:ring-green-500'
              : isPasswordMismatch
              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
        >
          {showPassword ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.5 4.5m4.753 0L19.5 16.5" />
            </svg>
          )}
        </button>
      </div>

      {confirmPassword && (
        <p className={`text-sm font-medium ${isPasswordMatch ? 'text-green-500' : 'text-red-500'}`}>
          {isPasswordMatch ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Passwords match
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
              Passwords do not match
            </span>
          )}
        </p>
      )}
    </div>
  );
}
