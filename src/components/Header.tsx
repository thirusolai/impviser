import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo.png";
import { 
  Building2, RefreshCw, LinkIcon, Store, Users, Target, Code, Headphones, 
  BarChart3, Brain, Settings, Globe, Smartphone 
} from 'lucide-react';
// TypeScript declaration for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const location = useLocation();

  // Load Calendly script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const serviceCategories = [
  {
    title: 'Salesforce Services',
    services: [
      { name: 'Salesforce Consulting', link: '/services/salesforce-consulting', icon: Building2 },
      { name: 'Salesforce Migration', link: '/services/salesforce-migration', icon: RefreshCw },
      { name: 'Salesforce Integration', link: '/services/salesforce-integration', icon: LinkIcon },
      { name: 'AppExchange App Development', link: '/services/appexchange-development', icon: Store },
      { name: 'Salesforce Admin Support', link: '/services/salesforce-admin-support', icon: Users },
      { name: 'Salesforce CPQ Implementation', link: '/services/salesforce-cpq-implementation', icon: Target },
      { name: 'Salesforce Development', link: '/services/salesforce-development', icon: Code },
      { name: 'Salesforce Issue Support', link: '/services/salesforce-issue-support', icon: Headphones },
      { name: 'Data & Analytics Solutions', link: '/services/data-analytics', icon: BarChart3 },
      { name: 'Hire a Salesforce Expert', link: '/services/hire-salesforce-expert', icon: Users },
      { name: 'AI-Powered Salesforce Implementation', link: '/services/ai-powered-salesforce', icon: Brain },
    ]
  },
];

  const services = [
    { name: "Salesforce Services", path: "", isHeader: true },
    { name: "Salesforce Consulting", path: "/services/salesforce-consulting" },
    { name: "Salesforce Migration", path: "/services/salesforce-migration" },
    { name: "Salesforce Integration", path: "/services/salesforce-integration" },
    { name: "AppExchange App Development", path: "/services/appexchange-development" },
    { name: "Salesforce Admin Support", path: "/services/salesforce-admin-support" },
    { name: "Salesforce CPQ Implementation", path: "/services/salesforce-cpq" },
    { name: "Salesforce Development", path: "/services/salesforce-development" },
    { name: "Salesforce Issue Support", path: "/services/salesforce-issue-support" },
    { name: "Data & Analytics Solutions", path: "/services/data-analytics" },
    { name: "Hire a Salesforce Expert", path: "/services/hire-salesforce-expert" },
    { name: "AI-Powered Salesforce Implementation", path: "/services/ai-powered-salesforce" },
    { name: "Other CRM Services", path: "", isHeader: true },
    { name: "Zoho", path: "/services/zoho" },
    { name: "HubSpot", path: "/services/hubspot" },
    { name: "App Development", path: "", isHeader: true },
    { name: "Web App Development", path: "/services/web-app-development" },
    { name: "Mobile App Development", path: "/services/mobile-app-development" },
  ];

  // Open Calendly popup safely
  const handleBookNow = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/thirusolai1/30min",
      });
    } else {
      console.warn("Calendly not loaded yet, will open when ready.");
      const interval = setInterval(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/thirusolai1/30min",
          });
          clearInterval(interval);
        }
      }, 500);
    }
  };

  const allServices = serviceCategories.flatMap(category => category.services);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-[#223794] shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Impviser Logo"
              className={`h-24 w-auto transition-all duration-300 ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-6">
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ].map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className={`relative font-medium transition-transform duration-200 hover:scale-105
        ${
          location.pathname === link.path
            ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
            : ""
        }
        ${isScrolled ? "text-gray-700" : "text-white"}`}
    >
      {link.name}
    </Link>
  ))}

  {/* Services Dropdown (moved here after About) */}
    {/* Services Mega Dropdown */}
  <div className="relative">
    <button
      onMouseEnter={() => setIsServicesOpen(true)}
      onMouseLeave={() => setIsServicesOpen(false)}
      className={`relative flex items-center space-x-1 font-medium transition-transform duration-200 hover:scale-105
        ${
          location.pathname.startsWith("/services")
            ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
            : ""
        }
        ${isScrolled ? "text-gray-700" : "text-white"}`}
    >
      <span>Services</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          isServicesOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {isServicesOpen && (
      <div
        className="absolute top-full left-0 -ml-60 mt-2 w-[900px] bg-white rounded-xl shadow-xl border border-gray-100 py-6 px-8 z-50"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-[#1798c1] font-semibold mb-3">Salesforce</h4>
             <ul className="space-y-2 text-gray-700">
      {allServices.map((service) => (
        <li key={service.name}>
          <Link to={service.link} className="hover:text-[#1798c1] flex items-center gap-2">
            <service.icon size={18} /> {service.name}
          </Link>
        </li>
      ))}
    </ul>

          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#1798c1] font-semibold mb-3">CRM</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/services/zoho" className="hover:text-[#1798c1]">Zoho</Link></li>
              <li><Link to="/services/hubspot" className="hover:text-[#1798c1]">HubSpot</Link></li>
            </ul>
            <h4 className="text-[#1798c1] font-semibold mb-3">Data & Analytics</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/services/data-analytics" className="hover:text-[#1798c1]">Data & Analytics Solutions</Link></li>
              <li><Link to="/services/power-bi" className="hover:text-[#1798c1]">Power BI</Link></li>
              <li><Link to="/services/tableau" className="hover:text-[#1798c1]">Tableau</Link></li>
            </ul>
           
          </div>

          {/* Column 3 */}
          <div>
            

            <h4 className="text-[#1798c1] font-semibold mt-6 mb-3">App Development</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/services/web-app-development" className="hover:text-[#1798c1]">Web App Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-[#1798c1]">Mobile App Development</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </div>
  


  {/* Rest of the links */}
  {[
    { name: "Industries", path: "/industries" },
    { name: "Process", path: "/process" },
    { name: "Insights", path: "/insights" },
    { name: "Contact Us", path: "/contact" },
  ].map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className={`relative font-medium transition-transform duration-200 hover:scale-105
        ${
          location.pathname === link.path
            ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
            : ""
        }
        ${isScrolled ? "text-gray-700" : "text-white"}`}
    >
      {link.name}
    </Link>
  ))}

  {/* Book Now Button */}
  <button
    onClick={handleBookNow}
    aria-label="Book a meeting with us"
    className={`px-6 py-2 rounded-lg font-medium transition-transform duration-200 hover:scale-105
      ${
        isScrolled
          ? "bg-[#152157] text-white hover:bg-[#0d163e]"
          : "bg-white text-[#223794] hover:bg-[#0d163e] hover:text-white"
      }`}
  >
    Book Now
  </button>
</nav>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                Home
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                About
              </Link>
              <Link to="/services" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                Services
              </Link>
              <Link to="/industries" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                Industries
              </Link>
              <Link to="/process" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                Process
              </Link>
              <Link to="/insights" className="block text-gray-700 hover:text-[#1798c1] font-medium">
                Insights
              </Link>
              <Link
                to="/contact"
                className="block bg-[#1798c1] text-white px-4 py-2 rounded-lg font-medium text-center"
              >
                Contact Us
              </Link>

              {/* Mobile Book Now */}
              <button
                onClick={() => {
                  handleBookNow();
                  setIsMenuOpen(false); // Close mobile menu
                }}
                aria-label="Book a meeting with us"
                className="block bg-[#223794] text-white px-4 py-2 rounded-lg font-medium text-center w-full hover:bg-[#121a3e] transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
