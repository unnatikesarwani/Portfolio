
import { Card } from '@/components/ui/card';
import { Globe, ShoppingCart, Palette, User, Megaphone, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Design and build responsive, user-friendly websites using modern technologies like React and Tailwind CSS.",
      features: ["Responsive Design", "Modern UI/UX", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Develop basic online stores with product catalogs, shopping cart functionality, and user authentication.",
      features: ["Product Management", "Cart System", "User Authentication", "Payment Integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Enhancement",
      description: "Improve existing website designs using modern CSS frameworks and best practices for better user experience.",
      features: ["Modern Design", "User Experience", "Mobile First", "Performance Optimization"]
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description: "Create personal or professional portfolios for students, freelancers, and professionals to showcase their work.",
      features: ["Personal Branding", "Project Showcase", "Contact Forms", "Social Integration"]
    },
    {
      icon: Megaphone,
      title: "Event Promotions",
      description: "Design and manage event promotion pages with registration forms and event information displays.",
      features: ["Event Landing Pages", "Registration Forms", "Social Sharing", "Event Management"]
    },
    {
      icon: Code,
      title: "Web App Development",
      description: "Build interactive web applications with dynamic content and user-friendly interfaces.",
      features: ["Interactive Features", "Dynamic Content", "Database Integration", "Real-time Updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-600">Here's how I can help you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your ideas and bring them to life with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
