import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../common/Container';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ item: FAQItem, index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.question}</span>
        <span>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 pt-2 pb-4">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How does RentFlow help streamline rent collection?",
      answer: "RentFlow automates the entire rent collection process with secure online payments, automatic reminders, receipt generation, and detailed financial tracking. Tenants can set up recurring payments, and landlords receive instant notifications when rent is paid."
    },
    {
      question: "Can I manage maintenance requests through RentFlow?",
      answer: "Yes! Tenants can submit maintenance requests with photos directly through the app. Landlords can then prioritize, assign to vendors, track progress, and communicate updates all within RentFlow. The system keeps a detailed history of all maintenance activities."
    },
    {
      question: "Is RentFlow suitable for small landlords with just a few properties?",
      answer: "Absolutely! Our Free plan is specifically designed for landlords with up to 2 properties. It includes all the essential tools needed to simplify your rental management, including basic messaging, payment processing, and maintenance requests."
    },
    {
      question: "How secure is my data on RentFlow?",
      answer: "Security is our top priority. RentFlow uses bank-level encryption for all financial transactions, secure cloud storage for documents, and strict access controls. We are fully compliant with data protection regulations and never share your information with third parties without your consent."
    },
    {
      question: "Can tenants use RentFlow too?",
      answer: "Yes, RentFlow is designed for both landlords and tenants. Tenants get free access to their rental dashboard where they can pay rent, submit maintenance requests, communicate with their landlord, and access important documents like their lease agreement."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, RentFlow offers mobile apps for both iOS and Android, allowing landlords and tenants to manage their rental activities on the go. The apps include all the core functionality of the web platform with additional features like push notifications."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about RentFlow.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;