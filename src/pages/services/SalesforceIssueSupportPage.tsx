import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, CheckCircle, ArrowRight, AlertTriangle, Clock, Shield, Users } from 'lucide-react';
import time from "../../assets/icons4/time.png";
import exp from "../../assets/icons4/exp.png";
import sec from "../../assets/icons4/seccon.png";
import iss from "../../assets/icons4/iss.png";
import fix from "../../assets/icons4/fix.png";

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
      icon: time,
      title: 'Rapid Response',
      description: 'Average 2-hour response time for critical issues'
    },
    {
      icon: exp,
      title: 'Expert Resolution',
      description: 'Certified experts with deep troubleshooting experience'
    },
    {
      icon: sec,
      title: 'Minimal Disruption',
      description: 'Quick fixes that keep your business running smoothly'
    },
    {
      icon: iss,
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
                <div className="w-12 h-12 items-center justify-center mx-auto mb-4">
                  <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Proactive & Strategic Approach Section with Image Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proactive and Strategic Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that great support is proactive, not just reactive. Our methodology is designed to anticipate your needs and identify opportunities for improvement before issues arise. We regularly monitor your system's health, analyze performance metrics, and provide strategic recommendations to enhance your org's efficiency and usability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team works closely with you to understand your evolving business goals. We're not just here to fix problems; we're here to help you get more out of your Salesforce platform, building custom reports, automating tedious tasks, and ensuring user adoption remains high.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
              src={fix} 
              alt="An individual working on a computer screen to resolve an issue" 
              className="w-full h-96 object-contain rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Our Support Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get the help you need, when you need it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-blue-600">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Support Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Flexible Support Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a plan that fits your business needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-4xl font-extrabold text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SalesforceIssueSupportPage;