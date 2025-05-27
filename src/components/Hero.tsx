
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section id="about" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              ⚡ Freelance CTO & DevOps Professional
            </Badge>
          </div>

          {/* Profile Picture */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-1 shadow-2xl">
                <img 
                  src="/lovable-uploads/e1242a0e-df49-420b-9820-2f0abbefffa3.png" 
                  alt="30plusfreelancer - CTO & DevOps Professional" 
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-bounce">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Build Big Without
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Getting Billed Big
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            With over a decade of experience, I help startups and enterprises build robust, 
            scalable technology infrastructures that drive business growth - all while keeping costs optimized.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                🚀 Start Your Project
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="#case-studies" className="flex items-center gap-2">
                📊 View Case Studies
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-700">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">10+</div>
              <div className="text-gray-600 group-hover:text-blue-600 transition-colors">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">50+</div>
              <div className="text-gray-600 group-hover:text-purple-600 transition-colors">Projects Delivered</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">25+</div>
              <div className="text-gray-600 group-hover:text-indigo-600 transition-colors">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">99%</div>
              <div className="text-gray-600 group-hover:text-green-600 transition-colors">Uptime Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
