
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              30plusfreelancer
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Case Studies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Certifications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Contact</span>
                </a>
              </Button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg animate-slide-in-right">
              <div className="flex flex-col space-y-3">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certifications Section */}
      <Certifications />

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-300"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to transform your technology infrastructure? Get in touch to discuss your project.
            </p>
          </div>
          <div className="animate-scale-in">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              30plusfreelancer
            </div>
            <p className="text-gray-300 mb-6">Freelance CTO & DevOps Professional</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@30plusfreelancer.com" 
                 className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-rotate-12">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-8 border-t border-gray-700 text-gray-400">
              <p>&copy; 2024 30plusfreelancer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
