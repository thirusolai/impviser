import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, CheckCircle, ArrowRight, AlertTriangle, Clock, Shield, Users } from 'lucide-react';

const SalesforceIssueSupportPage = () => {
  const supportTypes = [
    {
      title: 'Critical Issue Resolution',
      description: 'Immediate response for business-critical Salesforce issues',
      features: ['24/7 emergency support', 'Root cause analysis', 'Rapid resolution', 'Prevention strategies']
    },
    {
      title: 'Performance Optimization',
      description: 'Identify and resolve performance bottlenecks',
      features: ['Performance audits', 'Query optimization', 'Data cleanup', 'System tuning']
    },
    {
      title: 'Bug Fixes & Troubleshooting',
      description: 'Expert diagnosis and resolution of system issues',
      features: ['Code debugging', 'Configuration fixes', 'Data integrity issues', 'User access problems']
    },
    {
      title: 'Preventive Maintenance',
      description: 'Proactive monitoring and maintenance to prevent issues',
      features: ['Health checks', 'Monitoring setup', 'Best practices review', 'Regular maintenance']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average 2-hour response time for critical issues'
    },
    {
      icon: Shield,
      title: 'Expert Resolution',
      description: 'Certified experts with deep troubleshooting experience'
    },
    {
      icon: Users,
      title: 'Minimal Disruption',
      description: 'Quick fixes that keep your business running smoothly'
    },
    {
      icon: AlertTriangle,
      title: 'Issue Prevention',
      description: 'Proactive monitoring to prevent future problems'
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
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-200 font-medium">Salesforce Issue Support</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Issue Support Services
              </h1>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                Expert troubleshooting and issue resolution for your Salesforce org. Get rapid support when problems arise and proactive monitoring to prevent them.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Get Issue Support</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Expert Issue Resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Issue Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to keep your Salesforce running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Support Includes:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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
              Why choose our Salesforce issue support services
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
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Immediate Salesforce Support?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get expert help resolving your Salesforce issues quickly and effectively.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Support Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceIssueSupportPage;