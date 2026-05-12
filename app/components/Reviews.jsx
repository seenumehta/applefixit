'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';

const reviews = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Golf Course Rd',
    rating: 5,
    text: 'Amazing service! Got my iPhone screen replaced in 30 minutes. The quality is excellent and pricing was transparent. Will come back!',
  },
  {
    id: 2,
    name: 'Priya Gupta',
    location: 'M3M 65th Ave',
    rating: 5,
    text: 'Best repair shop in Gurugram. Friendly staff, quick service, and they used genuine parts. My Samsung battery is working perfectly.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Golf Course Rd',
    rating: 4,
    text: 'Very professional team. They fixed my water-damaged phone when others said it was beyond repair. Highly recommended!',
  },
  {
    id: 4,
    name: 'Neha Verma',
    location: 'M3M 65th Ave',
    rating: 5,
    text: 'Got a new charger and screen protector. The staff is knowledgeable and helpful. Great place for all mobile needs.',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ))}
  </div>
);

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoPlay(false);
  };

  return (
    <section id="reviews" className="py-20 bg-gray-950 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Customer Love" subtitle="See what our happy customers say" />

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              <div className="flex">
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0">
                    <Card className="text-center hover:shadow-blue-500/30 h-full">
                      <StarRating rating={review.rating} />
                      <p className="text-lg text-white mt-4 mb-4 italic">"{review.text}"</p>
                      <p className="font-bold text-white mb-1">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.location}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition z-10"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition z-10"
          >
            →
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
