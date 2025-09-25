import React from 'react';
import { Link } from 'react-router-dom';
import { Store, CheckCircle, ArrowRight, Code, Users, TrendingUp, Shield } from 'lucide-react';
import globe from "../../assets/icons4/globe.png";
import scale from "../../assets/icons4/scale.png";
import revenue from "../../assets/icons4/revenue.png";
import risk from "../../assets/icons4/risk.png";
import AX from "../../assets/icons4/ax.png";
import AP from "../../assets/icons4/apphero.png";
import HeroSection from "../../components/HeroSection";
import proven from "../../assets/icons4/proven-expertise.png";
import security from "../../assets/icons4/security-first.png";
import support from "../../assets/icons4/end-to-end-support.png";


const AppExchangePage = () => {
  const appTypes = [
    {
      title: 'Business Process Apps',
      description: 'Custom applications that automate and optimize business workflows',
      features: ['Workflow automation', 'Custom objects', 'Process builder', 'Approval processes']
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized applications for specific industry requirements',
      features: ['Industry templates', 'Compliance features', 'Sector-specific workflows', 'Regulatory reporting']
    },
    {
      title: 'Integration Apps',
      description: 'Applications that connect Salesforce with external systems',
      features: ['API connectors', 'Data synchronization', 'Real-time updates', 'Error handling']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced reporting and analytics applications',
      features: ['Custom dashboards', 'Advanced analytics', 'Data visualization', 'Automated reports']
    }
  ];

  const benefits = [
    {
      icon: revenue,
      title: 'Revenue Generation',
      description: 'Monetize your Salesforce expertise through AppExchange sales'
    },
    {
      icon: globe,
      title: 'Global Reach',
      description: 'Access to millions of Salesforce users worldwide'
    },
    {
      icon: risk,
      title: 'Security Reviewed',
      description: 'Salesforce security review ensures enterprise-grade security'
    },
    {
      icon: scale,
      title: 'Scalable Architecture',
      description: 'Multi-tenant architecture that scales with customer growth'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={AP}
        title="AppExchange App Development"
        subtitle="Build and publish custom Salesforce applications on the AppExchange marketplace. From concept to security review, we handle the complete development lifecycle."
        buttonText="Build Your App"
        buttonLink="/contact"
      />

     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title and description */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Types of Apps We Build
      </h2>
      <p className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto">
        Custom Salesforce applications designed for the AppExchange marketplace. We craft solutions tailored to your business, ensuring scalability, efficiency, and seamless integration.
      </p>
    </div>

    {/* Single row of apps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-700 text-lg">
      {appTypes.slice(0, 4).map((type, index) => (
        <div key={index} className="text-center">
          <p className="font-semibold text-gray-900 mb-2">{type.title}</p>
          <p className="mb-2">{type.description}</p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-left inline-block text-left">
            {type.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
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
              AppExchange Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why develop for the Salesforce AppExchange marketplace
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

      {/* Our App Development Process Section with Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our App Development Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Building a successful AppExchange application requires a meticulous and structured approach. We begin with a Discovery and Ideation phase to refine your app concept, define its features, and create a clear roadmap. The Design and Development phase follows, where our certified developers build a robust, scalable, and secure application using Salesforce best practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A critical part of our process is the Security Review Preparation, where we ensure your app meets all of Salesforce's stringent security and technical requirements. Finally, we assist with the Publishing and Marketing of your app, helping you get it live on the AppExchange and ready for customers.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* This is a placeholder for your image */}
              <img src={AX} alt="App Development Process" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Impviser is Your Ideal Partner Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Why Impviser is Your Ideal Partner
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Partner with an experienced team that understands the nuances of the AppExchange marketplace.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
        <div className="w-18 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
          <img
  src={proven}
  alt="Proven Expertise"
  className="w-10 h-10 object-contain"
/>

        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Expertise</h3>
        <p className="text-gray-600 text-sm">
          Our developers have a deep understanding of the Salesforce platform and AppExchange requirements.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
        <div className="w-18 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
          <img src={security} alt="Security First Approach" className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Security First Approach</h3>
        <p className="text-gray-600 text-sm">
          We build apps with security in mind, ensuring a smooth and successful security review process.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
        <div className="w-18 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
          <img src={support} alt="End-to-End Support" className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">End-to-End Support</h3>
        <p className="text-gray-600 text-sm">
          We guide you through the entire lifecycle, from initial idea to app publication and beyond.
        </p>
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
};

export default AppExchangePage;