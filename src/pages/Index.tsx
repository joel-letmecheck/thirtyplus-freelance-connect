
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              30plusfreelancer
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Contact</span>
                </a>
              </Button>
            </div>
          </div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to transform your technology infrastructure? Get in touch to discuss your project.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              30plusfreelancer
            </div>
            <p className="text-gray-400 mb-6">Freelance CTO & DevOps Professional</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@30plusfreelancer.com" 
                 className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              <p>&copy; 2024 30plusfreelancer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
