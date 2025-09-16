import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, ArrowRight, Zap, TrendingUp, Bot, Sparkles } from 'lucide-react';

const AIPoweredSalesforcePage = () => {
  const aiFeatures = [
    {
      title: 'Einstein AI Integration',
      description: 'Leverage Salesforce Einstein for predictive insights and automation',
      features: ['Lead scoring', 'Opportunity insights', 'Forecasting', 'Next best actions']
    },
    {
      title: 'Custom AI Models',
      description: 'Build custom AI models tailored to your business needs',
      features: ['Predictive analytics', 'Customer behavior analysis', 'Churn prediction', 'Recommendation engines']
    },
    {
      title: 'Intelligent Automation',
      description: 'AI-powered process automation and workflow optimization',
      features: ['Smart workflows', 'Automated data entry', 'Intelligent routing', 'Exception handling']
    },
    {
      title: 'Conversational AI',
      description: 'AI chatbots and virtual assistants for customer service',
      features: ['Customer support bots', 'Sales assistants', 'Knowledge base integration', 'Multi-language support']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: '50% reduction in manual tasks through AI automation'
    },
    {
      icon: TrendingUp,
      title: 'Better Predictions',
      description: 'AI-powered forecasting with 90% accuracy improvement'
    },
    {
      icon: Bot,
      title: 'Smart Automation',
      description: 'Intelligent workflows that adapt to changing conditions'
    },
    {
      icon: Sparkles,
      title: 'Enhanced Experience',
      description: 'Personalized customer experiences powered by AI'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-200 font-medium">AI-Powered Salesforce</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                AI-Powered Salesforce Implementation
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Next-generation Salesforce implementations enhanced with artificial intelligence. Leverage AI to automate processes, predict outcomes, and deliver personalized experiences.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">AI-Enhanced Salesforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI capabilities integrated into your Salesforce implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">AI Capabilities:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{item}</span>
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
              AI Implementation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with AI-enhanced Salesforce capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for AI-Powered Salesforce?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your Salesforce with cutting-edge AI capabilities and automation.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start AI Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredSalesforcePage;