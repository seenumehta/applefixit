'use client';

import Card from './Card';
import SectionTitle from './SectionTitle';

const reasons = [
  {
    id: 1,
    title: 'Transparent Pricing',
    description: 'No hidden charges. You know exactly what you pay before repair starts.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Same-Day Repair',
    description: 'Most repairs completed in 1 hour or less. Lightning-fast turnaround guaranteed.',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Genuine Parts',
    description: 'Only original or certified spare parts. Never use cheap counterfeit components.',
    icon: '✅',
  },
  {
    id: 4,
    title: 'Expert Technicians',
    description: 'Trained professionals with years of experience in mobile repair.',
    icon: '👨‍🔧',
  },
  {
    id: 5,
    title: 'Apple Specialist',
    description: 'Dedicated to iPhone, iPad, MacBook, and Apple Watch repairs with certified expertise.',
    icon: '🍎',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-950 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Why Choose AppleFixit"
          subtitle="We're not just a repair shop. We're your trusted tech partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className="text-center h-full hover:shadow-red-500/30"
              hover
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
              <p className="text-sm text-gray-400">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
