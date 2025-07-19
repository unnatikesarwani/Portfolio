
import { Card } from '@/components/ui/card';
import { Award, Users, Calendar, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "HackDiwas 2.0 Event Management",
      description: "Organized HackDiwas 2.0 as part of the event management team, coordinating logistics and ensuring smooth execution.",
      year: "2024",
      category: "Leadership"
    },
    {
      icon: Calendar,
      title: "Tech Fest & Cultural Fest Coordination",
      description: "Successfully coordinated Tech Fest & Cultural Fest at both college and national level, managing teams and resources.",
      year: "2023-2024",
      category: "Event Management"
    },
    {
      icon: BookOpen,
      title: "Full Stack Web Development Certification",
      description: "Completed comprehensive Full Stack Web Development course on Coursera, mastering modern web technologies.",
      year: "2024",
      category: "Certification"
    },
    {
      icon: Award,
      title: "Python for Everybody Specialization",
      description: "Successfully completed Python for Everybody specialization by University of Michigan, building strong programming foundations.",
      year: "2023",
      category: "Certification"
    }
  ];

  const stats = [
    { number: "2+", label: "Years Learning" },
    { number: "5+", label: "Events Organized" },
    { number: "2", label: "Certifications" },
    { number: "8.57", label: "Current CGPA" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600">Milestones in my journey</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {achievement.category}
                      </span>
                      <span className="text-teal-600 font-semibold text-sm">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Achieve Something Together</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and learn from every opportunity.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
