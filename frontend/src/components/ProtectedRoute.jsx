import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserSession } from '../hooks/useUserSession';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, redirect to login
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  // While checking authentication, return null
  if (loading) {
    return null;
  }

  // If user is not authenticated, return null (will be redirected by useEffect)
  if (!user) {
    return null;
  }

  // User is authenticated, render the protected content
  return children;
}

// Usage example:
/*
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
*/ 