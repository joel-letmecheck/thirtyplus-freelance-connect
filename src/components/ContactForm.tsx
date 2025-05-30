
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: `Company: ${formData.company || 'Not specified'}
Project Type: ${formData.projectType || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}`
          }
        ]);

      if (error) {
        console.error('Error saving contact form:', error);
        toast({
          title: "Error sending message",
          description: "There was a problem saving your message. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Send email via edge function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message
        }
      });

      if (emailError) {
        console.error('Error sending email:', emailError);
        // Still show success since the form was saved, but log the email error
        console.warn('Contact form saved but email notification failed');
      }

      toast({
        title: "Message sent successfully! 🚀",
        description: "I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-lg shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
      <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
        <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
          🎯 Start Your Project
        </CardTitle>
        <p className="text-gray-600">Tell me about your project and let's discuss how I can help.</p>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Your full name"
                required
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="your.email@company.com"
                required
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-700 font-medium">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Your company name"
              className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-gray-700 font-medium">Project Type</Label>
              <Select onValueChange={(value) => handleChange('projectType', value)}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cloud-migration">☁️ Cloud Migration</SelectItem>
                  <SelectItem value="devops-setup">⚙️ DevOps Setup</SelectItem>
                  <SelectItem value="infrastructure-audit">🔍 Infrastructure Audit</SelectItem>
                  <SelectItem value="scaling-optimization">📈 Scaling & Optimization</SelectItem>
                  <SelectItem value="security-compliance">🔒 Security & Compliance</SelectItem>
                  <SelectItem value="architecture-design">🏗️ Architecture Design</SelectItem>
                  <SelectItem value="other">🔧 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-gray-700 font-medium">Timeline</Label>
              <Select onValueChange={(value) => handleChange('timeline', value)}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Project timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">⚡ ASAP</SelectItem>
                  <SelectItem value="1-month">📅 Within 1 month</SelectItem>
                  <SelectItem value="3-months">📊 1-3 months</SelectItem>
                  <SelectItem value="6-months">📈 3-6 months</SelectItem>
                  <SelectItem value="ongoing">🔄 Ongoing project</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-gray-700 font-medium">Budget Range</Label>
            <Select onValueChange={(value) => handleChange('budget', value)}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 transition-colors">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5-10k">💰 $5k - $10k</SelectItem>
                <SelectItem value="10-25k">💵 $10k - $25k</SelectItem>
                <SelectItem value="25-50k">💸 $25k - $50k</SelectItem>
                <SelectItem value="50k+">💎 $50k+</SelectItem>
                <SelectItem value="discuss">💬 Let's discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 font-medium">Project Description *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell me about your project, current challenges, and what you're looking to achieve..."
              rows={6}
              required
              className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
