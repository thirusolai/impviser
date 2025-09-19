import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-20 w-auto" 
              />
            </div>
            <p className="leading-relaxed text-gray-600">
              Empowering businesses through innovative technology solutions and expert consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/salesforce-consulting" className="hover:text-[#223794] transition-colors duration-200">Salesforce Consulting</Link></li>
              <li><Link to="/services/salesforce-development" className="hover:text-[#223794] transition-colors duration-200">Salesforce Development</Link></li>
              <li><Link to="/services/data-analytics" className="hover:text-[#223794] transition-colors duration-200">Data & Analytics</Link></li>
              <li><Link to="/services/web-app-development" className="hover:text-[#223794] transition-colors duration-200">Web Development</Link></li>
              <li><Link to="/services" className="text-[#223794] font-medium hover:underline">View All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#223794] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/process" className="hover:text-[#223794] transition-colors duration-200">Our Process</Link></li>
              <li><Link to="/certifications" className="hover:text-[#223794] transition-colors duration-200">Certifications</Link></li>
              <li><Link to="/careers" className="hover:text-[#223794] transition-colors duration-200">Careers</Link></li>
              <li><Link to="/customer-stories" className="hover:text-[#223794] transition-colors duration-200">Customer Stories</Link></li>
            </ul>
          </div>

          {/* Resources (New Column) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-[#223794] transition-colors duration-200">Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#223794] transition-colors duration-200">Case Studies</Link></li>
              <li><Link to="/faq" className="hover:text-[#223794] transition-colors duration-200">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-[#223794] transition-colors duration-200">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Contact</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#223794]" />
                <span className="hover:text-[#223794] transition-all">info@impviser.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#223794]" />
                <span className="hover:text-[#223794] transition-all">+91 9345861817</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-12 h-12 text-[#223794] mt-1" />
                <span className="hover:text-[#223794] transition-all">
                  No-9/3604-17, Third Floor, KN NEST, Lalgudi Road, No 1 Tollgate,<br />
                  Trichy, Tamil Nadu – 621 216
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-[#223794] text-white px-6 py-2 rounded-md font-medium hover:bg-[#223794]/90 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Impviser. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
