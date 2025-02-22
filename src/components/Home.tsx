import bgImage from '../assets/home-bg.png';

function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('designs');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`, // Replace with your image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Transform Your Space with Expert Design & Construction
          </h1>
          <p className="text-xl mb-8">
            Custom luxury interiors and construction solutions for modern living
          </p>
          <button
            onClick={scrollToProjects}
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors duration-300"
          >
            Explore Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;