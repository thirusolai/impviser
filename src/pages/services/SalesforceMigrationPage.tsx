import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, CheckCircle, ArrowRight, Database, Shield, Clock, Users, TrendingUp } from 'lucide-react';

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
      icon: Clock,
      title: 'Minimal Downtime',
      description: 'Strategic migration approach ensures business continuity'
    },
    {
      icon: Shield,
      title: 'Data Integrity',
      description: '100% data accuracy with comprehensive validation processes'
    },
    {
      icon: Users,
      title: 'User Adoption',
      description: 'Smooth transition with comprehensive training and support'
    },
    {
      icon: TrendingUp,
      title: 'Improved Performance',
      description: 'Enhanced system performance and user experience'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900 text-white">
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
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Secure Data Migration</p>
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
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