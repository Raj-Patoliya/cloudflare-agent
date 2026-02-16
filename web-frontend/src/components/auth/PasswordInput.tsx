'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { updateFormField } from '@/store/auth.slice';
import { useState } from 'react';

export function PasswordInput() {
  const dispatch = useAppDispatch();
  const password = useAppSelector((state) => state.auth.formData.password);
  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength++;
    if (pwd.match(/[0-9]/)) strength++;
    if (pwd.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  };

  const strength = getPasswordStrength(password);
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-green-600'];

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter a strong password"
          value={password}
          onChange={(e) =>
            dispatch(updateFormField({ field: 'password', value: e.target.value }))
          }
          className="w-full px-4 py-3 pr-12 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
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

      {/* Password Strength Indicator */}
      {password && (
        <div className="space-y-2">
          <div className="flex gap-1 h-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-colors ${
                  i < strength ? strengthColors[strength - 1] : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          <p className={`text-xs font-medium ${
            strength <= 1 ? 'text-red-500' :
            strength <= 2 ? 'text-orange-500' :
            strength <= 3 ? 'text-yellow-500' :
            'text-green-500'
          }`}>
            {strengthLabels[strength - 1] || 'Enter password'}
          </p>
        </div>
      )}

      <ul className="text-xs text-gray-400 space-y-1 mt-2">
        <li className={password.length >= 8 ? 'text-green-500' : ''}>
          {password.length >= 8 ? '✓' : '○'} At least 8 characters
        </li>
        <li className={password.match(/[a-z]/) && password.match(/[A-Z]/) ? 'text-green-500' : ''}>
          {password.match(/[a-z]/) && password.match(/[A-Z]/) ? '✓' : '○'} Uppercase & lowercase letters
        </li>
        <li className={password.match(/[0-9]/) ? 'text-green-500' : ''}>
          {password.match(/[0-9]/) ? '✓' : '○'} At least one number
        </li>
        <li className={password.match(/[^a-zA-Z0-9]/) ? 'text-green-500' : ''}>
          {password.match(/[^a-zA-Z0-9]/) ? '✓' : '○'} Special character
        </li>
      </ul>
    </div>
  );
}
