import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  Factory, 
  Home, 
  Laptop, 
  HandHeart, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      name: 'Financial Services',
      icon: Building2,
      description: 'Streamline operations, enhance customer experience, and ensure compliance in the financial sector.',
      challenges: ['Regulatory compliance', 'Customer onboarding', 'Risk management', 'Digital transformation'],
      solutions: ['Salesforce Financial Services Cloud', 'Automated compliance workflows', 'Customer 360 view', 'AI-powered insights'],
      caseStudy: 'Helped a regional bank reduce loan processing time by 60% and improve customer satisfaction scores by 40%.'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Improve patient outcomes and operational efficiency with healthcare-focused technology solutions.',
      challenges: ['Patient data management', 'Care coordination', 'Regulatory compliance', 'Provider communication'],
      solutions: ['Salesforce Health Cloud', 'Patient engagement platforms', 'Care management workflows', 'HIPAA-compliant systems'],
      caseStudy: 'Implemented patient management system for a healthcare network, improving care coordination by 45%.'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Optimize supply chain, enhance customer relationships, and drive operational excellence.',
      challenges: ['Supply chain visibility', 'Customer service', 'Partner management', 'Quality control'],
      solutions: ['Salesforce Manufacturing Cloud', 'Supply chain automation', 'Partner portals', 'Quality management systems'],
      caseStudy: 'Reduced order processing time by 50% for a global manufacturing company through process automation.'
    },
    {
      name: 'Real Estate',
      icon: Home,
      description: 'Transform property management and client relationships with specialized CRM solutions.',
      challenges: ['Lead management', 'Property tracking', 'Client communication', 'Transaction management'],
      solutions: ['Custom CRM solutions', 'Property management systems', 'Automated marketing', 'Mobile applications'],
      caseStudy: 'Increased lead conversion by 35% for a real estate agency through automated nurturing campaigns.'
    },
    {
      name: 'Technology',
      icon: Laptop,
      description: 'Scale your tech business with robust systems for customer success and growth.',
      challenges: ['Customer onboarding', 'Support scalability', 'Product adoption', 'Revenue operations'],
      solutions: ['Customer success platforms', 'Support automation', 'Product analytics', 'Revenue intelligence'],
      caseStudy: 'Improved customer retention by 25% for a SaaS company through enhanced customer success processes.'
    },
    {
      name: 'Non-Profit',
      icon: HandHeart,
      description: 'Amplify your mission with donor management and program tracking solutions.',
      challenges: ['Donor management', 'Program tracking', 'Volunteer coordination', 'Impact measurement'],
      solutions: ['Salesforce Nonprofit Cloud', 'Donor management systems', 'Volunteer portals', 'Impact dashboards'],
      caseStudy: 'Increased donation efficiency by 40% for a national non-profit through automated donor engagement.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Deep industry knowledge combined with technical expertise to deliver solutions that address your sector's unique challenges and opportunities.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{industry.name}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {industry.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-gray-600 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Story</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {industry.caseStudy}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Improved Efficiency</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600">Better Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cross-Industry Impact
            </h2>
            <p className="text-xl text-gray-600">
              Delivering measurable results across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our industry expertise can drive success for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link 
              to="/customer-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;