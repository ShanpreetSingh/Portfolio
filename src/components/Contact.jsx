import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center min-h-[54vh]"> {}
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          
          {/* Main Contact Text */}
          <div className="mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              You can contact me via:
            </p>
            
            {/* Contact Methods */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:sainishanpreet@gmail.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail className="w-8 h-8" />
              </a>
              <a 
                href="tel:+918847545751" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Phone"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/ShanpreetSingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shanpreet-singh-bb033628a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              
                
            </div>
          </div>
          
          {/* Location */}
          <div className="mt-12">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-400">Hamirpur, Himachal Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}