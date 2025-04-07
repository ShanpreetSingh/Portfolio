export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate developer with 5+ years of experience building web applications.
              I specialize in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing
              to open source projects.
            </p>
          </div>
        </div>
      </section>
    );
  }