import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import Button from './Button';
import Container from './Container';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">RentFlow</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Try Free</Button>
            <Button variant="primary" size="sm">Join Waitlist</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg absolute left-0 right-0 top-full px-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsOpen(false)}>FAQ</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" fullWidth onClick={() => setIsOpen(false)}>Try Free</Button>
                <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Join Waitlist</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;