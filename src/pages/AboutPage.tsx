import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { FaHandshake, FaShieldAlt, FaLightbulb, FaUsers } from "react-icons/fa";
const AboutPage = () => {
const values = [
    {
      icon: <FaHandshake className="w-10 h-10 text-white" />,
      title: "Customer Success",
      description:
        "Your success defines ours. We are dedicated to understanding your business needs and delivering solutions that create measurable value and long-term impact.",
      color: "from-[#223794] to-[#29ec48]",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-white" />,
      title: "Integrity & Trust",
      description:
        "Trust is the foundation of enduring relationships. Guided by integrity, transparency, and professionalism, we put client goals first and honor every commitment with accountability and excellence.",
      color: "from-[#29ec48] to-[#223794]",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-white" />,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking, leveraging Salesforce and emerging technologies to deliver solutions that inspire progress and keep businesses future-ready.",
      color: "from-[#223794] to-[#29ec48]",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-white" />,
      title: "Collaboration",
      description:
        "We believe success is built together. Through teamwork, open communication, and shared vision, we create strong partnerships that achieve meaningful outcomes.",
      color: "from-[#29ec48] to-[#223794]",
    },
  ];
  const team = [
  {
    name: "Ramesh R",
    role: "Founder & CEO",
    experience: "",
    certifications: [""],
  },
  {
    name: "Vinith L",
    role: "Technical Lead",
    experience: "",
    certifications: [""],
  },
  {
    name: "Gowtham V",
    role: "Module Lead",
    experience: "",
    certifications: [""],
  },
  {
    name: "Chandhru G",
    role: "Solutions Expert",
    experience: "",
    certifications: [""],
  },
  {
    name: "Siva S",
    role: "Delivery & Support Specialist",
    experience: "",
    certifications: [""],
  },
];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Winfomi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technology experts dedicated to helping businesses unlock their full potential through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage. We believe that the right technology, implemented correctly, can transform any organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Expert-led implementations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Measurable business outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Long-term partnership approach</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the most trusted technology consulting partner for businesses seeking digital transformation. We envision a future where every organization can leverage the full power of modern technology to achieve their goals.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Founded in 2018</h3>
                <p className="text-gray-600">
                  Started with a simple belief: technology should serve business goals, not complicate them. Today, we're proud to have helped hundreds of organizations achieve their digital transformation objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        The principles that drive our culture, decisions, and client partnerships.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {values.map((value, index) => (
        <div
          key={index}
          className={`p-[2px] rounded-2xl bg-gradient-to-tr ${value.color} transition-all duration-300 hover:scale-105`}
        >
          <div className="h-full w-full bg-white rounded-2xl p-8 text-center hover:bg-gradient-to-tr hover:from-white hover:to-gray-50 transition">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#223794] to-[#29ec48] shadow">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



           {/* <section className="py-20 bg-gradient-to-br from-[#223794] to-[#29ec48] text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
 
    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Visionaries</h2>
    <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
      Impviser’s are the passionate minds behind our innovation and transformation. 
      With clarity of vision and a commitment to progress, they embrace change and 
      harness technology to deliver meaningful impact. Guided by our core values, 
      they are shaping the future with purpose and excellence.
    </p>

  
    <h3 className="text-2xl font-semibold mb-8">
      Accelerate Your Growth with Future-Ready Salesforce Solutions.
    </h3>

    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 mb-12">
     
      <img 
        src="/images/schedule-demo.png" 
        alt="Schedule Demo" 
        className="w-full md:w-1/2 rounded-xl shadow-md"
      />

    
      <div className="w-full md:w-1/2">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          Schedule a Free Consultation Today
        </h4>
        <div className="w-full h-[600px]">
          <iframe
            src="https://calendly.com/thirusolai1/30min?embed_domain=yourdomain.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1&hide_timezone=1"
            className="w-full h-full rounded-lg border border-gray-200 shadow-sm"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>

    {/* Contact CTA 
    <h3 className="text-2xl font-semibold mb-6">
      Empower your business with Impviser’s expertise. <br />
      Schedule your free consultation today.
    </h3>
    <a
      href="/contact"
      className="bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
    >
      Contact Us
    </a>
  </div>
</section>*/}




      {/* Team */}
    <section className="py-20 bg-gradient-to-br from-[#223794] to-[#29ec48]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        Meet Our Leadership Team
      </h2>
      <p className="text-xl text-gray-100">
        Industry veterans with deep expertise and proven track records
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center shadow-lg hover:scale-105 transition-transform"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-[#29ec48] font-medium mb-3">{member.role}</p>
          <p className="text-gray-200 mb-4">{member.experience}</p>
          <div className="space-y-1">
            {member.certifications.map((cert, certIndex) => (
              <div
                key={certIndex}
                className="text-sm text-gray-100 bg-white/20 px-3 py-1 rounded-full inline-block"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
   <section className="py-20 bg-gradient-to-r from-[#223794] to-[#29ec48]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
      Empower your business with Impviser’s expertise. <br />
      Schedule your free consultation today.
    </h2>

    {/* Optional description */}
    {/* <p className="text-xl text-blue-100 mb-8">
      Let's discuss how we can help transform your business with the right technology solutions.
    </p> */}

    <Link
      to="/contact"
      className="bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
    >
      <span>Schedule Now</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>

    </div>
  );
};

export default AboutPage;