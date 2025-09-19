import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ArrowRight, Code, Cpu, Shield, Rocket } from 'lucide-react';

const MobileAppDevelopment = () => {
  const devServices = [
    {
      title: 'Custom App Development',
      description: 'Tailored mobile apps built to meet your unique business requirements',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'Custom features', 'Scalable architecture']
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and user-friendly designs that enhance customer engagement',
      features: ['Wireframing & prototyping', 'Modern UI design', 'User testing', 'Interactive experiences']
    },
    {
      title: 'App Integration',
      description: 'Seamless integration with third-party tools and enterprise systems',
      features: ['API integration', 'Payment gateways', 'CRM/ERP systems', 'Cloud services']
    },
    {
      title: 'Maintenance & Support',
      description: 'Continuous updates, bug fixes, and performance optimization',
      features: ['Regular updates', 'Bug fixing', 'Performance tuning', 'Feature enhancements']
    }
  ];

  const benefits = [
    {
      icon: Code,
      title: 'Experienced Developers',
      description: 'Skilled team with expertise in native and cross-platform development'
    },
    {
      icon: Cpu,
      title: 'Cutting-edge Technology',
      description: 'Latest frameworks and tools to deliver high-performing apps'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Robust data security and compliance with global standards'
    },
    {
      icon: Rocket,
      title: 'Faster Time-to-Market',
      description: 'Agile development process to launch your app quickly and efficiently'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-pink-200 font-medium">Mobile App Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Mobile App Development Services
              </h1>
              <p className="text-xl text-pink-100 leading-relaxed mb-8">
                End-to-end mobile app development solutions that help you connect with customers, boost engagement, and grow your business on-the-go.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Build Your App</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Smart & Scalable Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app solutions to take your business mobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devServices.map((service, index) => (
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
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Benefits of our mobile app development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let’s create a powerful and engaging mobile app that takes your business to the next level.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
