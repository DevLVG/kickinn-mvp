'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'Github' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Docs', href: '/docs' },
  { label: 'Legal', href: '/legal' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-mint-dark to-mint-light">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} KickInn. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 