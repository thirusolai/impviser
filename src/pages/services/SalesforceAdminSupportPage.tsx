import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Settings, Clock, Shield, Headphones } from 'lucide-react';
import time from "../../assets/icons4/time.png";
import expkno from "../../assets/icons4/expkno.png";
import maintain from "../../assets/icons4/maintain.png";
import support from "../../assets/icons4/support.png";
import sa from "../../assets/icons4/sa.png";

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
      icon: time,
      title: '24/7 Support',
      description: 'Round-the-clock support for critical business operations'
    },
    {
      icon: expkno,
      title: 'Expert Knowledge',
      description: 'Certified administrators with deep Salesforce expertise'
    },
    {
      icon: maintain,
      title: 'Proactive Maintenance',
      description: 'Regular system optimization and performance monitoring'
    },
    {
      icon: support,
      title: 'Dedicated Support',
      description: 'Assigned administrator for consistent service delivery'
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
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why You Need a Dedicated Admin Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why You Need a Dedicated Admin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated Salesforce administrator is more than just a support resource; they are a strategic asset.
            </p>
          </div>
          <div className="space-y-8 text-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Hiring a full-time, in-house Salesforce administrator can be costly and challenging. Our dedicated admin support services provide you with a cost-effective solution without compromising on quality or expertise. We give you access to a team of certified professionals who stay up-to-date with the latest Salesforce releases, security protocols, and best practices. This ensures your Salesforce org is not just maintained but continuously optimized for peak performance.
            </p>
            <p>
              By offloading administrative tasks to us, your internal team can focus on their core business activities. We handle everything from user management and security to data integrity and system enhancements, allowing you to maximize your Salesforce investment and drive business growth without the operational overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Proactive Approach Section with Image on Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proactive and Strategic Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that great admin support is proactive, not just reactive. Our methodology is designed to anticipate your needs and identify opportunities for improvement before issues arise. We regularly monitor your system's health, analyze performance metrics, and provide strategic recommendations to enhance your org's efficiency and usability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team works closely with you to understand your evolving business goals. We're not just here to fix problems; we're here to help you get more out of your Salesforce platform, building custom reports, automating tedious tasks, and ensuring user adoption remains high.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* This is a placeholder for your image */}
              <img src={sa} alt="Proactive Salesforce Administration" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Support Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs, budget, and desired level of support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
              <Headphones className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">On-Demand Support</h3>
              <p className="text-gray-600">Perfect for businesses that need assistance with specific tasks or occasional issues.</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Ticket-based system</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Pay-as-you-go model</span></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Retainer Packages</h3>
              <p className="text-gray-600">Ideal for ongoing administration needs and minor enhancements each month.</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Fixed number of hours per month</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Dedicated resource access</span></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Full-Time Admin</h3>
              <p className="text-gray-600">Your solution for comprehensive, daily administration and strategic partnership.</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Full-time certified administrator</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /> <span>Customized support agreement</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
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