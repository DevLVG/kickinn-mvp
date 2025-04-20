import React from 'react';
import { useUserSession } from '../hooks/useUserSession';

export default function Dashboard() {
  const { user } = useUserSession();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to your dashboard</h1>
      <p className="text-gray-600">
        You are signed in as <span className="font-medium">{user?.email}</span>
      </p>
    </div>
  );
} 