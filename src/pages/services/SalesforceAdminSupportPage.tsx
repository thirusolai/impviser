import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Settings, Clock, Shield, Headphones } from 'lucide-react';

const SalesforceAdminSupportPage = () => {
  const supportServices = [
    {
      title: 'Ongoing Administration',
      description: 'Day-to-day Salesforce administration and maintenance',
      features: ['User management', 'Permission sets', 'Data maintenance', 'System monitoring']
    },
    {
      title: 'Configuration Support',
      description: 'Custom fields, workflows, and process automation setup',
      features: ['Custom fields', 'Workflow rules', 'Process builder', 'Validation rules']
    },
    {
      title: 'Reporting & Dashboards',
      description: 'Custom reports and dashboards for business insights',
      features: ['Custom reports', 'Dashboard creation', 'Scheduled reports', 'Data visualization']
    },
    {
      title: 'Training & Adoption',
      description: 'User training and change management support',
      features: ['User training', 'Best practices', 'Adoption strategies', 'Documentation']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for critical business operations'
    },
    {
      icon: Shield,
      title: 'Expert Knowledge',
      description: 'Certified administrators with deep Salesforce expertise'
    },
    {
      icon: Settings,
      title: 'Proactive Maintenance',
      description: 'Regular system optimization and performance monitoring'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Assigned administrator for consistent service delivery'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-teal-200 font-medium">Salesforce Admin Support</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Admin Support Services
              </h1>
              <p className="text-xl text-teal-100 leading-relaxed mb-8">
                Dedicated Salesforce administration support to keep your system running smoothly. From daily maintenance to strategic optimization, we've got you covered.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Get Admin Support</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Settings className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Expert Administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Admin Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Salesforce administration services to optimize your system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
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
              Support Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our Salesforce admin support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Salesforce Admin Support?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let our certified administrators handle your Salesforce maintenance and optimization.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Admin Support</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceAdminSupportPage;