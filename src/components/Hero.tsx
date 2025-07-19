
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M200,300 Q400,100 600,300 T1000,300 L1000,1000 L0,1000 Z"
            fill="url(#gradient1)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 50,30; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,500 Q300,300 600,500 T1000,500 L1000,1000 L0,1000 Z"
            fill="url(#gradient2)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -30,50; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-teal-600">Unnati</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate web developer and tech enthusiast, building user-friendly web applications 
                and aspiring to create solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                See My Work
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-900">B.Tech Student</span>
                <p>United University, Expected 2027</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-teal-600 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/unnati/f305a0d7-3c02-4332-86a8-b8ec8e6a0cb0.png"
                alt="Unnati Kesarwani"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
