import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import fast from "../../assets/icons4/fast.png";
import risk from "../../assets/icons4/risk.png";
import user from "../../assets/icons4/user.png";
import scale from "../../assets/icons4/scale.png";
import wcu from "../../assets/icons4/wcu.png";
import per from "../../assets/icons4/performance.png";
import di from "../../assets/icons4/datint.png";
import mig from "../../assets/icons4/mig.png";
import HeroSection from "../../components/HeroSection";
import dih from "../../assets/icons4/dih.png";
import sw from "../../assets/icons5/software.png";
import cd from "../../assets/icons5/cloud.png";
import ma from "../../assets/icons5/mobapp.png";
import wd from "../../assets/icons5/wd.png";

const SalesforceDevelopmentPage = () => {
  const developmentServices = [
    {
      title: 'Apex Development',
      description: 'Custom server-side business logic and complex data processing',
      features: ['Trigger development', 'Batch processing', 'Web services', 'Complex business logic']
    },
    {
      title: 'Lightning Development',
      description: 'Modern user interfaces with Lightning Web Components',
      features: ['Custom components', 'Lightning pages', 'Mobile-responsive design', 'Interactive dashboards']
    },
    {
      title: 'Visualforce Development',
      description: 'Custom pages and user interfaces for specific requirements',
      features: ['Custom pages', 'PDF generation', 'Email templates', 'Mobile interfaces']
    },
    {
      title: 'API Development',
      description: 'Custom APIs and web services for system integration',
      features: ['REST APIs', 'SOAP services', 'Webhook handlers', 'Real-time integration']
    }
  ];

  const benefits = [
    {
      icon: fast,
      title: 'Enhanced Performance',
      description: 'Optimized code that runs efficiently at enterprise scale'
    },
    {
      icon: risk,
      title: 'Security First',
      description: 'Built with Salesforce security best practices and guidelines'
    },
    {
      icon: user,
      title: 'User Experience',
      description: 'Intuitive interfaces that drive user adoption and productivity'
    },
    {
      icon: scale,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={dih}
        title="Salesforce Development Services"
        subtitle="Custom Salesforce development including Apex, Lightning components, Visualforce, and API development. Build powerful solutions that extend Salesforce capabilities."
        buttonText="Start Development Project"
        buttonLink="/contact"
      />

     {/* ==========================
  1️⃣ Development Services (White)
========================== */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Development Services</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We deliver high-quality development services to transform your ideas into reality.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: wd, title: "Web Development", desc: "Modern, responsive websites tailored to your business." },
        { icon: ma, title: "Mobile Apps", desc: "Native & cross-platform apps for iOS and Android." },
        { icon: cd, title: "Cloud Solutions", desc: "Secure cloud architecture and deployment." },
        { icon: sw, title: "Custom Software", desc: "Tailored software solutions to scale your business." }
      ].map((service, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ==========================
  2️⃣ Our Development Process (Gray Timeline)
========================== */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A clear, proven workflow to deliver high-quality, scalable solutions.
      </p>
    </div>
    <div className="relative border-l border-gray-300 max-w-3xl mx-auto">
      {[
        { title: "Discovery & Strategy", desc: "We align on goals, business needs, and technical requirements." },
        { title: "Solution Design", desc: "We design a scalable architecture and outline integrations." },
        { title: "Build & Test", desc: "Our certified devs build iteratively with rigorous testing." },
        { title: "Deployment & Support", desc: "Smooth go-live plus long-term support for evolving needs." }
      ].map((step, i) => (
        <div key={i} className="mb-10 ml-6">
          <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
            {i + 1}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



{/* ==========================
  4️⃣ Why Choose Our Team? (White with Pattern)
========================== */}
<section className="py-20 bg-white bg-[url('/grid-pattern.svg')] bg-top bg-no-repeat">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Team?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Our commitment to quality, security, and collaboration sets us apart.
      </p>
      <ul className="space-y-6 text-gray-600">
        <li>✅ Experienced, certified developers</li>
        <li>✅ Transparent processes & communication</li>
        <li>✅ Solutions designed for scalability</li>
        <li>✅ Post-launch support & maintenance</li>
      </ul>
    </div>
    <div>
      <img src={wcu} alt="Why Choose Us" className="rounded-2xl shadow-lg w-full" />

    </div>
  </div>
</section>

{/* Benefits */} <section className="py-20 bg-gray-100"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"> Development Benefits </h2> <p className="text-xl text-gray-600"> Why choose our Salesforce development services </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit, index) => ( <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"> <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4"> <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3> <p className="text-gray-600 text-sm">{benefit.description}</p> </div> ))} </div> </div> </section>

{/* ==========================
  5️⃣ Our Development Expertise (Gray Vertical Features)
========================== */}
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Expertise</h2>
      <p className="text-xl text-gray-600">
        Deep expertise across the Salesforce ecosystem to deliver solutions that scale.
      </p>
    </div>
    <div className="space-y-10">
      {[
        { icon: mig, title: "Platform Migration", desc: "Smooth transition from legacy systems to Salesforce." },
        { icon: di, title: "Integration Services", desc: "Seamlessly connect Salesforce with business systems." },
        { icon: per, title: "Continuous Improvement", desc: "Enhancements and support to stay ahead of change." }
      ].map((item, i) => (
        <div key={i} className="flex items-start space-x-6">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      
    </div>
  );
};

export default SalesforceDevelopmentPage;