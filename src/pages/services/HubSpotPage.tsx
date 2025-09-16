import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const HubSpotPage = () => {
  const hubspotServices = [
    {
      title: 'HubSpot CRM Setup',
      description: 'Complete HubSpot CRM implementation and configuration',
      features: ['Contact management', 'Deal pipeline', 'Email integration', 'Reporting setup']
    },
    {
      title: 'Marketing Hub Implementation',
      description: 'Inbound marketing automation and lead generation setup',
      features: ['Landing pages', 'Email campaigns', 'Lead nurturing', 'Marketing analytics']
    },
    {
      title: 'Sales Hub Configuration',
      description: 'Sales process automation and pipeline management',
      features: ['Sales sequences', 'Meeting scheduling', 'Quote generation', 'Sales reporting']
    },
    {
      title: 'Service Hub Setup',
      description: 'Customer service and support platform implementation',
      features: ['Ticketing system', 'Knowledge base', 'Customer feedback', 'Service analytics']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Inbound Marketing',
      description: 'Powerful inbound marketing tools to attract and convert leads'
    },
    {
      icon: Clock,
      title: 'All-in-One Platform',
      description: 'Marketing, sales, and service tools in one integrated platform'
    },
    {
      icon: Users,
      title: 'Easy to Use',
      description: 'User-friendly interface with minimal learning curve'
    },
    {
      icon: Shield,
      title: 'Free CRM',
      description: 'Robust free CRM tier with option to scale up as needed'
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
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-orange-200 font-medium">HubSpot Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                HubSpot CRM Implementation & Support
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Expert HubSpot implementation services including CRM setup, marketing automation, and sales process optimization. Grow better with HubSpot's powerful platform.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Implement HubSpot</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">HubSpot Growth Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HubSpot Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              HubSpot Implementation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete HubSpot platform implementation and optimization services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubspotServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Features:</h4>
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
              HubSpot Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose HubSpot for your CRM and marketing needs
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
            Ready to Grow with HubSpot?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start your HubSpot journey with expert implementation and support services.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start HubSpot Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HubSpotPage;