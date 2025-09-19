import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, PieChart, TrendingUp, Database, CheckCircle, ArrowRight } from 'lucide-react';

const TableauPage = () => {
  const tableauServices = [
    {
      title: 'Interactive Dashboards',
      description: 'Dynamic dashboards that bring your data to life with actionable insights.',
      features: ['Custom KPI dashboards', 'Cross-filtering & drill-downs', 'Mobile-ready dashboards', 'Real-time data refresh']
    },
    {
      title: 'Data Integration',
      description: 'Seamless connections between Tableau and multiple data sources.',
      features: ['SQL/NoSQL databases', 'Excel/CSV integration', 'Cloud platforms', 'ETL workflows']
    },
    {
      title: 'Advanced Analytics',
      description: 'Predictive and prescriptive insights with Tableau’s advanced features.',
      features: ['Forecasting & trends', 'Clustering & segmentation', 'What-if analysis', 'Statistical models']
    },
    {
      title: 'Consulting & Training',
      description: 'Empower your team with the skills to maximize Tableau’s potential.',
      features: ['Custom training sessions', 'Performance tuning', 'Best practices workshops', 'Ongoing support']
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Transform raw data into interactive visual insights that guide decisions.'
    },
    {
      icon: PieChart,
      title: 'Visual Storytelling',
      description: 'Engaging dashboards that tell compelling stories with your data.'
    },
    {
      icon: Database,
      title: 'Unified Data Access',
      description: 'Connect multiple data sources into a single view for better intelligence.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable BI',
      description: 'Solutions built to scale as your organization and data grow.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-200 font-medium">Tableau Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tableau Development & Consulting
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Unlock the full potential of Tableau with custom dashboards, integrations, and training that empower your business with data-driven decision-making.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Tableau Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Data Visualization Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tableau Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Tableau solutions designed to unlock the power of your data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tableauServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What We Offer:</h4>
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
              Tableau Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why businesses trust us for Tableau solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Unlock Insights with Tableau?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s transform your raw data into actionable business intelligence with Tableau.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Tableau Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TableauPage;
