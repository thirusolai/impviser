import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const SalesforceDevelopmentPage = () => {
  const developmentServices = [
    {
      title: 'Apex Development',
      description: 'Custom server-side business logic and complex data processing',
      features: ['Trigger development', 'Batch processing', 'Web services', 'Complex business logic']
    },
    {
      title: 'Lightning Development',
      description: 'Modern user interfaces with Lightning Web Components',
      features: ['Custom components', 'Lightning pages', 'Mobile-responsive design', 'Interactive dashboards']
    },
    {
      title: 'Visualforce Development',
      description: 'Custom pages and user interfaces for specific requirements',
      features: ['Custom pages', 'PDF generation', 'Email templates', 'Mobile interfaces']
    },
    {
      title: 'API Development',
      description: 'Custom APIs and web services for system integration',
      features: ['REST APIs', 'SOAP services', 'Webhook handlers', 'Real-time integration']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Optimized code that runs efficiently at enterprise scale'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built with Salesforce security best practices and guidelines'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Intuitive interfaces that drive user adoption and productivity'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-200 font-medium">Salesforce Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Development Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Custom Salesforce development including Apex, Lightning components, Visualforce, and API development. Build powerful solutions that extend Salesforce capabilities.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Development Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Custom Development Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Salesforce development capabilities to extend platform functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What We Build:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
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
              Development Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our Salesforce development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Custom Salesforce Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build custom solutions that extend your Salesforce capabilities.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Development</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceDevelopmentPage;