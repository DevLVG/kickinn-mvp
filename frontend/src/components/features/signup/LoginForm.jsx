import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    isSubmitting: false,
    error: null
  });

  const handleEmailChange = (e) => {
    setFormState(prev => ({
      ...prev,
      email: e.target.value
    }));
  };

  const handlePasswordChange = (e) => {
    setFormState(prev => ({
      ...prev,
      password: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formState.email || !formState.password) {
      setFormState(prev => ({
        ...prev,
        error: 'Please enter both email and password'
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      error: null
    }));

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formState.email,
        password: formState.password
      });

      if (error) {
        console.error('Login error:', error.message);
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          error: error.message
        }));
        return;
      }

      console.log('Login successful:', data);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: null
      }));
      
      // Redirect to dashboard after successful login
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error('Unexpected error during login:', error);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: 'An unexpected error occurred'
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Welcome Back</h1>
          <p className="text-[#666666]">Log in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F6F6C] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F6F6C] focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {formState.error && (
            <div className="text-red-500 text-sm">
              {formState.error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4F6F6C] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? 'Logging in...' : 'Log In'}
          </button>

          <div className="text-center text-sm text-gray-600">
            <Link to="/forgot-password" className="hover:text-[#4F6F6C] transition-colors">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#4F6F6C] hover:text-opacity-80 transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 