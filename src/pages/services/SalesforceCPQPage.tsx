import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight, Calculator, TrendingUp, Clock, Shield } from 'lucide-react';

const SalesforceCPQPage = () => {
  const cpqFeatures = [
    {
      title: 'Product Configuration',
      description: 'Complex product and service configuration management',
      features: ['Product bundles', 'Option constraints', 'Configuration rules', 'Guided selling']
    },
    {
      title: 'Dynamic Pricing',
      description: 'Automated pricing with discounts and approval workflows',
      features: ['Price books', 'Discount schedules', 'Approval processes', 'Volume pricing']
    },
    {
      title: 'Quote Generation',
      description: 'Professional quote documents with automated generation',
      features: ['Quote templates', 'Document generation', 'E-signature integration', 'Quote analytics']
    },
    {
      title: 'Contract Management',
      description: 'End-to-end contract lifecycle management',
      features: ['Contract templates', 'Amendment tracking', 'Renewal management', 'Compliance monitoring']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Faster Quotes',
      description: 'Reduce quote generation time with automation'
    },
    {
      icon: Calculator,
      title: '99% Pricing Accuracy',
      description: 'Eliminate pricing errors with automated calculations'
    },
    {
      icon: Clock,
      title: 'Shorter Sales Cycles',
      description: 'Accelerate deals with streamlined quoting process'
    },
    {
      icon: Shield,
      title: 'Compliance Assured',
      description: 'Built-in approval workflows ensure pricing compliance'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#223794] to-[#29ec48] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-indigo-200 font-medium">Salesforce CPQ</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce CPQ Implementation
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                Streamline your Configure, Price, Quote process with expert Salesforce CPQ implementation. Accelerate sales cycles and ensure pricing accuracy.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Implement CPQ</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Calculator className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">CPQ Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPQ Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              CPQ Implementation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete Configure, Price, Quote implementation and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cpqFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Capabilities:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              CPQ Implementation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements to your sales process and accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Implement Salesforce CPQ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Streamline your sales process with expert CPQ implementation services.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start CPQ Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceCPQPage;