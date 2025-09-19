import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, Globe, ArrowRight, CheckCircle } from "lucide-react";
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
    { name: "Ramesh R", role: "Founder & CEO", experience: "15+ Years", certifications: ["Salesforce Certified"] },
    { name: "Vinith L", role: "Technical Lead", experience: "10+ Years", certifications: ["Azure Certified"] },
    { name: "Gowtham V", role: "Module Lead", experience: "8+ Years", certifications: ["AWS Certified"] },
    { name: "Chandhru G", role: "Solutions Expert", experience: "7+ Years", certifications: ["Google Cloud Certified"] },
    { name: "Siva S", role: "Delivery & Support Specialist", experience: "6+ Years", certifications: ["ITIL Certified"] },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-[#223794] to-[#29ec48] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide">About Winfomi</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
           Implement Vision. Empower Business.
          </p>
        </div>
      </section>

{/* About Us Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Image / Illustration */}
    <div>
      <img
        src="/images/about-impviser.jpg" // 👉 replace with your own image path
        alt="Impviser Team"
        className="rounded-2xl shadow-lg"
      />
    </div>

    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        About Us – 
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Impviser is a trusted Salesforce consulting partner, dedicated to helping
        businesses unlock the full potential of the Salesforce ecosystem. With
        proven expertise and a team of certified professionals, we deliver
        innovative, customer-focused solutions that create measurable business value.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        We combine technical excellence with business insight to ensure every
        solution fits your goals. Whether it’s implementation, integration,
        customization, or optimization, we partner with you throughout your
        Salesforce journey to drive measurable growth.
      </p>
  
    </div>
  </div>
</section>


{/* Mission & Vision */}
<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-green-50">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Mission */}
    <div className="p-10 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-2xl transition">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#223794] to-[#29ec48] shadow-md">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Empowering businesses to achieve success by delivering innovative Salesforce solutions, exceptional services, and seamless experiences.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        We are committed to building a skilled, passionate team, fostering a culture of collaboration, and creating lasting value for our customers, employees, and communities.
      </p>
    </div>

    {/* Vision */}
    <div className="p-10 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-2xl transition">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#29ec48] to-[#223794] shadow-md">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        To be the most trusted global Salesforce partner, driving innovation and transformation through technology, and enabling organizations worldwide to unlock their full potential.
      </p>
     
    </div>
  </div>
</section>


      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 mb-16">
            The principles that drive our culture, decisions, and client partnerships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-[2px] rounded-2xl bg-gradient-to-tr ${value.color} hover:scale-105 transition-transform`}
              >
                <div className="h-full bg-white rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#223794] to-[#29ec48] shadow-lg">
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

      {/* Team */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#29ec48] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-100 mb-16">
            Industry veterans with deep expertise and proven track records
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-md hover:scale-105 transition-transform">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-[#223794] to-[#29ec48] flex items-center justify-center shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#29ec48] font-medium mb-2">{member.role}</p>
                <p className="text-gray-200 text-sm mb-4">{member.experience}</p>
                {member.certifications.map((cert, i) => (
                  <span key={i} className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block text-gray-100">
                    {cert}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#29ec48]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">
            Empower your business with Winfomi’s expertise. <br /> Schedule your free consultation today.
          </h2>
          <Link
            to="/contact"
            className="bg-white text-[#223794] px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 inline-flex items-center gap-2 transition"
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
