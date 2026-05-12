'use client';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        bg-gray-900 rounded-lg p-6
        ${hover ? 'hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105' : 'shadow-md'}
        transition-all duration-300 border border-gray-800
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
