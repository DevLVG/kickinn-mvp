'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Choose Your Role', href: '/roles' },
  { label: 'Why Join', href: '/why-join' },
  { label: 'Live Now', href: '/live' },
  { label: 'Trusted Network', href: '/network' },
  { label: 'Docs', href: '/docs' },
  { label: 'Legal', href: '/legal' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-header bg-white shadow-sm z-50">
      <div className="container-custom h-full flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          KickInn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/login" className="btn-primary">
            Login / Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-header left-0 right-0 bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
} 