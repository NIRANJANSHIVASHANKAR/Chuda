import React from 'react';
import { Ruler, Factory, Shield, Clock } from 'lucide-react';

function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose We Aspire</h2>
        <p className="text-center text-gray-600 mb-12">
          We deliver excellence in every project with our commitment to quality and innovation
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Ruler className="text-orange-600" size={32} />}
            title="Custom Designs"
            description="Built to suit your lifestyle by our expert Architects & Designers"
          />
          <FeatureCard
            icon={<Factory className="text-orange-600" size={32} />}
            title="Manufacturing Excellence"
            description="3500sqft manufacturing unit with superior imported machinery"
          />
          <FeatureCard
            icon={<Shield className="text-orange-600" size={32} />}
            title="10 Years Warranty"
            description="1 year free maintenance with 10 years warranty"
          />
          <FeatureCard
            icon={<Clock className="text-orange-600" size={32} />}
            title="45 Days Delivery"
            description="Quick and efficient project completion"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default WhyChooseUs;