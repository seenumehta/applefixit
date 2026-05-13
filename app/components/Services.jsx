'use client';

import Card from './Card';
import SectionTitle from './SectionTitle';

const services = [
  {
    id: 1,
    name: 'Screen Replacement',
    description: 'Cracked or broken? We fix it with genuine parts and expert care.',
    icon: '📱',
  },
  {
    id: 2,
    name: 'Battery Replacement',
    description: 'Does your battery drain fast? Get a fresh battery installed today.',
    icon: '🔋',
  },
  {
    id: 3,
    name: 'Back Cover Repair',
    description: 'Damaged back panel? We can replace it with original parts.',
    icon: '🛡️',
  },
  {
    id: 4,
    name: 'Water Damage',
    description: 'Water damage? Our advanced drying & repair services save your device.',
    icon: '💧',
  },
  {
    id: 5,
    name: 'Software Issues',
    description: 'System lag, crashes, or bugs? We diagnose and fix software problems.',
    icon: '⚙️',
  },
  {
    id: 6,
    name: 'Accessories',
    description: 'Genuine Apple chargers, cables, cases, and more for your devices.',
    icon: '🎧',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Services" subtitle="Everything your device needs" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="text-center hover:shadow-red-500/30">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
