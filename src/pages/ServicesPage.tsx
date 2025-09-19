import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Cog, 
  Target, 
  Code, 
  RefreshCw, 
  Link as LinkIcon, 
  Headphones, 
  Users, 
  Settings, 
  Bot, 
  Brain, 
  Database, 
  BarChart3, 
  PieChart, 
  Globe, 
  Smartphone, 
  Store,
  ArrowRight 
} from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Salesforce Services',
      description: 'Comprehensive Salesforce consulting, implementation, and support services',
      services: [
        {
          name: 'Salesforce Consulting',
          description: 'Strategic planning and optimization for Salesforce implementations',
          icon: Building2,
          link: '/services/salesforce-consulting'
        },
        {
          name: 'Salesforce Migration',
          description: 'Seamless data and system migrations to Salesforce',
          icon: RefreshCw,
          link: '/services/salesforce-migration'
        },
        {
          name: 'Salesforce Integration',
          description: 'Connect Salesforce with your existing business systems',
          icon: LinkIcon,
          link: '/services/salesforce-integration'
        },
        {
          name: 'AppExchange App Development',
          description: 'Custom Salesforce applications for the AppExchange marketplace',
          icon: Store,
          link: '/services/appexchange-development'
        },
        {
          name: 'Salesforce Admin Support',
          description: 'Ongoing administrative support and system maintenance',
          icon: Users,
          link: '/services/salesforce-admin-support'
        },
        {
          name: 'Salesforce CPQ Implementation',
          description: 'Configure, Price, Quote implementation and optimization',
          icon: Target,
          link: '/services/salesforce-cpq-implementation'
        },
        {
          name: 'Salesforce Development',
          description: 'Custom Apex, Lightning, and platform development',
          icon: Code,
          link: '/services/salesforce-development'
        },
        {
          name: 'Salesforce Issue Support',
          description: 'Expert troubleshooting and issue resolution services',
          icon: Headphones,
          link: '/services/salesforce-issue-support'
        },
        {
          name: 'Data & Analytics Solutions',
          description: 'Business intelligence and data visualization solutions',
          icon: BarChart3,
          link: '/services/data-analytics'
        },
        {
          name: 'Hire a Salesforce Expert',
          description: 'Dedicated Salesforce experts for your projects',
          icon: Users,
          link: '/services/hire-salesforce-expert'
        },
        {
          name: 'AI-Powered Salesforce Implementation',
          description: 'Next-generation AI-enhanced Salesforce solutions',
          icon: Brain,
          link: '/services/ai-powered-salesforce'
        },
      ]
    },
    {
      title: 'Other CRM Services',
      description: 'Expert implementation and support for alternative CRM platforms',
      services: [
        {
          name: 'Zoho',
          description: 'Zoho CRM implementation and customization services',
          icon: Settings,
          link: '/services/zoho'
        },
        {
          name: 'HubSpot',
          description: 'HubSpot CRM implementation and marketing automation',
          icon: Users,
          link: '/services/hubspot'
        },
      ]
    },
    {
      title: 'App Development',
      description: 'Custom application development for web and mobile platforms',
      services: [
        {
          name: 'Web App Development',
          description: 'Modern, responsive web applications built for scale',
          icon: Globe,
          link: '/services/web-app-development'
        },
        {
          name: 'Mobile App Development',
          description: 'iOS and Android applications for your business needs',
          icon: Smartphone,
          link: '/services/mobile-app-development'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive technology consulting services designed to accelerate your digital transformation and drive sustainable business growth.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Discuss Your Needs</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.link}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows our time-tested methodology to ensure successful outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and objectives' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive implementation plan' },
              { step: '03', title: 'Implementation', description: 'Expert execution with regular progress updates' },
              { step: '04', title: 'Support', description: 'Ongoing optimization and support services' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/process" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Learn About Our Process</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which services are right for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/customer-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;