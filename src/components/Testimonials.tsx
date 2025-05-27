
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with 30plusfreelancer was a game-changer. They transformed our infrastructure and reduced our operational costs by 40% while improving performance dramatically.",
      author: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      company: "Series B Startup"
    },
    {
      quote: "Exceptional technical expertise combined with business acumen. They didn't just implement solutions, they helped us understand the strategic implications of our technology choices.",
      author: "Michael Rodriguez",
      title: "VP of Engineering",
      company: "FinanceFirst"
    },
    {
      quote: "The DevOps transformation they led allowed us to deploy 10x more frequently with zero downtime. Their approach to automation saved us countless hours.",
      author: "Emily Watson",
      title: "Head of Platform",
      company: "DataDriven Inc"
    },
    {
      quote: "Brilliant problem-solver who thinks strategically. They helped us scale from handling thousands to millions of users seamlessly.",
      author: "David Kim",
      title: "Founder & CEO",
      company: "GrowthCorp"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
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

export default Testimonials;
