'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-2">
              Apple<span className="text-gray-100">Fi</span><span className="text-red-500">x</span><span className="text-gray-100">it</span>
            </h3>
            <p className="text-gray-400 text-sm">Premium Mobile Repair & Accessories</p>
            <p className="text-gray-500 text-xs mt-4">Gurugram, India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition">Screen Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Battery Service</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Software Fix</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#why-us" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition">Reviews</a></li>
              <li><a href="#locations" className="hover:text-blue-400 transition">Locations</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                𝕏
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              📞 +91 98111 12254
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {currentYear} AppleFixit. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
