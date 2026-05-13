'use client';

import SectionTitle from './SectionTitle';

const brands = [
  { id: 1, name: 'iPhone', emoji: '📱' },
  { id: 2, name: 'iPad', emoji: '📲' },
  { id: 3, name: 'MacBook', emoji: '💻' },
  { id: 4, name: 'Apple Watch', emoji: '⌚' },
];

export default function BrandsGrid() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Apple Products We Repair"
          subtitle="Expert repair services for all Apple devices - iPhones, iPads, MacBooks, and Apple Watches."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                bg-gray-900 rounded-lg p-8
                flex flex-col items-center justify-center
                hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50
                transition-all duration-300 cursor-pointer
                border border-gray-800 hover:border-red-500
                h-32 md:h-40
              "
            >
              <div className="text-6xl md:text-7xl mb-4">{brand.emoji}</div>
              <p className="text-base md:text-lg font-semibold text-white text-center">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
