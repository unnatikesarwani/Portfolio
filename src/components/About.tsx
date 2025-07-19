
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm <span className="font-semibold text-teal-600">Unnati Kesarwani</span>, 
              a B.Tech student at United University, pursuing my degree in Computer Science and Engineering 
              (expected graduation: 2027) with a strong academic record (CGPA: 8.57). I am deeply passionate 
              about technology and continuously exploring the fields of web development, software engineering, 
              and project management.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Alongside my academics, I've worked on real-life projects like <span className="font-semibold">LearningRecite</span>, 
              a platform inspired by roadmap.sh, and <span className="font-semibold">SignSetu</span>, an inclusive 
              communication tool designed to bridge the gap between differently-abled individuals and the wider community. 
              These experiences have sharpened my technical skills in HTML, CSS, JavaScript, Tailwind CSS, and Java, 
              while also nurturing my creativity and problem-solving abilities.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I am also actively involved in event management, having coordinated and volunteered for multiple 
              college-level and national-level tech and cultural fests, which enhanced my leadership, teamwork, 
              and communication skills.
            </p>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <p className="text-lg text-gray-700 font-medium">
                🌱 Currently learning advanced web technologies and open to internship opportunities where I can contribute, grow, and make an impact.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
              <p className="text-gray-600">Projects Completed</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">2024</div>
              <p className="text-gray-600">Started Coding</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">8.57</div>
              <p className="text-gray-600">Current CGPA</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">2027</div>
              <p className="text-gray-600">Expected Graduation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
