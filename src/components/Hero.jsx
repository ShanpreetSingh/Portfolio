import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const [displayName, setDisplayName] = useState('');
  const fullName = "Shanpreet Singh";
  
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 150); // Typing speed (milliseconds per character)
    
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Photo - Centered as in your current layout */}
      <div className="mb-8">
        <img 
          src={profileImage} 
          alt="Shanpreet Singh"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-600 shadow-lg"
        />
      </div>
      
      {/* Text Content - Centered with dynamic name */}
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">{displayName}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          A passionate DSA enthusiast and Web Developer
        </p>
        
        {/* Buttons - Unchanged */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}