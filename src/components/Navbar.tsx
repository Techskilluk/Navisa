import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Navisa" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pathways" className="text-gray-700 hover:text-gray-900">
              Pathways
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">
              How it works
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/check-eligibility"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Check your eligibility
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}