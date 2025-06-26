import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg'; 

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Shanpreet Singh\nA passionate DSA enthusiast and Web Developer";
  
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); 
    
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img 
            src={profileImage} 
            alt=""
            className="rounded-full w-75 h-75 md:w-96 md:h-96 object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 whitespace-pre-line">
            {displayText.split('\n')[0]}
            {displayText.includes("Shanpreet Singh") && (
              <span className="text-blue-600 dark:text-blue-400"> </span>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 whitespace-pre-line">
            {displayText.split('\n')[1]}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
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
      </div>
    </section>
  );
}