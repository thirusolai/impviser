import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, CheckCircle, ArrowRight, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import seccon from "../../assets/icons4/seccon.png";
import sync from "../../assets/icons4/sync.png";
import flow from "../../assets/icons4/flow.png";
import ins from "../../assets/icons4/ins.png";
import sync1 from "../../assets/icons4/sync1.png";

const SalesforceIntegrationPage = () => {
  const integrationTypes = [
    {
      title: 'ERP Integration',
      description: 'Connect Salesforce with your ERP systems for unified business processes',
      features: ['Real-time data sync', 'Order management', 'Financial data flow', 'Inventory tracking']
    },
    {
      title: 'Marketing Automation',
      description: 'Integrate marketing platforms with Salesforce for complete lead lifecycle',
      features: ['Lead scoring', 'Campaign tracking', 'Email automation', 'Attribution reporting']
    },
    {
      title: 'E-commerce Integration',
      description: 'Seamless connection between your online store and Salesforce',
      features: ['Customer data sync', 'Order processing', 'Product catalog', 'Support integration']
    },
    {
      title: 'Custom API Development',
      description: 'Build custom integrations for unique business requirements',
      features: ['REST/SOAP APIs', 'Real-time webhooks', 'Batch processing', 'Error handling']
    }
  ];

  const benefits = [
    {
      icon: seccon,
      title: 'Real-time Sync',
      description: 'Instant data synchronization across all connected systems'
    },
    {
      icon: sync,
      title: 'Secure Connections',
      description: 'Enterprise-grade security for all data transfers'
    },
    {
      icon: flow,
      title: 'Automated Workflows',
      description: 'Eliminate manual data entry and reduce errors'
    },
    {
      icon: ins,
      title: 'Better Insights',
      description: 'Unified data view for improved business intelligence'
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
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-200 font-medium">Salesforce Integration</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Integration Services
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Connect Salesforce with your existing business systems for seamless data flow and unified operations. Expert integration services that eliminate data silos.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Discuss Integration Needs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <LinkIcon className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Seamless System Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Integration Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive integration services to connect Salesforce with your business ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
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
              Integration Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business operations with seamless system integration
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

      {/* Why Integration Matters Section with Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Salesforce Integration Matters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's interconnected business world, data silos are a major impediment to efficiency and growth. Integrating Salesforce with your other critical business systems breaks down these barriers, creating a single source of truth for all your customer and operational data. This not only streamlines workflows but also provides comprehensive insights that drive better decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Seamless integration ensures that your sales, marketing, service, and finance teams are always working with the most current and accurate information. This leads to improved customer experiences, reduced operational costs, and a more agile organization capable of responding quickly to market changes.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for an image that visualizes connected systems or breaking down data silos */}
              <img src={sync1} alt="Connected Systems Integration" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Integration Methodology Section (Text Only) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Robust Integration Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured and secure approach to ensure successful and scalable Salesforce integrations.
            </p>
          </div>
          <div className="space-y-8 text-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Our integration methodology is built on best practices to deliver reliable, secure, and scalable solutions. We begin with a thorough Discovery & Planning phase, analyzing your current architecture and defining clear integration requirements and data flow maps. This ensures that every integration serves a strategic purpose and aligns with your business objectives.
            </p>
            <p>
              During Design & Development, we choose the most appropriate integration tools and APIs, whether it's native Salesforce connectors, middleware platforms, or custom API development. We prioritize data security and integrity, implementing robust error handling and monitoring solutions.
            </p>
            <p>
              The Testing & Deployment phase involves rigorous testing scenarios, including unit, integration, and user acceptance testing, to validate functionality and performance. Finally, our **Post-Implementation Support** ensures your integrated systems operate smoothly, with ongoing maintenance and optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Integrate Your Systems?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's connect your business systems for improved efficiency and data visibility.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Integration Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceIntegrationPage;