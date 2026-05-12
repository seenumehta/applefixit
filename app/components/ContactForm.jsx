'use client';

import { useState } from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

const deviceOptions = [
  'Apple iPhone',
  'Samsung',
  'OnePlus',
  'Xiaomi/Redmi',
  'Realme',
  'Vivo',
  'Oppo',
  'Others',
];

const locationOptions = [
  'Golf Course Road, Sector 53',
  'M3M 65th Avenue, Sector 65',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    issue: '',
    location: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.device) {
      newErrors.device = 'Please select a device';
    }

    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Form submitted successfully! We\'ll contact you soon.');
        setFormData({
          name: '',
          phone: '',
          device: '',
          issue: '',
          location: '',
        });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('❌ Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          title="Book Your Repair"
          subtitle="Fill out the form below and our team will contact you shortly."
        />

        <form onSubmit={handleSubmit} className="space-y-6 bg-black rounded-lg p-8 border border-gray-800">
          {/* Name */}
          <div>
            <label className="block text-white font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border transition ${
                errors.name
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-700 focus:border-blue-500'
              } focus:outline-none`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border transition ${
                errors.phone
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-700 focus:border-blue-500'
              } focus:outline-none`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Device */}
          <div>
            <label className="block text-white font-semibold mb-2">Device Type *</label>
            <select
              name="device"
              value={formData.device}
              onChange={handleChange}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border transition ${
                errors.device
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-700 focus:border-blue-500'
              } focus:outline-none`}
            >
              <option value="">Select a device...</option>
              {deviceOptions.map((device) => (
                <option key={device} value={device}>
                  {device}
                </option>
              ))}
            </select>
            {errors.device && <p className="text-red-500 text-sm mt-1">{errors.device}</p>}
          </div>

          {/* Issue Description */}
          <div>
            <label className="block text-white font-semibold mb-2">Issue Description</label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Describe the problem with your device (optional)"
              rows="4"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-white font-semibold mb-2">Preferred Location *</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-lg border transition ${
                errors.location
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-700 focus:border-blue-500'
              } focus:outline-none`}
            >
              <option value="">Select a location...</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          {/* Status Message */}
          {status && (
            <div
              className={`p-4 rounded-lg text-center font-semibold ${
                status.includes('✅')
                  ? 'bg-green-900/30 text-green-400 border border-green-700'
                  : 'bg-red-900/30 text-red-400 border border-red-700'
              }`}
            >
              {status}
            </div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Book a Repair'}
          </Button>

          <p className="text-gray-400 text-sm text-center">
            We'll contact you within 2 hours during business hours.
          </p>
        </form>
      </div>
    </section>
  );
}
