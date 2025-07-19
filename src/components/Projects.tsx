
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "LearningRecite",
      description: "A roadmap.sh-inspired web app to help learners revise topics using flashcards.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      liveDemo: "#",
      github: "#",
      status: "Completed"
    },
    {
      title: "SignSetu",
      description: "A bridge between hearing-impaired and others to enable smooth communication.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      techStack: ["Python", "OpenCV", "Firebase", "Tailwind CSS"],
      liveDemo: null,
      github: "#",
      status: "Work in Progress"
    },
    {
      title: "E-commerce Website",
      description: "A fully functional shopping website with login authentication and product cart.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      github: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-lg ${
                        project.status === 'Completed' 
                          ? 'bg-green-400/20 text-green-100 border border-green-300/30' 
                          : 'bg-yellow-400/20 text-yellow-100 border border-yellow-300/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal-400/20 text-teal-800 rounded-full text-sm font-medium backdrop-blur-sm border border-teal-300/30 hover:bg-teal-400/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-teal-500/80 to-cyan-500/80 backdrop-blur-sm hover:from-teal-600/90 hover:to-cyan-600/90 text-white flex-1 border border-teal-400/30 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-teal-400/50 hover:text-teal-700 flex-1 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 backdrop-blur-sm bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
