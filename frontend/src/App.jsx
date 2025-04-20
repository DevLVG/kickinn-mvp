import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/features/signup/Login'
import LoginForm from './components/features/signup/LoginForm'
import Help from './pages/Help'
import Privacy from './pages/Privacy'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { useUserSession } from './hooks/useUserSession'

export default function App() {
  const { user, loading, signOut } = useUserSession()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-lg p-6">
                <LoginForm />
              </div>
            </div>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-lg p-6">
                <Login />
              </div>
            </div>
          } 
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-4xl p-6">
                  <Dashboard />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/help" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-2xl p-6">
                <Help />
              </div>
            </div>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-2xl p-6">
                <Privacy />
              </div>
            </div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-2xl p-6">
                <ContactUs />
              </div>
            </div>
          } 
        />
      </Routes>
      {user && (
        <div className="fixed top-0 right-0 m-4 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Signed in as {user.email}</p>
          <button 
            onClick={signOut}
            className="text-sm text-red-600 hover:text-red-800 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
