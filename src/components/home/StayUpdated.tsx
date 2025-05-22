import React from 'react';
import { MailPlus } from 'lucide-react';
import Container from '../common/Container';
import EmailSignupForm from '../common/EmailSignupForm';

const StayUpdated: React.FC = () => {
  return (
    <section id="stay-updated" className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <MailPlus size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want RentFlow Tips & Early Access?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe for rental management hacks, feature updates, and exclusive discounts. Join our community of property managers.
          </p>
          
          <div className="max-w-md mx-auto">
            <EmailSignupForm 
              variant="expanded"
              placeholder="Your email address"
              buttonText="Subscribe Now"
              incentiveText="Join 10,000+ landlords getting exclusive tips!"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StayUpdated;