import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Target, 
  Cog, 
  Headphones, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText,
  Zap
} from 'lucide-react';

const ProcessPage = () => {
  const phases = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      icon: Search,
      duration: '1-2 weeks',
      description: 'We start by understanding your business, current systems, pain points, and objectives.',
      activities: [
        'Stakeholder interviews and workshops',
        'Current state assessment',
        'Requirements gathering',
        'Gap analysis',
        'Success criteria definition'
      ],
      deliverables: [
        'Discovery report',
        'Requirements document',
        'Gap analysis',
        'Project charter'
      ]
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      icon: Target,
      duration: '1-3 weeks',
      description: 'Develop a comprehensive strategy and detailed implementation plan tailored to your needs.',
      activities: [
        'Solution architecture design',
        'Implementation roadmap creation',
        'Resource planning',
        'Risk assessment',
        'Timeline development'
      ],
      deliverables: [
        'Solution architecture',
        'Implementation plan',
        'Project timeline',
        'Resource allocation plan'
      ]
    },
    {
      number: '03',
      title: 'Implementation & Development',
      icon: Cog,
      duration: '4-12 weeks',
      description: 'Execute the plan with regular check-ins, testing, and iterative improvements.',
      activities: [
        'System configuration',
        'Custom development',
        'Data migration',
        'Integration setup',
        'Testing and validation'
      ],
      deliverables: [
        'Configured system',
        'Custom components',
        'Migrated data',
        'Integration endpoints',
        'Test results'
      ]
    },
    {
      number: '04',
      title: 'Support & Optimization',
      icon: Headphones,
      duration: 'Ongoing',
      description: 'Provide ongoing support, training, and continuous optimization for long-term success.',
      activities: [
        'User training and adoption',
        'Performance monitoring',
        'Continuous optimization',
        'Issue resolution',
        'Feature enhancements'
      ],
      deliverables: [
        'Training materials',
        'Support documentation',
        'Performance reports',
        'Optimization recommendations'
      ]
    }
  ];

  const methodologies = [
    {
      title: 'Agile Approach',
      icon: Zap,
      description: 'Iterative development with regular feedback loops and adaptability to changing requirements.'
    },
    {
      title: 'User-Centered Design',
      icon: Users,
      description: 'Focus on user experience and adoption to ensure solutions that people actually want to use.'
    },
    {
      title: 'Quality Assurance',
      icon: CheckCircle,
      description: 'Rigorous testing and validation at every stage to ensure reliable, high-quality deliverables.'
    },
    {
      title: 'Documentation',
      icon: FileText,
      description: 'Comprehensive documentation and knowledge transfer to empower your team.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A time-tested methodology that ensures successful project delivery, on-time completion, and measurable business results.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Faster Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Collaborative</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {phase.number}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{phase.title}</h2>
                      <div className="flex items-center space-x-2 text-blue-600 mt-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Activities</h3>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Deliverables</h3>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start space-x-2">
                            <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <phase.icon className="w-12 h-12 text-blue-600" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase {phase.number}</h3>
                      <p className="text-gray-600">{phase.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approaches that ensure project success and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <methodology.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{methodology.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-gray-600">
              From initial consultation to go-live and beyond
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {[
                { week: 'Week 1-2', phase: 'Discovery', color: 'bg-blue-600' },
                { week: 'Week 3-5', phase: 'Strategy & Planning', color: 'bg-green-600' },
                { week: 'Week 6-17', phase: 'Implementation', color: 'bg-purple-600' },
                { week: 'Ongoing', phase: 'Support & Optimization', color: 'bg-orange-600' },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className={`w-4 h-4 ${item.color} rounded-full mb-3 ${index % 2 === 0 ? 'ml-auto' : ''}`}></div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.phase}</h3>
                      <p className="text-blue-600 font-medium">{item.week}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and create a customized implementation plan.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Begin Discovery Phase</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;