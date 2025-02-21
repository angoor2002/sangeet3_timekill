import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function SecondPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="relative flex-1">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Inspirational"
          className="w-full h-full object-cover md:w-1/3 md:mx-auto"
        />
        <Link 
          to="/gallery" 
          className="absolute bottom-6 right-6 inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          Gallery <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default SecondPage;