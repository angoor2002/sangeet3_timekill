import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function GalleryPage() {
  const [sizes, setSizes] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate random sizes for the grid items
    const possibleSizes = ['small', 'medium', 'large'];
    const newSizes = Array(9).fill('').map(() => 
      possibleSizes[Math.floor(Math.random() * possibleSizes.length)]
    );
    setSizes(newSizes);
  }, []);

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'large':
        return 'col-span-2 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e'
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${getSizeClasses(sizes[index])} overflow-hidden rounded-lg transition-transform hover:scale-[1.02]`}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <Link 
        to="/" 
        className="fixed bottom-6 right-6 inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
      >
        <Home className="mr-2" /> Home
      </Link>
    </div>
  );
}

export default GalleryPage;