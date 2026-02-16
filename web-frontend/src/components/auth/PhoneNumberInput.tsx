'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppRedux';
import { updateFormField } from '@/store/auth.slice';
import { COUNTRY_CODES } from '@/lib/countryCodes';

export function PhoneNumberInput() {
  const dispatch = useAppDispatch();
  const phoneNumber = useAppSelector((state) => state.auth.formData.phoneNumber);
  const countryCode = useAppSelector((state) => state.auth.formData.countryCode);

  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-gray-300">
        Phone Number
      </label>
      <div className="flex gap-2">
        {/* Country Code Select */}
        <select
          value={countryCode}
          onChange={(e) =>
            dispatch(updateFormField({ field: 'countryCode', value: e.target.value }))
          }
          className="w-18 sm:w-20 px-2 py-2.5 text-sm bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none text-center"
        >
          {COUNTRY_CODES.map((item) => (
            <option key={item.code} value={item.code} className="bg-gray-900">
              {item.code}
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="1234567890"
          value={phoneNumber}
          onChange={(e) =>
            dispatch(updateFormField({ field: 'phoneNumber', value: e.target.value }))
          }
          className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
        />
      </div>
      <p className="text-xs text-gray-500 truncate">
        {countryCode} {phoneNumber || '(number will appear here)'}
      </p>
    </div>
  );
}
