'use client';

import { memo } from 'react';
import { Check } from 'lucide-react';

const EmailInput = memo(function EmailInput({ value, isValid, onChange }) {
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(newEmail);
    onChange(newEmail, valid);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          value={value || ''}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F6F6C] focus:border-transparent"
          placeholder="Enter your email"
        />
        {isValid && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Check className="w-5 h-5 text-[#2196F3]" />
          </div>
        )}
      </div>
    </div>
  );
});

EmailInput.displayName = 'EmailInput';

export default EmailInput;
