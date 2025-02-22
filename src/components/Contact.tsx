import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

function Contact() {
  // Convert the DMS (Degrees, Minutes, Seconds) to decimal coordinates
  // 12°59'08.3"N 77°30'23.9"E ≈ 12.985639, 77.506639
  const latitude = 12.9856277;
  const longitude = 77.5066458;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
                Get Free Consultation
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information and Map */}
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Contact Information</h2>
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={<MapPin className="text-orange-600" />} 
                label="Address" 
                text="#168 Sunkadakatte, Chandana Layout , 4th Main , 6th Cross Vishwaneedam Bengaluru , Bengaluru Urban Karnataka -560091" 
              />
              <ContactInfo 
                icon={<Phone className="text-orange-600" />} 
                label="Phone" 
                text="7483101928, 8660190265" 
              />
              <ContactInfo 
                icon={<Mail className="text-orange-600" />} 
                label="Email" 
                text="weaspire.cc@gmail.com " 
              />
            </div>

            {/* Map with the specific coordinates */}
            <div className="mt-8 h-[220px] rounded-lg overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
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
      <div className="mt-1 mr-3">{icon}</div>
      <div>
        <h3 className="font-semibold text-navy-900">{label}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Contact;