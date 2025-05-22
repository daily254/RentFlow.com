import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import EmailSignupForm from './EmailSignupForm';
import Button from './Button';

const PopupSignup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 30000);
    
    // Add exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed && !isVisible) {
        setIsVisible(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDismissed, isVisible]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-amber-700"></div>
        
        <button 
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get Early Access to RentFlow</h3>
          <p className="text-gray-600">Join our exclusive waitlist and receive rental management tips straight to your inbox.</p>
        </div>
        
        <EmailSignupForm 
          variant="expanded" 
          placeholder="Your email address"
          buttonText="Join Waitlist"
          incentiveText="Join 10,000+ landlords getting exclusive tips!"
          className="mb-4"
        />
        
        <div className="text-center mt-4">
          <Button variant="text" onClick={handleDismiss}>Maybe later</Button>
        </div>
      </div>
    </div>
  );
};

export default PopupSignup;