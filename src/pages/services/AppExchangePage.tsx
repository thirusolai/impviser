import React from 'react';
import { Link } from 'react-router-dom';
import { Store, CheckCircle, ArrowRight, Code, Users, TrendingUp, Shield } from 'lucide-react';

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
      icon: TrendingUp,
      title: 'Revenue Generation',
      description: 'Monetize your Salesforce expertise through AppExchange sales'
    },
    {
      icon: Users,
      title: 'Global Reach',
      description: 'Access to millions of Salesforce users worldwide'
    },
    {
      icon: Shield,
      title: 'Security Reviewed',
      description: 'Salesforce security review ensures enterprise-grade security'
    },
    {
      icon: Code,
      title: 'Scalable Architecture',
      description: 'Multi-tenant architecture that scales with customer growth'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <span className="text-orange-200 font-medium">AppExchange Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                AppExchange App Development
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Build and publish custom Salesforce applications on the AppExchange marketplace. From concept to security review, we handle the complete development lifecycle.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Build Your App</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Store className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">AppExchange Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom Salesforce applications designed for the AppExchange marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Features:</h4>
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
              AppExchange Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why develop for the Salesforce AppExchange marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your AppExchange App?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's turn your Salesforce app idea into a successful AppExchange product.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start App Development</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppExchangePage;