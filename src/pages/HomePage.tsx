import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Users, Building2, TrendingUp, Award, Zap, Shield, Clock } from 'lucide-react';
import img1 from "../assets/aws-cloud.webp";
import img2 from "../assets/google-cloud.webp";
import img3 from "../assets/hubspot.webp";
import img4 from "../assets/salesforce.webp";
import img5 from "../assets/zoho-crm.webp";
import SalesforceConsulting from "../assets/icons2/SalesforceConsulting.png";
import SalesforceDevelopment from "../assets/icons2/SalesforceDevelopment.png";
import SalesforceIntegration from "../assets/icons2/SalesforceIntegration.png";
import SalesforceMigration from "../assets/icons2/SalesforceMigration.png";
import SalesforceAdminSupport from "../assets/icons2/SalesforceAdminSupport.png";
import SalesforceIssueSupport from "../assets/icons2/SalesforceIssueSupport.png";
import CPQ from "../assets/icons2/CPQ.png";

import AppExchangeAppDev from "../assets/icons2/AppExchangeAppDev.png";
import WebAppDev from "../assets/icons2/WebAppDev.png";
import MobileAppDev from "../assets/icons2/MobileAppDev.png";

import DataAnalytics from "../assets/icons2/analytics.png";
import PowerBI from "../assets/icons2/PowerBI.webp";
import Zoho from "../assets/icons2/Zoho.webp";
import Hubspot from "../assets/icons2/Hubspot.webp";
import Tableau from "../assets/icons2/Tableau.webp";

import datacloud from "../assets/icons3/datacloud.webp";
import hubspot from "../assets/icons3/hubspot.webp";
import powerbi from "../assets/icons3/powerbi.webp";
import SalesforceCRM from "../assets/icons3/SalesforceCRM.webp";
import tableau from "../assets/icons3/tableau.webp";
import zoho from "../assets/icons3/zoho.webp";
import flutter from "../assets/icons3/flutter.webp";
import HTML from "../assets/icons3/HTML.webp";
import js from "../assets/icons3/js.webp";
import nodejs from "../assets/icons3/nodejs.webp";
import react from "../assets/icons3/react.webp";

import { 
  Cpu, 
  Cloud, 
  Code2, 
  Bot, 
  Database, 
  BarChart3,
  Monitor,
  Smartphone,
  Briefcase,
  Scale,
  ShieldCheck,
  Landmark,
  Building,
  HeartPulse,
  Globe,
  GraduationCap,
  Factory,
  ShoppingBag,
  Settings
} from "lucide-react";

import { FaRocket, FaLightbulb, FaMedal } from "react-icons/fa";

import ContactLogo from "../assets/Discovery & Consultation - visual selection (1).png"

import commerce from "../assets/icons/B2B commerce cloud winfomi.webp";
import education from "../assets/icons/Education cloud winfomi.webp";
import experience from "../assets/icons/experience cloud winfomi.webp";
import field from "../assets/icons/Field Service _winfomi.webp";
import financial from "../assets/icons/Financial Service Cloud winfomi.webp";
import health from "../assets/icons/helath cloud winfomi.webp";
import uipath from "../assets/icons/experience cloud winfomi.webp";

{/*
import chatgpt from "../assets/icons/chatgpt.png";
import tensorflow from "../assets/icons/tensorflow.png";
import googlecloud from "../assets/icons/googlecloud.png";
import datacloud from "../assets/icons/datacloud.png";
import crm from "../assets/icons/crm.png";
import powerbi from "../assets/icons/powerbi.png";

*/}

const HomePage = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Enterprise Clients', icon: Building2 },
  ];

  const stat = [
  { value: "200+", label: "Projects Completed" },
  { value: "70+", label: "Happy Clients" },
  { value: "50+", label: "Certified Experts" },
];

const images = [img1, img2, img3, img4,img5];

  const services = [
  {
    category: "Salesforce",
    items: [
      { name: "Salesforce Consulting", icon: <Users className="w-6 h-6 text-green-500" />, link: "/services/salesforce-consulting" },
      { name: "Salesforce Migration", icon: <TrendingUp className="w-6 h-6 text-green-500" />, link: "/services/salesforce-migration" },
      { name: "Salesforce Integration", icon: <Building2 className="w-6 h-6 text-green-500" />, link: "/services/salesforce-integration" },
      { name: "AppExchange App Development", icon: <Cpu className="w-6 h-6 text-green-500" />, link: "/services/appexchange-app" },
      { name: "Salesforce Admin Support", icon: <Shield className="w-6 h-6 text-green-500" />, link: "/services/salesforce-admin" },
      { name: "Salesforce CPQ Implementation", icon: <Award className="w-6 h-6 text-green-500" />, link: "/services/salesforce-cpq" },
      { name: "Salesforce Development", icon: <Code2 className="w-6 h-6 text-green-500" />, link: "/services/salesforce-dev" },
      { name: "Salesforce Issue Support", icon: <Zap className="w-6 h-6 text-green-500" />, link: "/services/salesforce-support" },
      { name: "Data & Analytics Solutions", icon: <BarChart3 className="w-6 h-6 text-green-500" />, link: "/services/data-analytics" },
      { name: "Hire A Salesforce Expert", icon: <Users className="w-6 h-6 text-green-500" />, link: "/services/hire-salesforce-expert" },
      { name: "AI Powered Salesforce Implementation", icon: <Bot className="w-6 h-6 text-green-500" />, link: "/services/ai-powered-salesforce" },
    ],
  },
  {
    category: "CRM",
    items: [
      { name: "Zoho", icon: Zoho, link: "/services/zoho" },
      { name: "HubSpot", icon: Hubspot, link: "/services/hubspot" },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "Data & Analytics Solutions", icon: DataAnalytics, link: "/services/data-analytics" },
      { name: "Power BI", icon: PowerBI, link: "/services/power-bi" },
      { name: "Tableau", icon: Tableau, link: "/services/tableau" },
    ],
  },
  {
    category: "App Development",
    items: [
      { name: "Web App Development", icon: <Monitor className="w-6 h-6 text-green-500" />, link: "/services/web-app" },
      { name: "Mobile App Development", icon: <Smartphone className="w-6 h-6 text-green-500" />, link: "/services/mobile-app" },
    ],
  },
];





const industries = [
  {
    title: "Software & Technology",
    desc: "Accelerate innovation with scalable solutions built for tech-driven growth.",
    icon: <Briefcase className="h-6 w-6 text-white" />,
  },
  {
    title: "Accounting, Finance & Legal",
    desc: "Streamline client onboarding, case management, and compliance tracking.",
    icon: <Scale className="h-6 w-6 text-white" />,
  },
  {
    title: "Insurance",
    desc: "Enhance policy management, claims processing, and customer service.",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "Loan Services",
    desc: "Simplify loan origination, approval workflows, and borrower engagement.",
    icon: <Landmark className="h-6 w-6 text-white" />,
  },
  {
    title: "Real Estate",
    desc: "Manage properties, leads, and client relationships with tailored solutions.",
    icon: <Building className="h-6 w-6 text-white" />,
  },
  {
    title: "Healthcare",
    desc: "Optimize patient journeys and care coordination with HIPAA-compliant setups.",
    icon: <HeartPulse className="h-6 w-6 text-white" />,
  },
  {
    title: "Non-Profit",
    desc: "Maximize donor engagement, fundraising campaigns, and impact reporting.",
    icon: <Globe className="h-6 w-6 text-white" />,
  },
  {
    title: "Education",
    desc: "Drive student success with CRM tools for admissions, alumni, and performance tracking.",
    icon: <GraduationCap className="h-6 w-6 text-white" />,
  },
  {
    title: "Manufacturing",
    desc: "Digitize operations, monitor supply chains, and manage partners more efficiently.",
    icon: <Factory className="h-6 w-6 text-white" />,
  },
  {
    title: "Retail",
    desc: "Deliver personalized experiences and unify sales channels with smart solutions.",
    icon: <ShoppingBag className="h-6 w-6 text-white" />,
  },
];



const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // continuous
    speed: 4000, // lower = faster
    cssEase: "linear", // smooth scrolling
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true, // stop on hover
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };


const features = [
    {
      icon: <FaRocket className="text-[#223794] w-10 h-10" />,
      title: "Pre-Built Accelerators",
      description:
        "Our proprietary accelerators are powered by Salesforce components to boost deployment and reduce costs.",
    },
    {
      icon: <FaLightbulb className="text-[#223794] w-10 h-10" />,
      title: "Deep Industry Experience",
      description:
        "We bring extensive, in-depth knowledge from multiple industries and domains to transform your business processes.",
    },
    {
      icon: <FaMedal className="text-[#223794] w-10 h-10" />,
      title: "People Power",
      description:
        "We have worked with over 300 clients on all aspects of Salesforce consulting from strategy to implementation and integration.",
    },]


  const testimonials = [
    {
      quote: "Winfomi transformed our sales process with their Salesforce expertise. ROI was immediate.",
      author: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      rating: 5
    },
    {
      quote: "Their AI automation solutions saved us 40 hours per week. Incredible results.",
      author: "Michael Chen",
      title: "Operations Director, GrowthCo",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and delivered exactly what we needed on time.",
      author: "Emily Rodriguez",
      title: "CTO, InnovateLabs",
      rating: 5
    },
  ];


  const categories = [
  "All",
  "Salesforce Cloud",
  "CRM",
  "Data & Analytics",
  "App Developement"
];

const technologies = [
  { name: "Commerce Cloud", icon: commerce, category: "Salesforce Cloud" },
  { name: "Education Cloud", icon: education, category: "Salesforce Cloud" },
  { name: "Experience Cloud", icon: experience, category: "Salesforce Cloud" },
  { name: "Field Service Lightning", icon: field, category: "Salesforce Cloud" },
  { name: "Financial Service Cloud", icon: financial, category: "Salesforce Cloud" },
  { name: "Health Cloud", icon: health, category: "Salesforce Cloud" },
  { name: "datacloud", icon: datacloud, category: "Data & Analytics" },
  { name: "SalesforceCRM", icon: SalesforceCRM, category: "Data & Analytics" },
  { name: "powerbi", icon: powerbi, category: "Data & Analytics" },
  { name: "tableau", icon: tableau, category: "Data & Analytics" },
  { name: "Zoho", icon: zoho, category: "CRM" },
  { name: "Hubspot", icon: hubspot, category: "CRM" },
  { name: "flutter", icon: flutter, category: "App Developement" },
  { name: "HTML", icon: HTML, category: "App Developement" },
  { name: "js", icon: js, category: "App Developement" },
  { name: "nodejs", icon: nodejs, category: "App Developement" },
  { name: "react", icon: react, category: "App Developement" },
  
];



const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative bg-white text-[#223794] overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Content */}
      <div className="space-y-8 self-start">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Empower Success
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#223794] to-[#29ec48]">
              with CRM, AI, Cloud, and App Innovation.
            </span>
          </h1>
          <p className="text-xl text-[#223794] leading-relaxed">
            Transform your operations with expert consulting in Salesforce, AI/ML,
            data analytics, and custom development. Drive growth with innovative solutions.
          </p>
        </div>

        {/* Images in Linear Layout */}
        <div className="flex flex-col items-center gap-6">
  {/* First 3 images */}
  <div className="flex justify-center gap-24">
    {images.slice(0, 3).map((src, i) => (
      <motion.img
        key={i}
        src={src}
        alt={`linear-${i}`}
        className="w-24 h-auto object-contain"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </div>

  {/* Remaining images */}
  <div className="flex justify-center gap-24">
    {images.slice(3, 5).map((src, i) => (
      <motion.img
        key={i + 3}
        src={src}
        alt={`linear-${i + 3}`}
        className="w-24 h-auto object-contain"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: (i + 3) * 0.3 }}
      />
    ))}
  </div>
</div>

      </div>

      {/* Right Side Calendly Inline Embed */}
      <div>
<div className="w-[500px] h-[500px] flex flex-col items-center overflow-hidden">
<iframe
  src="https://calendly.com/thirusolai1/30min?embed_domain=yourdomain.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1&hide_timezone=1"
  width="100%"
  height="650"
  frameBorder="0"
  scrolling="no"
  className="rounded-lg shadow-lg overflow-hidden"
></iframe>



 
</div> {/* CTA text below */}
  <p className="mt-4 text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#223794] to-[#29a1ec]">
    🚀 Book your <span className="underline decoration-wavy">FREE</span> consultation today!
  </p>
</div>

    </div>
  </div>
</section>





{/* Stats Section */}

<section className="bg-[#223794] text-white py-20 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
        Trusted Excellence. <br />
        Proven Results. Lasting Impact.
      </h2>
      <p className="text-lg text-gray-100 leading-relaxed">
        Impviser is your trusted Salesforce consulting and implementation partner, 
        dedicated to helping businesses streamline operations, enhance customer 
        engagement, and accelerate digital transformation. Backed by a certified 
        team of Salesforce experts, we specialize in seamless migrations, custom 
        development, AI-powered automation, third-party integrations, and end-to-end 
        managed services. Our mission is to deliver scalable, industry-focused 
        solutions that enable organizations to grow smarter, faster, and stronger.
      </p>
    </motion.div>

    {/* Right Stats */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {stat.map((stat, index) => (
        <motion.div
          key={index}
          className="p-6 bg-[#223794] rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-4xl font-bold text-white">
            {stat.value}
          </h3>
          <p className="text-lg text-gray-100 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      
      

      {/* Services Section */}
   <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#223794] to-[#29ec48] animate-pulse">
 Our Services
</span>

          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across Salesforce, CRM, Data & Analytics, and App Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#223794]"
            >
              <h3 className="text-lg font-semibold mb-5 text-[#223794] animate-pulse">
  {group.category}
</h3>

              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.link}
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#3e4e91] transition-colors duration-300"
                    >
                      <div className="w-9 h-9 flex items-center justify-center">
                        {typeof item.icon === "string" ? (
  <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
) : (
  item.icon
)}

                      </div>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Why Choose Us */}
     <section className="pb-24 px-6 md:px-12 lg:px-20 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#223794] to-[#29ec48] animate-pulse">
  Why Choose Us
</span>

        </h2>
        <p className="text-gray-600 text-lg">
          Here’s what sets us apart from your average consultants.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4   from-[#29ec48] to-[#223794]">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>




<section className="py-16 bg-[#61b9cd]">
  <div className="max-w-6xl mx-auto px-4">
    {/* Title */}
   <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
  Our Growing Technology Stack
</h2>


    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-md border transition ${
            activeCategory === category
              ? "bg-[#1798c1] text-white border-[#1798c1]"
              : "bg-white text-[#223794] border-[#223794] hover:bg-[#1798c1] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Continuous Carousel */}
    <Slider {...settings}>
      {filteredTech.map((tech) => (
        <div key={tech.name} className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-14 w-18 object-contain"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


<section className="py-16 bg-[#f3f8fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#223794] to-[#29ec48] bg-clip-text text-transparent">
          Industry Expertise
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We understand that every industry has unique challenges and goals. That’s why
          we offer tailored solutions designed to meet the specific needs of your
          sector — ensuring faster adoption, smarter automation, and measurable results.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {/* Icon Badge */}
              <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#223794] to-[#29ec48] shadow-md">
                {item.icon}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-[#223794]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Left Side - Image */}
          


        {/* Right Side - Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2 text-[#223794]">
            Welcome Let's get started.
          </h2>
          <p className="text-[#1798c1] mb-6">
            Get in touch to speak to an expert, request an assessment, or demo our Salesforce solutions.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#223794]">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-[#223794] rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1798c1]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#223794]">
                Business Email
              </label>
              <input
                type="email"
                className="w-full border border-[#223794] rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1798c1]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#223794]">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 1234567890"
                className="w-full border border-[#223794] rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1798c1]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#223794]">
                How can we help you?
              </label>
              <textarea
                rows={4}
                className="w-full border border-[#223794] rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1798c1]"
              ></textarea>
            </div>

            {/* Gradient Button */}
            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-lg transition bg-gradient-to-r from-[#223794] via-[#1798c1] to-[#29ec48] hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>



          <div className="flex items-center justify-center">
          <img
            src={ContactLogo}
            alt="Salesforce Process"
            className="w-90  rounded-lg "
          />
        </div>

      </div>
    </section>


{/*


      {/* Testimonials 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA Section
    <section className="py-10 bg-gradient-to-r from-[#223794] to-[#29ec48]">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
      Ready to Transform Your Business?
    </h2>
    <p className="text-l text-white/90 mb-8 leading-relaxed">
      Let's discuss how our expert consulting services can drive growth and efficiency for your organization.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link 
        to="/contact" 
        className="bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <span>Start Your Project</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section> */}

    </div>
  );
};

export default HomePage;