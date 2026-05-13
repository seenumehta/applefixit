'use client';

import Button from './Button';

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-up">
          Premium Mobile Repair &<br />
          <span className="text-red-500">Accessories</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          Expert technicians. Genuine parts. Same-day repairs. Your device deserves the best.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              window.open('https://wa.me/919811112254?text=Hi%20AppleFixit%2C%20I%20want%20to%20book%20a%20repair', '_blank');
            }}
          >
            Book a Repair
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Services
          </Button>
        </div>

        {/* Floating badge */}
        <div className="mt-12 flex justify-center gap-8 text-center text-sm">
          <div className="animate-pulse">
            <div className="text-3xl font-bold text-red-500">4.8★</div>
            <p className="text-gray-400">Golf Course Rd</p>
          </div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-red-500">4.6★</div>
            <p className="text-gray-400">M3M 65th Ave</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
