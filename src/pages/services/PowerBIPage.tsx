import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  Database,
  PieChart,
  LineChart,
  Layers,
} from "lucide-react";

const devServices = [
  {
    title: "Power BI Dashboard Development",
    description:
      "Custom-built dashboards that deliver actionable insights and empower data-driven decision-making.",
    features: [
      "Interactive dashboards",
      "Custom visualizations",
      "Mobile-ready designs",
      "Role-based access",
    ],
  },
  {
    title: "Data Integration",
    description:
      "Seamlessly connect and transform data from multiple sources into a unified Power BI environment.",
    features: [
      "SQL/NoSQL database integration",
      "Cloud data sources",
      "Excel & CSV import",
      "API connectors",
    ],
  },
  {
    title: "Advanced Analytics",
    description:
      "Unlock deeper insights with AI-powered features and predictive analytics in Power BI.",
    features: [
      "DAX calculations",
      "Machine learning integration",
      "Forecasting & trends",
      "Custom KPIs",
    ],
  },
  {
    title: "Training & Support",
    description:
      "Empowering your team with the skills to leverage Power BI effectively.",
    features: [
      "User training sessions",
      "Documentation & guides",
      "Ongoing support",
      "Performance tuning",
    ],
  },
];

const benefits = [
  {
    icon: Database,
    title: "Unified Data",
    description: "Bring together data from multiple sources into a single, reliable platform.",
  },
  {
    icon: PieChart,
    title: "Actionable Insights",
    description: "Visualize key metrics that empower smarter decision-making.",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    description: "Monitor live data streams and track KPIs in real-time.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Custom Power BI solutions that scale with your business growth.",
  },
];

const PowerBIPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-cyan-200 font-medium">Power BI Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Power BI Development & Consulting
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed mb-8">
              Unlock the power of data with custom Power BI dashboards, analytics,
              and reports tailored to your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg font-medium">Data-Driven Decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Power BI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From integration to analytics, we deliver end-to-end Power BI solutions.
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
                <h4 className="font-semibold text-gray-900 mb-4">Services Include:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
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
              Benefits of our Power BI consulting and development services
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
            Ready to Harness the Power of Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s create a tailored Power BI solution that empowers your decision-making.
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

export default PowerBIPage;
