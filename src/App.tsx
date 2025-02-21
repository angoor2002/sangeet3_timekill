import React from 'react';
import { ArrowDown, Camera, Sparkles } from 'lucide-react';
import * as images from './assets/images/gallery';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { default as mainImage} from './images/main.jpg';


function App() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      {/* Section 1 */}
      <section className="h-screen bg-black flex flex-col items-center justify-center p-6 relative">
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SIKE!
          </motion.h1>
          <p className="text-xl md:text-2xl text-white opacity-90">
            We don't know about classes, but we know what you should attend
          </p>
        </div>
        <motion.div className="absolute bottom-8" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          <ArrowDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="h-screen bg-black flex items-center justify-center relative">
        <motion.img
          src={mainImage}
          alt="Inspirational"
          className="w-full h-full object-cover"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div className="absolute bottom-8" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          <ArrowDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="h-screen bg-gray-900 flex flex-col">
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="h-0.5 w-full bg-purple-500 opacity-20"></div> */}
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-900 px-4 flex items-center gap-3">
              <Camera className="w-8 h-8 text-purple-400" />
              <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
                Here are some glimpses
              </span>
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-xl text-gray-400 italic">
              of what went down last year
            </span>
          </div>
        </div>

        <div className="flex-1 p-4 flex items-center h-full">
  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 w-full h-full auto-rows-[1fr]">
    {images &&
      Object.values(images)
        .slice(0, 9)
        .map((image, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
          return (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg transition-transform hover:scale-[1.02] aspect-square"
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {inView && (
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </motion.div>
          );
        })}
  </div>
</div>
      </section>
    </div>
  );
}

export default App;
