import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/projects',
  '/settings'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the current route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

  // If it's not a protected route, allow access
  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  // For protected routes, check authentication
  const token = request.cookies.get('auth-token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 