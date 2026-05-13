'use client';

import Card from './Card';
import SectionTitle from './SectionTitle';
import Button from './Button';

const locations = [
  {
    id: 1,
    name: 'Golf Course Road',
    address: 'Ground Floor, Rapid Metro Station, Sector 53',
    phone: '+91 98111 12254',
    hours: '10 AM – 10 PM (Daily)',
    rating: 4.8,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9876543210!2d77.1234!3d28.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzI0LjIiTiA3N8KwMDcnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890',
  },
  {
    id: 2,
    name: 'M3M 65th Avenue',
    address: 'Shop R7, UG 02, Sector 65',
    phone: '+91 98111 12254',
    hours: '11:00 AM – 09:00 PM (Daily)',
    rating: 4.6,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5432109876!2d77.3456!3d28.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIwJzU0LjMiTiA3N8KwMjAnNDUuNiJF!5e0!3m2!1sen!2sin!4v0987654321',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Visit Us"
          subtitle="Two premium service centers in Gurugram, ready to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="overflow-hidden hover:shadow-red-500/30"
              hover={false}
            >
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-red-500">★ {location.rating}</span>
                <span className="text-gray-400 text-sm">Google Rating</span>
              </div>

              {/* Store Info */}
              <h3 className="text-2xl font-bold text-white mb-4">{location.name}</h3>

              <div className="space-y-3 mb-6 text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">📍</span>
                  <span>{location.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-500">📞</span>
                  <a href={`tel:${location.phone}`} className="hover:text-red-400 transition">
                    {location.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-500">🕒</span>
                  <span>{location.hours}</span>
                </p>
              </div>

              {/* Map Embed */}
              <div className="mb-6 rounded-lg overflow-hidden h-48 bg-gray-800">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* CTA Button */}
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="w-full">
                  Get Directions
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
