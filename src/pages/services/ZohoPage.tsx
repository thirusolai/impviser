import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ArrowRight, Users, TrendingUp, Clock, Shield } from 'lucide-react';

const ZohoPage = () => {
  const zohoServices = [
    {
      title: 'Zoho CRM Implementation',
      description: 'Complete setup and configuration of Zoho CRM for your business',
      features: ['Lead management', 'Sales pipeline', 'Contact management', 'Workflow automation']
    },
    {
      title: 'Zoho One Suite',
      description: 'Implementation of the complete Zoho business suite',
      features: ['CRM integration', 'Project management', 'HR management', 'Financial tools']
    },
    {
      title: 'Custom Development',
      description: 'Custom applications and integrations within Zoho ecosystem',
      features: ['Custom modules', 'API integrations', 'Workflow customization', 'Report development']
    },
    {
      title: 'Migration Services',
      description: 'Seamless migration from other CRM systems to Zoho',
      features: ['Data migration', 'Process mapping', 'User training', 'System optimization']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Affordable CRM solution with enterprise-grade features'
    },
    {
      icon: Clock,
      title: 'Quick Implementation',
      description: 'Faster deployment compared to other CRM platforms'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Intuitive interface with high user adoption rates'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise security with 99.9% uptime guarantee'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-200 font-medium">Zoho Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Zoho CRM Implementation & Support
              </h1>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                Expert Zoho CRM implementation and customization services. Get the most out of Zoho's comprehensive business suite with our certified consultants.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Implement Zoho CRM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Settings className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Zoho CRM Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Zoho Implementation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Zoho CRM and business suite implementation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zohoServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Services Include:</h4>
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
              Zoho Implementation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose Zoho CRM for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Implement Zoho CRM?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get started with Zoho CRM implementation and unlock your business potential.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Zoho Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ZohoPage;