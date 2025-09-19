import React from "react";
import { Link } from "react-router-dom";
import { Globe, CheckCircle, ArrowRight, Code, Cpu, Shield, Rocket } from "lucide-react";

const devServices = [
  {
    title: "Custom Website Development",
    description:
      "Tailored websites designed to reflect your brand identity and business goals.",
    features: [
      "Responsive design",
      "Scalable architecture",
      "Custom functionality",
      "CMS integration",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Robust e-commerce platforms to grow your online sales and customer base.",
    features: [
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Product catalog",
      "Order management",
    ],
  },
  {
    title: "Web Application Development",
    description:
      "High-performing web applications to streamline operations and improve user engagement.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "API integration",
      "Cloud-ready apps",
    ],
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Continuous monitoring, updates, and enhancements to keep your website running smoothly.",
    features: [
      "Bug fixing",
      "Performance optimization",
      "Security updates",
      "Content updates",
    ],
  },
];

const benefits = [
  {
    icon: Code,
    title: "Skilled Developers",
    description:
      "A team experienced in modern frameworks like React, Angular, and Node.js.",
  },
  {
    icon: Cpu,
    title: "Cutting-edge Technology",
    description:
      "We leverage the latest tools and technologies to deliver future-ready websites.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Strong focus on website security, data protection, and compliance with standards.",
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    description:
      "Optimized for fast loading speeds and built with SEO best practices for higher visibility.",
  },
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-cyan-200 font-medium">Web Development</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed mb-8">
              Enterprise-grade web development solutions that help your business
              stay ahead in the digital era.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg font-medium">Powerful & Scalable Websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web solutions to establish your digital presence and
              grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Benefits of our enterprise-grade web development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s build a future-ready web solution that scales with your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
