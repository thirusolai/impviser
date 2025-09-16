import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Coffee,
  Laptop,
  Plane,
  GraduationCap
} from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and skill development opportunities'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and unlimited PTO policy'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and certification support'
    },
    {
      icon: Laptop,
      title: 'Equipment & Tools',
      description: 'Top-tier equipment, software licenses, and home office setup allowance'
    },
    {
      icon: Plane,
      title: 'Travel & Events',
      description: 'Team retreats, industry conferences, and client engagement opportunities'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Salesforce Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead complex Salesforce development projects and mentor junior developers.',
      requirements: [
        'Salesforce Platform Developer II certification',
        '5+ years of Apex and Lightning development',
        'Experience with integrations and APIs',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Salesforce Business Analyst',
      department: 'Consulting',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work with clients to gather requirements and design Salesforce solutions.',
      requirements: [
        'Salesforce Administrator certification',
        '3+ years of business analysis experience',
        'Strong communication skills',
        'Experience with Agile methodologies'
      ]
    },
    {
      title: 'Data Engineer',
      department: 'Data & Analytics',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain data pipelines for analytics and reporting solutions.',
      requirements: [
        'Experience with Snowflake or similar platforms',
        'Python and SQL expertise',
        'ETL/ELT pipeline development',
        'Cloud platform experience (AWS/Azure/GCP)'
      ]
    },
    {
      title: 'AI/ML Engineer',
      department: 'Innovation',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop AI and machine learning solutions for client projects.',
      requirements: [
        'Machine learning and AI expertise',
        'Python, TensorFlow, or PyTorch experience',
        'Experience with cloud ML services',
        'Strong mathematical background'
      ]
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      title: 'Client Success',
      description: 'Every team member is empowered to contribute to client success and business outcomes.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through training, certifications, and skill development.'
    },
    {
      title: 'Collaborative Environment',
      description: 'Open communication, knowledge sharing, and teamwork are at the heart of our culture.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Build your career with a team of passionate professionals who are shaping the future of business technology. We're always looking for talented individuals to join our mission.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>50+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Remote-First Culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Top Employer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great work comes from great people in a supportive environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600">
              We take care of our team so they can take care of our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity to make an impact
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mb-4">
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              A transparent, efficient process designed to find the right fit for both sides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Application Review', description: 'We review your application and portfolio within 48 hours' },
              { step: '02', title: 'Initial Interview', description: '30-minute conversation about your background and interests' },
              { step: '03', title: 'Technical Assessment', description: 'Practical exercise relevant to the role and our work' },
              { step: '04', title: 'Final Interview', description: 'Meet the team and discuss how you\'ll contribute to our mission' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't see the perfect role? We're always interested in connecting with talented professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Send Your Resume
            </Link>
            <a 
              href="mailto:careers@winfomi.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;