import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'
import React from 'react' 

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Navisa" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pathways" className="text-gray-700 hover:text-gray-900">
              Pathways
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">
              How it works
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
            <Button as={Link} to="/check-eligibility">
              Check your eligibility
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}