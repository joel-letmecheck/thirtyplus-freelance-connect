
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      level: "Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      category: "Cloud Architecture"
    },
    {
      title: "Certified Kubernetes Administrator",
      level: "Expert",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      category: "Container Orchestration"
    },
    {
      title: "Google Cloud Professional DevOps Engineer",
      level: "Professional",
      issuer: "Google Cloud",
      year: "2022",
      category: "DevOps"
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      level: "Associate",
      issuer: "HashiCorp",
      year: "2022",
      category: "Infrastructure as Code"
    },
    {
      title: "Docker Certified Associate",
      level: "Associate",
      issuer: "Docker Inc.",
      year: "2021",
      category: "Containerization"
    },
    {
      title: "Certified Information Systems Security Professional",
      level: "Professional",
      issuer: "ISC²",
      year: "2021",
      category: "Security"
    }
  ];

  const skills = [
    "AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform",
    "Ansible", "Jenkins", "GitLab CI", "Python", "Go", "Node.js",
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prometheus",
    "Grafana", "ELK Stack", "Microservices", "API Design", "Security"
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Certifications & Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuously learning and staying current with the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Professional Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{cert.issuer}</span> • {cert.level}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Technical Skills</h3>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-2 bg-white hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cloud Architecture & Migration</li>
                      <li>• DevOps & CI/CD Pipeline Design</li>
                      <li>• Microservices & Container Orchestration</li>
                      <li>• Infrastructure as Code</li>
                      <li>• Performance Optimization</li>
                      <li>• Security & Compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
