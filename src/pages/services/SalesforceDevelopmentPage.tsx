import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import fast from "../../assets/icons4/fast.png";
import risk from "../../assets/icons4/risk.png";
import user from "../../assets/icons4/user.png";
import scale from "../../assets/icons4/scale.png";
import wcu from "../../assets/icons4/wcu.png";

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
      <section className="py-20 bg-gradient-to-br from-[#223794] to-[#29ec48] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-200 font-medium">Salesforce Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Salesforce Development Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Custom Salesforce development including Apex, Lightning components, Visualforce, and API development. Build powerful solutions that extend Salesforce capabilities.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Development Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Custom Development Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Salesforce development capabilities to extend platform functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What We Build:</h4>
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
              Development Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our Salesforce development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A proven workflow to deliver high-quality, scalable solutions on time and on budget.
      </p>
    </div>
    <div className="lg:max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
      <p>
        Our development process is designed for clarity, efficiency, and exceptional results. We begin with a comprehensive Discovery & Strategy phase, where our team collaborates closely with you to understand your specific business needs, long-term goals, and technical requirements. This foundational step is crucial for creating a detailed, tailored plan that serves as the blueprint for your entire Salesforce solution. Following discovery, we move into the Solution Design phase. This is where we architect the solution, outlining the specific components, custom objects, and integrations needed to achieve your goals. We prioritize creating an architecture that is not only functional but also scalable and maintainable, ensuring it can grow with your business. Once the design is finalized and approved, our certified developers enter the Build & Test phase. Here, we write clean, secure code, following Salesforce best practices and industry standards. We believe in an iterative approach, conducting rigorous testing at every stage to ensure the solution is robust, performs flawlessly, and is free of bugs. Finally, we handle the seamless Deployment & Support of your new solution. We manage the entire go-live process, from migration to user training, ensuring a smooth transition for your team. Our commitment doesn't end there; we provide comprehensive post-launch support and ongoing maintenance to ensure your Salesforce platform continues to meet your evolving business needs.
      </p>
    </div>
  </div>
</section>



<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Team?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our commitment to quality, security, and client collaboration sets us apart.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Security & Compliance</h3>
              <p className="text-gray-600 text-sm mt-1">
                We build solutions that adhere to Salesforce's strict security model and industry compliance standards.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Certified Experts</h3>
              <p className="text-gray-600 text-sm mt-1">
                Our team holds multiple Salesforce certifications, ensuring deep expertise in the platform.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Scalable Architecture</h3>
              <p className="text-gray-600 text-sm mt-1">
                We design with your future growth in mind, building scalable and maintainable solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative">
        {/* Placeholder for your image. Replace `yourImageVariable` with your imported image, e.g., `sa` */}
        <img src={wcu} alt="Why Choose Us" className="rounded-2xl shadow-lg w-full" />
      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Expertise</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our team has deep expertise across the entire Salesforce ecosystem to build, integrate, and optimize your platform.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Expertise Item 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Migration</h3>
        <p className="text-sm text-gray-600">
          Smoothly migrate from legacy systems or other platforms to Salesforce.
        </p>
      </div>

      {/* Expertise Item 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Services</h3>
        <p className="text-sm text-gray-600">
          Connect Salesforce with your essential business systems and third-party applications.
        </p>
      </div>

      {/* Expertise Item 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
        <p className="text-sm text-gray-600">
          Ongoing support and enhancements to keep your Salesforce org aligned with your evolving needs.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#1798c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Custom Salesforce Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build custom solutions that extend your Salesforce capabilities.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Development</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SalesforceDevelopmentPage;