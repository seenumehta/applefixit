'use client';

import SectionTitle from './SectionTitle';

const brands = [
  { id: 1, name: 'Apple', emoji: '🍎' },
  { id: 2, name: 'Samsung', emoji: '📱' },
  { id: 3, name: 'Xiaomi', emoji: '🔴' },
  { id: 4, name: 'OnePlus', emoji: '⚡' },
  { id: 5, name: 'Realme', emoji: '🚀' },
  { id: 6, name: 'Vivo', emoji: '💙' },
  { id: 7, name: 'Oppo', emoji: '🎯' },
  { id: 8, name: 'Motorola', emoji: 'M' },
];

export default function BrandsGrid() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Brands We Repair"
          subtitle="We service all major smartphone brands with expertise and care."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                bg-gray-900 rounded-lg p-6
                flex flex-col items-center justify-center
                hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50
                transition-all duration-300 cursor-pointer
                border border-gray-800 hover:border-red-500
                h-24
              "
            >
              <div className="text-4xl mb-2">{brand.emoji}</div>
              <p className="text-sm font-semibold text-white text-center">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
