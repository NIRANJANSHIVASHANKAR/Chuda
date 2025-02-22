import React from 'react';
import { Ruler, Wrench, PaintBucket } from 'lucide-react';
import Interior from '../assets/interior_design.jpg'
import Construction from '../assets/construction.png'
import Renovation from '../assets/renovation.png'

const services = [
  {
    title: 'Interior Design',
    description: 'Custom designs that reflect your style and personality',
    icon: <Ruler className="w-12 h-12 text-orange-600" />,
    image: Interior
  },
  {
    title: 'Construction',
    description: 'Expert construction services with premium materials',
    icon: <Wrench className="w-12 h-12 text-orange-600" />,
    image: Construction
  },
  {
    title: 'Renovation',
    description: 'Transform your existing space into something extraordinary',
    icon: <PaintBucket className="w-12 h-12 text-orange-600" />,
    image: Renovation
  }
];

function Services() {
  return (
    <section id="services" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-300 mb-12">
          Comprehensive solutions for your space
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon, image }: { title: string; description: string; icon: React.ReactNode; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
      />
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}

export default Services;