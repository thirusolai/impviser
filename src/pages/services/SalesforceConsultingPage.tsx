import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import adop from "../../assets/icons4/adop.png";
import fast from "../../assets/icons4/fast.png";
import revenue from "../../assets/icons4/revenue.png";
import risk from "../../assets/icons4/risk.png";
import hero from "../../assets/icons4/schero.png";
import processImg from "../../assets/icons4/sc1.jpg";

const SalesforceConsultingPage = () => {
  const features = [
    'Strategic Salesforce roadmap development',
    'Business process optimization',
    'Change management and user adoption',
    'ROI analysis and performance metrics',
    'Best practices implementation',
    'Governance and compliance setup'
  ];

  const benefits = [
    {
      icon: revenue,
      title: 'Increased Revenue',
      description: 'Average 25% increase in sales productivity within 6 months'
    },
    {
      icon: fast,
      title: 'Faster Implementation',
      description: 'Reduce implementation time by 40% with our proven methodologies'
    },
    {
      icon: adop,
      title: 'Higher Adoption',
      description: '95% user adoption rate through our change management approach'
    },
    {
      icon: risk,
      title: 'Risk Mitigation',
      description: 'Minimize project risks with experienced guidance and oversight'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Real Estate',
    'Technology',
    'Non-Profit'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#223794] to-[#29ec48] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-200 font-medium">Salesforce Consulting</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Strategic Salesforce Consulting Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Maximize your Salesforce investment with expert strategic guidance, implementation planning, and optimization services from certified Salesforce consultants.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Get Expert Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <img 
                  src={hero} 
                  alt="Salesforce Success Partner" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Salesforce Consulting?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Salesforce consulting involves strategic planning, implementation guidance, and optimization services to help organizations maximize their Salesforce investment. Our certified consultants work with you to align Salesforce capabilities with your business objectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're planning your first Salesforce implementation or looking to optimize an existing org, our consultants provide the expertise and guidance needed for success.
              </p>
              <div className="flex items-center space-x-3 text-blue-600">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Salesforce Certified Consultants</span>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Consulting Areas</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Expert Salesforce Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic approach delivers measurable business value and long-term success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our Salesforce consulting expertise spans across multiple industries, with deep understanding of sector-specific challenges and requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Case Study Highlight</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Challenge:</strong> A mid-size financial services firm needed to streamline their lead-to-close process and improve sales visibility.
                </p>
                <p className="text-gray-700">
                  <strong>Solution:</strong> Implemented Sales Cloud with custom workflows, opportunity management, and executive dashboards.
                </p>
                <p className="text-gray-700">
                  <strong>Results:</strong> 35% increase in sales productivity and 50% reduction in sales cycle time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Side */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Methodical Salesforce Consulting Process
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Step 1 - Understanding Your Business
            </h3>
            <p className="text-gray-600">
              Our process commences with a comprehensive evaluation of your current 
              processes and implementations to gain a deep understanding of your 
              organization's operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Step 2 - Roadmap for Success
            </h3>
            <p className="text-gray-600">
              Our team of experienced consultants creates a meticulous blueprint for new 
              Salesforce implementations, focusing on customer-centric strategies that 
              unlock the full potential of your Salesforce investment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Step 3 - Project Kick-Off
            </h3>
            <p className="text-gray-600">
              We facilitate the acquisition of necessary Salesforce licenses and establish 
              connections with Salesforce's account executives. Additionally, our dedicated 
              team provides comprehensive assistance in implementing and customizing the 
              Salesforce platform according to the devised solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div>
        <img 
          src={processImg} 
          alt="Salesforce Consulting Process" 
          className="w-full h-full object-cover rounded-2xl shadow-md"
        />
      </div>

    </div>
  </div>
</section>


      {/* Why Choose Impviser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Impviser for Salesforce Consulting?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Expertise</h3>
              <p className="text-gray-600">Our team holds advanced Salesforce certifications and stays current with platform updates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations with measurable business impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">Ongoing partnership with dedicated account management and support.</p>
            </div>
          </div>
        </div>
      </section>
            {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a Salesforce implementation take?
              </h3>
              <p className="text-gray-600">
                Timelines vary by project scope, but most implementations take between 8–12 weeks 
                from discovery to go-live.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide ongoing support after implementation?
              </h3>
              <p className="text-gray-600">
                Yes. We offer continuous support, user training, and optimization services to ensure 
                long-term success with Salesforce.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can you help us migrate data from our existing system?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our team specializes in secure data migration, ensuring accuracy and 
                minimal downtime during the transition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Which industries do you serve?
              </h3>
              <p className="text-gray-600">
                We work across multiple industries including finance, healthcare, real estate, 
                manufacturing, technology, and non-profit sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Salesforce Investment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your Salesforce strategy and implementation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/customer-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceConsultingPage;