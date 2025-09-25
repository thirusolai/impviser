import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowRight, Database, TrendingUp, Eye, Brain } from 'lucide-react';

const DataAnalyticsPage = () => {
  const analyticsServices = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      features: ['Custom dashboards', 'KPI tracking', 'Trend analysis', 'Executive reporting']
    },
    {
      title: 'Data Visualization',
      description: 'Interactive charts and graphs for better data understanding',
      features: ['Interactive charts', 'Real-time dashboards', 'Mobile analytics', 'Self-service BI']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and predictions',
      features: ['Sales forecasting', 'Customer behavior', 'Risk assessment', 'Demand planning']
    },
    {
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions',
      features: ['Data modeling', 'ETL processes', 'Data quality', 'Performance optimization']
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: 'Better Visibility',
      description: 'Clear insights into business performance and trends'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on accurate data analysis'
    },
    {
      icon: Brain,
      title: 'Predictive Insights',
      description: 'Forecast future trends and opportunities'
    },
    {
      icon: Database,
      title: 'Unified Data View',
      description: 'Single source of truth for all business data'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-emerald-200 font-medium">Data & Analytics</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Data & Analytics Solutions
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Transform your business data into powerful insights with advanced analytics, business intelligence, and data visualization solutions.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Explore Analytics Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Data-Driven Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data and analytics solutions to drive business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What We Deliver:</h4>
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
              Analytics Benefits
            </h2>
            <p className="text-xl text-gray-600">
              How data analytics transforms your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default DataAnalyticsPage;