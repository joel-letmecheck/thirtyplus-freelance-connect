
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Modernization",
      description: "Migrated legacy monolith to microservices architecture, reducing deployment time by 80% and improving system reliability.",
      tech: ["Kubernetes", "Docker", "AWS", "Node.js", "React"],
      results: ["80% faster deployments", "99.9% uptime", "50% cost reduction"],
      industry: "E-commerce"
    },
    {
      title: "FinTech Infrastructure Scaling",
      description: "Designed and implemented auto-scaling infrastructure for a financial services platform handling millions of transactions daily.",
      tech: ["Terraform", "AWS", "PostgreSQL", "Redis", "Python"],
      results: ["10x traffic capacity", "Zero downtime scaling", "PCI compliance achieved"],
      industry: "FinTech"
    },
    {
      title: "Healthcare Data Pipeline",
      description: "Built secure, HIPAA-compliant data processing pipeline for medical research platform with real-time analytics.",
      tech: ["Apache Kafka", "Elasticsearch", "Docker", "Azure", "Go"],
      results: ["Real-time processing", "HIPAA compliance", "100TB+ data handled"],
      industry: "Healthcare"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. See how I've helped companies transform their technology infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
