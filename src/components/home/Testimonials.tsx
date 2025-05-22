import React from 'react';
import Container from '../common/Container';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const testimonials: Testimonial[] = [
    {
      quote: "RentFlow has revolutionized how I manage my properties. The automated payments and maintenance requests have saved me countless hours every month.",
      author: "Sarah Johnson",
      role: "Property Owner",
      company: "12 Units"
    },
    {
      quote: "As a tenant, I love how easy it is to communicate with my landlord and pay rent. The maintenance request system is particularly helpful.",
      author: "Michael Chen",
      role: "Tenant",
      company: "2 Years with RentFlow"
    },
    {
      quote: "We've reduced our administrative overhead by 30% since implementing RentFlow across our property portfolio. The ROI has been incredible.",
      author: "David Rodriguez",
      role: "Property Manager",
      company: "Horizon Properties"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50" ref={ref}>
      <Container>
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied landlords and tenants who've transformed their rental experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-6 shadow-md border border-gray-100 relative transition-all duration-700 delay-${index * 200} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute top-4 right-4 text-blue-100 text-6xl font-serif">"</div>
              
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 bg-white rounded-lg p-8 shadow-md text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <span className="text-blue-600 font-bold text-xl">Trusted by 5,000+ users worldwide</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;