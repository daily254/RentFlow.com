import React from 'react';
import { MessageSquare, CreditCard, Wrench, Search, Shield, BarChart3, Calendar, Users } from 'lucide-react';
import Container from '../common/Container';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-700 delay-[${delay}ms] ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Integrated Messaging",
      description: "Streamlined communication between landlords and tenants with history and notifications.",
      delay: 100
    },
    {
      icon: <CreditCard size={24} />,
      title: "Automated Payments",
      description: "Secure, on-time rent collection with automatic reminders and payment tracking.",
      delay: 200
    },
    {
      icon: <Wrench size={24} />,
      title: "Maintenance Requests",
      description: "Simple ticket system for reporting, tracking, and resolving property issues.",
      delay: 300
    },
    {
      icon: <Search size={24} />,
      title: "Property Search",
      description: "Advanced filters help tenants find their perfect rental property quickly.",
      delay: 400
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Documents",
      description: "Digital storage for leases and important documents with e-signatures.",
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Financial Reports",
      description: "Comprehensive analytics on income, expenses, and property performance.",
      delay: 600
    },
    {
      icon: <Calendar size={24} />,
      title: "Scheduling Tools",
      description: "Coordinate showings, inspections, and maintenance visits effortlessly.",
      delay: 700
    },
    {
      icon: <Users size={24} />,
      title: "Tenant Screening",
      description: "Make informed decisions with background and credit checks for applicants.",
      delay: 800
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50" ref={ref}>
      <Container>
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Rental Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to simplify every aspect of property management with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;