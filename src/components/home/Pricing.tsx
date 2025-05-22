import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import EmailSignupForm from '../common/EmailSignupForm';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: PlanFeature[];
  cta: string;
  isPopular?: boolean;
}

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();
  
  const plans: PricingPlan[] = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for getting started with basic rental management.',
      features: [
        { text: 'Manage up to 2 properties', available: true },
        { text: 'Basic messaging', available: true },
        { text: 'Simple payment processing', available: true },
        { text: 'Maintenance requests', available: true },
        { text: 'Document storage (100MB)', available: true },
        { text: 'Financial reporting', available: false },
        { text: 'Tenant screening', available: false },
        { text: 'Priority support', available: false },
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      monthlyPrice: 20,
      yearlyPrice: 16,
      description: 'Advanced tools for professional landlords and property managers.',
      features: [
        { text: 'Manage up to 10 properties', available: true },
        { text: 'Advanced messaging', available: true },
        { text: 'Full payment processing', available: true },
        { text: 'Maintenance management', available: true },
        { text: 'Document storage (1GB)', available: true },
        { text: 'Financial reporting', available: true },
        { text: 'Basic tenant screening', available: true },
        { text: 'Priority support', available: false },
      ],
      cta: 'Try Free for 14 Days',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 100,
      yearlyPrice: 80,
      description: 'Complete solution for property management companies.',
      features: [
        { text: 'Unlimited properties', available: true },
        { text: 'Advanced messaging + API', available: true },
        { text: 'Custom payment options', available: true },
        { text: 'Advanced maintenance', available: true },
        { text: 'Unlimited document storage', available: true },
        { text: 'Advanced financial reports', available: true },
        { text: 'Advanced tenant screening', available: true },
        { text: '24/7 priority support', available: true },
      ],
      cta: 'Contact Sales',
    },
  ];
  
  return (
    <section id="pricing" className="py-16 bg-white" ref={ref}>
      <Container>
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. Save 20% with annual billing.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${annual ? 'text-gray-500' : 'text-gray-900 font-medium'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={annual}
                onChange={() => setAnnual(!annual)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className={`ml-3 ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 text-sm font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg border ${
                plan.isPopular ? 'border-blue-500 shadow-lg' : 'border-gray-200 shadow'
              } overflow-hidden transition-all duration-700 delay-${index * 200} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {annual && plan.monthlyPrice > 0 && (
                    <div className="text-sm text-green-600 mt-1">
                      ${plan.monthlyPrice - plan.yearlyPrice} savings per month
                    </div>
                  )}
                </div>
                
                <Button 
                  variant={plan.isPopular ? 'primary' : 'outline'} 
                  fullWidth
                  className="mb-6"
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className={`mr-2 ${feature.available ? 'text-green-500' : 'text-gray-400'}`}>
                        {feature.available ? <Check size={18} /> : ''}
                      </span>
                      <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 bg-gray-50 rounded-lg p-6 md:p-8 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Need time to decide?</h3>
          <p className="text-gray-600 mb-6">Get pricing insights and special offers via email.</p>
          <div className="max-w-md mx-auto">
            <EmailSignupForm 
              placeholder="Your email address"
              buttonText="Get Pricing Updates"
              incentiveText="No commitment. Unsubscribe anytime."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;