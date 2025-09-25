import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Award, Clock, TrendingUp, Shield } from 'lucide-react';

const HireSalesforceExpertPage = () => {
  const expertTypes = [
    {
      title: 'Salesforce Developers',
      description: 'Certified developers for custom Salesforce development projects',
      skills: ['Apex programming', 'Lightning development', 'Integration expertise', 'Best practices knowledge']
    },
    {
      title: 'Salesforce Administrators',
      description: 'Experienced admins for ongoing system management and optimization',
      skills: ['System configuration', 'User management', 'Workflow automation', 'Reporting & dashboards']
    },
    {
      title: 'Salesforce Architects',
      description: 'Senior architects for complex implementations and system design',
      skills: ['Solution architecture', 'Technical leadership', 'Integration design', 'Performance optimization']
    },
    {
      title: 'Salesforce Consultants',
      description: 'Business consultants for strategic planning and process optimization',
      skills: ['Business analysis', 'Process design', 'Change management', 'Training delivery']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'All experts hold current Salesforce certifications'
    },
    {
      icon: Clock,
      title: 'Flexible Engagement',
      description: 'Part-time, full-time, or project-based arrangements'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Experts with successful project delivery history'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous vetting process ensures top-tier talent'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-violet-200 font-medium">Hire Salesforce Expert</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Hire a Salesforce Expert
              </h1>
              <p className="text-xl text-violet-100 leading-relaxed mb-8">
                Access top-tier Salesforce talent for your projects. Our certified experts are available for short-term projects or long-term engagements.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-violet-900 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Find Your Expert</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Certified Salesforce Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Salesforce Experts Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our pool of certified Salesforce professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Core Skills:</h4>
                  <ul className="space-y-2">
                    {type.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{skill}</span>
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
              Why Hire Our Experts?
            </h2>
            <p className="text-xl text-gray-600">
              Benefits of working with our certified Salesforce professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-violet-600" />
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

export default HireSalesforceExpertPage;