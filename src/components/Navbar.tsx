import logo from '../assets/logo.png';

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo container with increased size */}
          <div className="flex items-center">
            <img src={logo} alt="We Aspire Logo" className="h-16 w-auto" /> {/* Increased height */}
          </div>

          {/* Navigation links with adjusted spacing */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-12"> {/* Increased space between nav items */}
              <NavItem onClick={() => scrollToSection('home')} text="Home" />
              <NavItem onClick={() => scrollToSection('about')} text="About" />
              <NavItem onClick={() => scrollToSection('designs')} text="Design" />
              <NavItem onClick={() => scrollToSection('services')} text="Service" />
            </div>
            
            {/* Consultation button with more padding */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-16 bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors duration-300">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Separate NavItem component for better organization
function NavItem({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-base font-medium"
    >
      {text}
    </button>
  );
}

export default Navbar;