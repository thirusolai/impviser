import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, CheckCircle, ArrowRight, Database, Shield, Clock, Users, TrendingUp } from 'lucide-react';
import time from "../../assets/icons4/time.png";
import secure from "../../assets/icons4/secure.png";
import adop from "../../assets/icons4/adop.png";
import perf from "../../assets/icons4/perf.png";
import mihero from "../../assets/icons4/mihero.png";
import whatWeDoImg from "../../assets/icons4/wwd.png";
import approachImg from "../../assets/icons4/approach.png";




const SalesforceMigrationPage = () => {
  const migrationTypes = [
    {
      title: 'Data Migration',
      description: 'Seamless transfer of your existing data to Salesforce',
      features: ['Data mapping and transformation', 'Quality validation', 'Incremental migration', 'Rollback capabilities']
    },
    {
      title: 'System Migration',
      description: 'Complete migration from legacy CRM systems',
      features: ['Legacy system analysis', 'Process re-engineering', 'User training', 'Change management']
    },
    {
      title: 'Org-to-Org Migration',
      description: 'Migration between Salesforce organizations',
      features: ['Metadata migration', 'Data consolidation', 'User management', 'Configuration transfer']
    },
    {
      title: 'Platform Migration',
      description: 'Migration from other platforms to Salesforce',
      features: ['Platform assessment', 'Architecture planning', 'Integration setup', 'Performance optimization']
    }
  ];

  const benefits = [
    {
      icon: time,
      title: 'Minimal Downtime',
      description: 'Strategic migration approach ensures business continuity'
    },
    {
      icon: secure,
      title: 'Data Integrity',
      description: '100% data accuracy with comprehensive validation processes'
    },
    {
      icon: adop,
      title: 'User Adoption',
      description: 'Smooth transition with comprehensive training and support'
    },
    {
      icon: perf,
      title: 'Improved Performance',
      description: 'Enhanced system performance and user experience'
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
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-200 font-medium">Salesforce Migration</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Migration Services
              </h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Seamlessly migrate your data, processes, and users to Salesforce with zero data loss and minimal business disruption. Our proven migration methodology ensures a smooth transition.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Plan Your Migration</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="flex justify-center">
                  <img 
                  src={mihero} 
                  alt="Secure Data Migration" 
                  className="max-w-xs md:max-w-sm lg:max-w-md"
                  />
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Migration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Migration Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive migration solutions for every scenario and business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What We Include:</h4>
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
              Migration Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our migration services for your Salesforce transition
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
      
      {/* Understanding the Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Understanding the Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical journey to a successful Salesforce transition.
            </p>
          </div>
          <div className="text-gray-700 text-lg leading-relaxed mb-8">
            <p className="mb-4">
              The journey to a successful Salesforce migration is a methodical one, and it's far more than just moving data from one place to another. Our process begins with a comprehensive **Discovery & Planning** phase, where we analyze your existing systems, data models, and business processes to create a detailed migration roadmap. This is followed by **Data Cleansing & Preparation**, a crucial step to ensure the data you're moving is accurate and free of duplicates, which prevents future issues and improves system performance. Next comes the **Migration & Validation** phase, where we execute the plan using specialized tools and rigorous testing to ensure data integrity and zero loss. Finally, the **Go-Live & Post-Migration Support** phase ensures a smooth transition and provides continuous assistance as your team adapts to the new platform.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section with Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  What We Do: Beyond the Code
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                  Our role in your Salesforce migration goes beyond simple technical execution.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We act as your strategic partners, ensuring that the migration aligns with your long-term business goals. We specialize in **process re-engineering** to identify opportunities for automation and efficiency gains that your legacy system couldn't support. This involves working closely with your stakeholders to understand their pain points and design a solution that not only meets but exceeds their expectations. By focusing on a holistic approach, we ensure that the new Salesforce environment is optimized for your specific workflows, empowering your team to work smarter and more productively.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={whatWeDoImg} alt="Data flow diagram" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Approach Section with Image on Left */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={approachImg} alt="Collaborative team on a dashboard" className="rounded-xl shadow-lg w-full" />
            </div>
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Proven Approach
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                  A methodology designed to minimize risk and maximize success.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our proven methodology is designed to minimize risk and maximize success. We believe in an agile, iterative approach that allows for flexibility and continuous improvement throughout the project lifecycle. Our team of certified Salesforce consultants follows best practices for data security and privacy, ensuring your sensitive information is protected at every stage. **Rigorous quality assurance** is a cornerstone of our process, with multiple rounds of testing, including user acceptance testing, to confirm that all functionalities and data are working as intended before the final deployment. This meticulous approach guarantees a reliable and robust Salesforce instance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Tangible Value Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Delivering Tangible Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock new growth opportunities with a modern, scalable platform.
            </p>
          </div>
          <div className="text-gray-700 text-lg leading-relaxed mb-8">
            <p className="mb-4">
              Choosing our Salesforce migration services is an investment in your company's future. By upgrading to a modern, scalable platform, you're not just improving your technology; you're unlocking new growth opportunities. The benefits are tangible: reduced operational costs due to improved efficiency, enhanced decision-making with real-time analytics, and a 360-degree view of your customers that allows for more personalized and effective interactions. We don't just migrate your data; we migrate your business to a position of strength, helping you stay competitive and agile in a rapidly evolving market.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Migrate to Salesforce?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss your migration requirements and create a risk-free migration plan.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Migration Planning</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceMigrationPage;