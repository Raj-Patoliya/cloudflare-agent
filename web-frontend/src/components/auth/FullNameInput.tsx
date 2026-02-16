'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { updateFormField } from '@/store/auth.slice';

export function FullNameInput() {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector((state) => state.auth.formData.fullName);

  return (
    <div className="space-y-2">
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
        Full Name
      </label>
      <input
        id="fullName"
        type="text"
        placeholder="John Doe"
        value={fullName}
        onChange={(e) =>
          dispatch(updateFormField({ field: 'fullName', value: e.target.value }))
        }
        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
      />
    </div>
  );
}
