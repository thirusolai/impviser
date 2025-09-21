import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import adop from "../../assets/icons4/adop.png";
import fast from "../../assets/icons4/fast.png";
import revenue from "../../assets/icons4/revenue.png";
import risk from "../../assets/icons4/risk.png";
import hero from "../../assets/icons4/schero.png";
import processImg from "../../assets/icons4/sc1.png";
import sc2 from "../../assets/icons4/sc2.png";
import sc3 from "../../assets/icons4/sc3.png";
import sc4 from "../../assets/icons4/sc4.png";

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
      <section className="py-20 text-white hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                
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

      {/* Overview Section - Redesigned as a single paragraph */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        What is Salesforce Consulting?
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Salesforce consulting is the practice of leveraging expert guidance to unlock the full potential of your Salesforce platform. It's more than just technical implementation; it's a strategic partnership. Our certified consultants work closely with your organization to develop a comprehensive Salesforce roadmap, ensuring every feature is aligned with your specific business goals. We specialize in business process optimization, streamlining complex workflows to improve efficiency and productivity. Our services include change management and user adoption strategies to ensure your team not only uses the new system but embraces it, leading to higher ROI. We also provide best practices implementation and governance setup to maintain a clean, scalable, and secure Salesforce environment, minimizing long-term risks and maximizing your investment.
      </p>
      <div className="flex items-center justify-center space-x-3 text-blue-600 mt-8">
        <Award className="w-6 h-6" />
        <span className="font-semibold">Your Partner for Salesforce Success</span>
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

      {/* Industries We Serve Section - Redesigned to be more elaborate */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Industries We Empower with Salesforce
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our deep industry knowledge allows us to tailor Salesforce solutions that solve your unique challenges and drive growth, no matter your sector.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Financial Services */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Financial Services</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          From wealth management to banking and insurance, we help financial firms enhance customer relationships, automate compliance processes, and improve client onboarding with secure and integrated Salesforce solutions.
        </p>
      </div>
      
      {/* Healthcare */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Clock className="w-8 h-8 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-900">Healthcare</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          We build solutions that streamline patient care, manage clinical data, and improve communication between providers and patients, all while ensuring full HIPAA compliance and data security within Health Cloud.
        </p>
      </div>

      {/* Manufacturing */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Shield className="w-8 h-8 text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-900">Manufacturing</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Optimize your supply chain, enhance partner relationships, and gain a 360-degree view of your customer base. Our solutions improve asset management, field service efficiency, and sales forecasting.
        </p>
      </div>

      {/* Real Estate */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Users className="w-8 h-8 text-orange-600" />
          <h3 className="text-xl font-semibold text-gray-900">Real Estate</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Centralize property and client data, automate follow-ups, and streamline transaction processes. We help real estate firms manage leads, improve agent productivity, and deliver exceptional client experiences.
        </p>
      </div>

      {/* Technology */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <TrendingUp className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Technology</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          From startups to established tech companies, we help manage complex sales cycles, enhance customer support with Service Cloud, and automate processes to scale quickly and efficiently.
        </p>
      </div>
      
      {/* Non-Profit */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Award className="w-8 h-8 text-red-600" />
          <h3 className="text-xl font-semibold text-gray-900">Non-Profit</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          We assist non-profit organizations in managing donor relations, tracking fundraising campaigns, and automating volunteer management, helping them focus on their mission.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Our Consulting Process Section with Image on Right */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proven Consulting Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our approach is a collaborative journey designed to ensure your Salesforce solution is a perfect fit for your business. We start with a Discovery Phase to deeply understand your current workflows, challenges, and goals. From there, we move to Solution Design, where we map out a customized Salesforce architecture and a phased implementation plan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Implementation & Development phase is where our certified team builds your solution with a focus on best practices. Finally, we provide comprehensive Training & Ongoing Support to ensure high user adoption and long-term success.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={processImg} alt="Salesforce Consulting Process" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Service Offerings Section - Redesigned with more content */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Comprehensive Salesforce Service Offerings
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We provide a full spectrum of services to meet all your Salesforce needs, from initial strategy and implementation to ongoing optimization and support.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service 1: Strategic Planning */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <img src={sc2} alt="Support and Maintenance" className="w-16 h-16 mb-6" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Roadmapping & Consulting</h3>
        <p className="text-gray-600 leading-relaxed">
          We don't just implement software; we build a clear, long-term Salesforce strategy tailored to your business objectives. This includes a full discovery of your current processes, a future-state vision, and a phased roadmap for implementation and adoption to ensure a scalable solution.
        </p>
      </div>

      {/* Service 2: Implementation & Customization */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <img src={sc3} alt="Support and Maintenance" className="w-16 h-16 mb-6" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Cycle Implementation & Development</h3>
        <p className="text-gray-600 leading-relaxed">
          From Sales Cloud to Service Cloud and custom app development, our certified developers and administrators handle every aspect of your Salesforce implementation. We focus on building intuitive, powerful, and scalable solutions with a commitment to best practices.
        </p>
      </div>

      {/* Service 3: Optimization & Support */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <img src={sc4} alt="Support and Maintenance" className="w-16 h-16 mb-6" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support & Performance Audits</h3>
        <p className="text-gray-600 leading-relaxed">
          Your Salesforce journey doesn't end at go-live. We offer flexible support packages for ongoing maintenance, user training, and performance audits. We proactively identify areas for improvement and implement enhancements to keep your org running at peak efficiency.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Impviser Section - Icons removed */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Bold, high-level value prop */}
      <div className="text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why We're Your Ideal Salesforce Partner
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are not just consultants; we are strategic partners dedicated to your long-term success. Our approach is built on a foundation of tangible results, ethical practices, and a partnership model that puts your business goals first.
        </p>
      </div>

      {/* Right Column: Detailed reasons without icons */}
      <div className="space-y-8">
        {/* Expertise */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Unmatched Certified Expertise</h3>
          <p className="text-gray-700">
            Our team holds the highest levels of Salesforce certifications, ensuring every solution is built on a foundation of deep, up-to-date platform knowledge and industry best practices.
          </p>
        </div>
        
        {/* Results */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">A Focus on Measurable ROI</h3>
          <p className="text-gray-700">
            We define success by your business outcomes, not just project completion. We use data-driven insights to measure the impact of our work and ensure your Salesforce investment delivers a powerful return.
          </p>
        </div>

        {/* Partnership */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Dedicated Partnership, Not Just a Project</h3>
          <p className="text-gray-700">
            We work as an extension of your team. Our collaborative approach ensures we deeply understand your needs and build a long-term relationship, providing support and guidance long after the initial rollout.
          </p>
        </div>
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