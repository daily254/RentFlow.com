import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from './Container';
import EmailSignupForm from './EmailSignupForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RentFlow</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered rental management made simple for landlords and tenants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Landlord Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tenant Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe for Updates</h3>
            <p className="text-gray-400 mb-4">Get the latest RentFlow news and updates.</p>
            <EmailSignupForm 
              variant="compact" 
              placeholder="Your email"
              buttonText="Subscribe"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} RentFlow. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;