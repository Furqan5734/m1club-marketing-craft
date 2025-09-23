import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/m1-logo.jpg" 
                alt="M~1 Club Logo" 
                className="w-8 h-8 rounded-full logo-glow"
              />
              <span className="text-lg font-bold">M~1 Club</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your premier marketing consultancy, driving results through innovative strategies 
              and exceptional brand experiences.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-primary hover:text-primary-glow cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary hover:text-primary-glow cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-primary hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/services" className="text-sm hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/team" className="text-sm hover:text-primary transition-colors">Our Team</Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">Brand Development</span>
              <span className="text-sm text-muted-foreground">Digital Marketing</span>
              <span className="text-sm text-muted-foreground">Strategic Consulting</span>
              <span className="text-sm text-muted-foreground">Market Research</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">077216048992</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@m1club.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 M~1 Club. All rights reserved. | Director & Founder: Abdul Mohsi Shiekh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;