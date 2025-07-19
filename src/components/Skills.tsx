
import { Card } from '@/components/ui/card';
import { Code, Users, Lightbulb, Zap, Globe, Database, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Problem Solver with React",
      description: "Building interactive user interfaces and solving complex UI challenges",
      level: 85,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Creative Designer with Tailwind",
      description: "Crafting beautiful, responsive designs with modern CSS frameworks",
      level: 90,
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Performance Optimizer with JavaScript",
      description: "Writing efficient code and optimizing web application performance",
      level: 80,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Team Collaborator with Git",
      description: "Managing code versions and collaborating seamlessly with development teams",
      level: 75,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Architect with Firebase",
      description: "Designing and implementing scalable database solutions",
      level: 65,
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Full-Stack Thinker with Node.js",
      description: "Understanding both client and server-side development paradigms",
      level: 50,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: GitBranch,
      title: "Strategic Planner",
      description: "Breaking down complex projects into manageable, executable tasks",
      level: 88,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driver",
      description: "Constantly learning new technologies and implementing creative solutions",
      level: 92,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const currentlyLearning = [
    "Advanced React Patterns & Hooks",
    "Node.js & Express Framework", 
    "Database Design & Management",
    "API Integration & Development"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Mindset</h2>
          <p className="text-xl text-gray-600">How I approach technology and problem-solving</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
              >
                <div className="text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                </div>
              </Card>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <Card className="p-8 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 border-teal-200/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Currently Expanding My Toolkit</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentlyLearning.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
