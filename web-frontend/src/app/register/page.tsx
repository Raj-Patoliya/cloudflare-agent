'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import {
  FullNameInput,
  EmailInput,
  PhoneNumberInput,
  PasswordInput,
  ConfirmPasswordInput,
  ProfilePictureUpload,
  OAuthOptions,
} from '@/components/auth';
import { setIsLoading, setError, setSuccess, resetAuthForm } from '@/store/auth.slice';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.auth.formData);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const error = useAppSelector((state) => state.auth.error);
  const success = useAppSelector((state) => state.auth.success);
  const oauthProvider = useAppSelector((state) => state.auth.oauthProvider);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);

  // Validation function
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }

    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      dispatch(setError('Please fix the validation errors'));
      return;
    }

    dispatch(setIsLoading(true));
    dispatch(setError(null));

    try {
      // Simulate API call
      // In a real app, you would send formData along with profilePictureFile to the API
      // const apiFormData = new FormData();
      // apiFormData.append('fullName', formData.fullName);
      // apiFormData.append('email', formData.email);
      // ... other fields
      // if (profilePictureFile) apiFormData.append('profilePicture', profilePictureFile);
      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful registration
      dispatch(setSuccess(true));
      dispatch(setError(null));

      // Show success message and reset form after 2 seconds
      setTimeout(() => {
        dispatch(resetAuthForm());
        setProfilePictureFile(null);
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-16 pb-8 sm:pt-24 md:pt-32 sm:pb-12 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pointer-events-none -z-10" />
      <div className="fixed top-10 sm:top-20 right-0 sm:right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative w-full max-w-lg mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="text-white">Create Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Account
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 px-2">Join us and start your journey today</p>
        </div>

        {/* Registration Card */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 backdrop-blur-sm shadow-xl">
          {success && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-sm sm:text-base text-green-400 font-medium">
                ✓ Account created successfully!
              </p>
              <p className="text-xs sm:text-sm text-green-400/80 mt-1">
                Redirecting to login...
              </p>
            </div>
          )}

          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-sm sm:text-base text-red-400 font-medium">Error</p>
              <p className="text-xs sm:text-sm text-red-400/80 mt-1">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* OAuth Options */}
            <OAuthOptions />

            {/* Full Name */}
            <div>
              <FullNameInput />
              {validationErrors.fullName && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <EmailInput />
              {validationErrors.email && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <PhoneNumberInput />
              {validationErrors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.phoneNumber}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <PasswordInput />
              {validationErrors.password && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <ConfirmPasswordInput />
              {validationErrors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">{validationErrors.confirmPassword}</p>
              )}
            </div>

            {/* Profile Picture */}
            <ProfilePictureUpload onFileChange={setProfilePictureFile} />

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2 sm:gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-0.5 sm:mt-1 w-4 h-4 shrink-0 rounded border-gray-700 bg-gray-900 accent-cyan-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray-400 leading-relaxed cursor-pointer">
                I agree to the{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || success}
              variant="primary"
              size="lg"
              className="w-full !mt-6 sm:!mt-8 text-sm sm:text-base py-3 sm:py-3.5"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="hidden sm:inline">Creating Account...</span>
                  <span className="sm:hidden">Creating...</span>
                </span>
              ) : success ? (
                <span>✓ Account Created!</span>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-5 sm:mt-6 text-center pt-4 border-t border-gray-800/50">
            <p className="text-gray-400 text-xs sm:text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 text-center text-xs text-gray-500 px-4">
          <p>By registering, you agree to our Privacy Policy and Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
