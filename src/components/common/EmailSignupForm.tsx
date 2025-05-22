import React, { useState } from 'react';
import Button from './Button';

interface EmailSignupFormProps {
  placeholder?: string;
  buttonText?: string;
  variant?: 'default' | 'compact' | 'expanded';
  className?: string;
  incentiveText?: string;
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  variant = 'default',
  className = '',
  incentiveText,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    // Here you would integrate with your email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  const variantClasses = {
    default: 'flex flex-col sm:flex-row gap-2 w-full max-w-md',
    compact: 'flex flex-row gap-2 w-full max-w-sm',
    expanded: 'flex flex-col gap-3 w-full max-w-lg',
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={variantClasses[variant]}>
        <div className="flex-grow relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1 absolute">{error}</p>}
        </div>
        <Button 
          type="submit" 
          variant="primary"
          size={variant === 'compact' ? 'sm' : 'md'}
          className={variant === 'expanded' ? 'py-3' : ''}
        >
          {buttonText}
        </Button>
      </form>
      
      {incentiveText && (
        <p className="text-sm text-gray-600 mt-2">{incentiveText}</p>
      )}
      
      {submitted && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in-out">
          Thanks! Check your email.
        </div>
      )}
    </div>
  );
};

export default EmailSignupForm;