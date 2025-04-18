const skills = [
  'JavaScript', 'React', 
  'HTML', 'CSS', 
  'Git', 'Django'
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Skills
        </h2>
       
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 
              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}