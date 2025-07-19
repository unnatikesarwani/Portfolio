
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Coffee, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Drop me an email",
      description: "For project discussions and opportunities",
      action: "unnati.kesarwani27@gmail.com",
      href: "mailto:unnati.kesarwani27@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Let's connect on LinkedIn",
      description: "Professional networking and collaboration",
      action: "Connect with me",
      href: "https://www.linkedin.com/in/unnati-kesarwani-00a131308"
    },
    {
      icon: Coffee,
      title: "Virtual coffee chat",
      description: "Casual conversation about tech and ideas",
      action: "Schedule a call",
      href: "mailto:unnati.kesarwani27@gmail.com?subject=Virtual Coffee Chat"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Have an idea or opportunity in mind?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let's chat! I'm always excited to discuss new projects, share ideas, or explore potential collaborations. 
            Whether it's a quick question or a detailed project discussion, I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group border-0 bg-white/80 backdrop-blur-sm">
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <span className="text-teal-600 font-medium text-sm group-hover:underline">
                    {method.action}
                  </span>
                </a>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Quick Response Promise</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-teal-100">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-teal-100">Genuine Interest</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-teal-100">Enthusiasm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
