'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { updateFormField } from '@/store/auth.slice';

export function EmailInput() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.auth.formData.email);

  return (
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) =>
          dispatch(updateFormField({ field: 'email', value: e.target.value }))
        }
        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
      />
    </div>
  );
}
