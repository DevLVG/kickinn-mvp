'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Play, Lightbulb, Users, Rocket, Menu } from 'lucide-react'

const howItWorksSteps = [
  {
    icon: Lightbulb,
    title: 'Submit',
    description: 'Share your innovative idea with our community'
  },
  {
    icon: Users,
    title: 'Build',
    description: 'Connect with experts and develop your concept'
  },
  {
    icon: Rocket,
    title: 'Fund',
    description: 'Launch your project with the right backing'
  }
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/choose-role', label: 'Choose Your Role' },
  { href: '/why-join', label: 'Why Join' },
  { href: '/live-now', label: 'Live Now' },
  { href: '/network', label: 'Trusted Network' },
  { href: '/docs', label: 'Docs' },
  { href: '/legal', label: 'Legal' }
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const router = useRouter()

  const handleAuthAction = (action: 'login' | 'signup' | 'ideator' | 'deals' | 'contributor') => {
    switch(action) {
      case 'login':
        router.push('/auth/login')
        break
      case 'signup':
        router.push('/auth/signup')
        break
      case 'ideator':
        router.push('/auth/signup?role=ideator')
        break
      case 'deals':
        router.push('/auth/signup?role=investor')
        break
      case 'contributor':
        router.push('/auth/signup?role=contributor')
        break
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-accent">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-primary">
              KickInn
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="nav-link"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => handleAuthAction('login')}
                className="nav-link"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthAction('signup')}
                className="btn-primary"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-accent">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="nav-link"
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-accent flex flex-col space-y-4">
                  <button 
                    onClick={() => handleAuthAction('login')}
                    className="nav-link"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthAction('signup')}
                    className="btn-primary text-center"
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[75vh] bg-primary">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container-custom relative h-full flex items-center justify-center">
            <div className="text-center text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Where Ideas <span className="text-secondary">Kick In</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary/90">
                From insight to investability
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <button 
                  onClick={() => handleAuthAction('ideator')}
                  className="btn-primary bg-white text-primary"
                >
                  Start as an Ideator
                </button>
                <button 
                  onClick={() => handleAuthAction('deals')}
                  className="btn-primary bg-secondary text-primary"
                >
                  Explore Deals
                </button>
                <button 
                  onClick={() => handleAuthAction('contributor')}
                  className="btn-outline border-secondary text-secondary"
                >
                  Join as Contributor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kick Inn? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What is <span className="text-primary">Kick Inn</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Innovation Platform
                </h3>
                <p className="text-text-main text-lg">
                  A decentralized platform where innovators and experts connect to bring groundbreaking ideas to life.
                </p>
              </div>
              <div className="card">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Community Driven
                </h3>
                <p className="text-text-main text-lg">
                  Join a trusted network of professionals, developers, and creators ready to collaborate on exciting projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How it <span className="text-primary">Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {howItWorksSteps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{title}</h3>
                  <p className="text-text-main text-lg">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="relative aspect-video max-w-4xl mx-auto bg-secondary rounded-xl overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <button className="absolute inset-0 flex items-center justify-center hover:bg-black/20 transition-colors">
                <div className="bg-white p-6 rounded-full shadow-soft">
                  <Play className="w-6 h-6 text-primary" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-text-main text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-secondary/80 hover:text-secondary transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-secondary/80 hover:text-secondary transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-secondary/80 hover:text-secondary transition-colors">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-secondary/80 hover:text-secondary transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-secondary/80 hover:text-secondary transition-colors">Help Center</Link></li>
                <li><Link href="/blog" className="text-secondary/80 hover:text-secondary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-secondary/80 hover:text-secondary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-secondary/80 hover:text-secondary transition-colors">Terms</Link></li>
                <li><Link href="/security" className="text-secondary/80 hover:text-secondary transition-colors">Security</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/twitter" className="text-secondary/80 hover:text-secondary transition-colors">Twitter</Link></li>
                <li><Link href="/linkedin" className="text-secondary/80 hover:text-secondary transition-colors">LinkedIn</Link></li>
                <li><Link href="/discord" className="text-secondary/80 hover:text-secondary transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-secondary/60">
            <p>© 2025 KickInn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 