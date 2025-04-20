import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useUserSession() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error fetching session:', error.message);
          return;
        }
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Unexpected error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    signOut: () => supabase.auth.signOut()
  };
}

// Optional: Export a hook that throws if used outside of a UserProvider context
// This is useful if you want to add a UserProvider later
export function useUser() {
  const { user, loading } = useUserSession();
  
  if (loading) {
    return { user: null, loading: true };
  }
  
  return { user, loading: false };
} 