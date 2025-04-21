'use client';

import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import EmailInput from './EmailInput';
import RoleSelector from './RoleSelector';
import WalletConnect from './WalletConnect';

export default function Login() {
  const [formState, setFormState] = useState({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
    role: { selected: 'ideator', walletConnected: false },
    form: { isSubmitting: false, errors: [] }
  });

  const handleEmailChange = useCallback((email, isValid) => {
    setFormState(prev => ({
      ...prev,
      email: { value: email, isValid }
    }));
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const value = e.target.value;
    setFormState(prev => ({
      ...prev,
      password: { value, isValid: value.length >= 6 }
    }));
  }, []);

  const handleRoleChange = useCallback((role) => {
    setFormState(prev => ({
      ...prev,
      role: { ...prev.role, selected: role }
    }));
  }, []);

  const handleWalletConnect = useCallback((connected) => {
    setFormState(prev => ({
      ...prev,
      role: { ...prev.role, walletConnected: connected }
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formState.email.isValid || !formState.password.isValid) {
      setFormState(prev => ({
        ...prev,
        form: { 
          ...prev.form, 
          errors: ['Please enter a valid email and password (min 6 characters)']
        }
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      form: { ...prev.form, isSubmitting: true, errors: [] }
    }));

    try {
      // 1. Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formState.email.value,
        password: formState.password.value,
        options: {
          data: {
            role: formState.role.selected,
            wallet_connected: formState.role.walletConnected
          }
        }
      });

      if (authError) {
        console.error('Signup error:', authError.message);
        setFormState(prev => ({
          ...prev,
          form: { 
            ...prev.form, 
            isSubmitting: false,
            errors: [authError.message]
          }
        }));
        return;
      }

      // 2. Insert profile record
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: authData.user.id,
            email: formState.email.value,
            role: formState.role.selected,
            wallet_connected: formState.role.walletConnected,
            created_at: new Date().toISOString()
          }
        ]);

      if (profileError) {
        console.error('Profile creation error:', profileError.message);
        setFormState(prev => ({
          ...prev,
          form: { 
            ...prev.form, 
            isSubmitting: false,
            errors: ['Account created but profile setup failed. Please contact support.']
          }
        }));
        return;
      }

      console.log('Signup and profile creation successful!');
      setFormState(prev => ({
        ...prev,
        form: { ...prev.form, isSubmitting: false }
      }));
    } catch (error) {
      console.error('Unexpected error during signup:', error);
      setFormState(prev => ({
        ...prev,
        form: { 
          ...prev.form, 
          isSubmitting: false,
          errors: ['An unexpected error occurred']
        }
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Join Kick Inn</h1>
          <p className="text-[#666666]">Select your role to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <EmailInput 
            value={formState.email.value}
            isValid={formState.email.isValid}
            onChange={handleEmailChange}
          />

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={formState.password.value}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F6F6C] focus:border-transparent"
                placeholder="Enter your password (min 6 characters)"
                minLength={6}
              />
            </div>
          </div>

          <RoleSelector 
            selectedRole={formState.role.selected}
            onRoleChange={handleRoleChange}
          />

          <WalletConnect 
            isConnected={formState.role.walletConnected}
            onConnect={handleWalletConnect}
          />

          {formState.form.errors.length > 0 && (
            <div className="text-red-500 text-sm">
              {formState.form.errors[0]}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4F6F6C] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
            disabled={!formState.email.isValid || !formState.password.isValid || formState.form.isSubmitting}
          >
            {formState.form.isSubmitting ? 'Signing up...' : 'Continue'}
          </button>
        </form>
      </div>
      
      <div className="mt-8 flex space-x-6 text-sm text-gray-600">
        <Link to="/help" className="hover:text-[#4F6F6C] transition-colors">Help</Link>
        <Link to="/privacy" className="hover:text-[#4F6F6C] transition-colors">Privacy</Link>
        <Link to="/contact" className="hover:text-[#4F6F6C] transition-colors">Contact Us</Link>
      </div>
    </div>
  );
}
