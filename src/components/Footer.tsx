import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logobg from '../assets/logobg.jpg';

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center">
                <img src={logobg} alt="We Aspire Logo" className="h-12 mr-3" />
                <div>
                  <h2 className="text-xl font-bold">WE ASPIRE</h2>
                  <h6 className="text-sm text-gray-400">INTERIORS AND CONSTRUCTIONS</h6>
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              Transform your space with our expert design and construction services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink onClick={() => scrollToSection('home')} text="Home" />
              <FooterLink onClick={() => scrollToSection('about')} text="About Us" />
              <FooterLink onClick={() => scrollToSection('designs')} text="Portfolio" />
              <FooterLink onClick={() => scrollToSection('contact')} text="Contact" />
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Construction</li>
              <li className="text-gray-400">Renovation</li>
              <li className="text-gray-400">Consultation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 We Aspire Interiors and Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-gray-400 hover:text-white transition"
      >
        {text}
      </button>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition"
    >
      {icon}
    </a>
  );
}

export default Footer;