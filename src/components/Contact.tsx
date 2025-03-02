import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

function Contact() {
  // Convert the DMS (Degrees, Minutes, Seconds) to decimal coordinates
  // 12°59'08.3"N 77°30'23.9"E ≈ 12.985639, 77.506639
  const latitude = 12.9856277;
  const longitude = 77.5066458;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Centered heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900">Contact Information</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="px-4">
            <div className="space-y-8">
              <ContactInfo 
                icon={<MapPin className="text-orange-600" size={24} />} 
                label="Address" 
                text="#168 Sunkadakatte, Chandana Layout , 4th Main , 6th Cross Vishwaneedam Bengaluru , Bengaluru Urban Karnataka -560091" 
              />
              <ContactInfo 
                icon={<Phone className="text-orange-600" size={24} />} 
                label="Phone" 
                text="7483101928, 8660190265" 
              />
              <ContactInfo 
                icon={<Mail className="text-orange-600" size={24} />} 
                label="Email" 
                text="weaspire.cc@gmail.com" 
              />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="px-4">
            {/* Map with the specific coordinates */}
            <div className="h-[350px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-navy-900 text-lg mb-2">{label}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Contact;