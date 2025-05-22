import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-600 opacity-5 rounded-bl-full transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-amber-700 opacity-5 rounded-tr-full transform -rotate-12"></div>
      </div>
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Rent Smarter, <span className="text-blue-600">Not Harder</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              RentFlow's AI-powered tools make property management effortless for landlords and tenants. Streamline payments, maintenance, and communication.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">Try Free</Button>
              <Button variant="outline" size="lg">Join Waitlist</Button>
            </div>
            
            <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm inline-block">
              <p className="text-sm text-gray-500 mb-2">Trusted by 5,000+ property managers</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                {/* Free badge resources from Simple Icons */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/stripe.svg" 
                  alt="Stripe" 
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  title="Stripe Payments"
                />
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/paypal.svg" 
                  alt="PayPal" 
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  title="PayPal Payments"
                />
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/google.svg" 
                  alt="Google" 
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  title="Google Workspace"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Glass card effect */}
              <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50 relative z-10">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-2">RentFlow Dashboard</h3>
                  <p>See all your properties at a glance</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">123 Main Street</h4>
                        <p className="text-sm text-gray-600">Rent collected: $1,200</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">456 Oak Avenue</h4>
                        <p className="text-sm text-gray-600">Maintenance request pending</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">789 Pine Lane</h4>
                        <p className="text-sm text-gray-600">Lease renewal in 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-amber-700/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-blue-600/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;