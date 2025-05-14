export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I’m a B.Tech CSE student at NIT Hamirpur, deeply passionate about Web Development and Data Structures & Algorithms. I love crafting impactful digital experiences and solving complex problems through code.
Beyond the technical world, I express my creativity through poetry, believing that logic and imagination go hand in hand.
As a State-Level Youth Parliamentarian, I have honed leadership, public speaking, and critical thinking skills — blending technical expertise with strong communication and a growth mindset.
I’m always eager to learn, build, and create meaningful solutions that make a difference.
                 </p>
                 <a 
            href="#poetry" 
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Read My Poetry 
          </a>
                
          </div>
        </div>
      </section>
    );
  }