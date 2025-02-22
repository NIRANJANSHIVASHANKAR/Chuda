// Import all images
import modernLiving from '../assets/luxury_hall.jpg';
import contemporaryKitchen from '../assets/kitchen.png';
import luxuryBedroom from '../assets/bed.jpg';
import elegantBathroom from '../assets/washroom.png';
import modernWardrobe from '../assets/wardrobe.jpg';
import stylishHall from '../assets/hall.png';

const designs = [
  {
    title: 'Modern Living Room',
    image: modernLiving,
    category: 'Living Room'
  },
  {
    title: 'Contemporary Kitchen',
    image: contemporaryKitchen,
    category: 'Kitchen'
  },
  {
    title: 'Luxury Bedroom',
    image: luxuryBedroom,
    category: 'Bedroom'
  },
  {
    title: 'Elegant Bathroom',
    image: elegantBathroom,
    category: 'Bathroom'
  },
  {
    title: 'Modern Wardrobe',
    image: modernWardrobe,
    category: 'Wardrobe'
  },
  {
    title: 'Stylish Hall',
    image: stylishHall,
    category: 'Hall'
  }
];

function Designs() {
  return (
    <section id="designs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Latest Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          Discover our recent work and get inspired
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignCard({ image, title, category }: { image: string; title: string; category: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Designs;