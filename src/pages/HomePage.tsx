import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-bounce">
          SIKE!
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90">
          We don't know about classes, but we know what you should attend
        </p>
        <Link 
          to="/second" 
          className="mt-8 inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          Next Page <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;