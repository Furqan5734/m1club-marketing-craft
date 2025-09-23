import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Target, Users, Zap, BarChart3, Megaphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Development",
      description: "Comprehensive brand positioning and strategy development to differentiate your business in the marketplace.",
      features: ["Brand Identity Creation", "Market Positioning", "Competitive Analysis", "Brand Guidelines"],
      price: "From £2,500"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Solutions",
      description: "Full-spectrum digital marketing services to amplify your online presence and drive engagement.",
      features: ["Social Media Management", "Content Marketing", "SEO Optimization", "PPC Campaigns"],
      price: "From £1,500/month"
    },
    {
      icon: Users,
      title: "Brand Ambassador Programs",
      description: "Professional brand ambassador services to create authentic connections with your target audience.",
      features: ["Event Marketing", "Face-to-Face Campaigns", "Product Demonstrations", "Lead Generation"],
      price: "From £80/day per ambassador"
    },
    {
      icon: BarChart3,
      title: "Marketing Analytics & Research",
      description: "Data-driven insights and comprehensive market research to inform your marketing decisions.",
      features: ["Market Research", "Campaign Analytics", "ROI Measurement", "Consumer Insights"],
      price: "From £1,000"
    },
    {
      icon: Zap,
      title: "Strategic Marketing Consulting",
      description: "Expert marketing consultation to optimize your strategies and accelerate business growth.",
      features: ["Marketing Audits", "Strategy Development", "Growth Planning", "Performance Optimization"],
      price: "From £150/hour"
    },
    {
      icon: Globe,
      title: "Integrated Campaign Management",
      description: "End-to-end campaign management across multiple channels for maximum impact and reach.",
      features: ["Multi-Channel Campaigns", "Project Management", "Creative Development", "Performance Tracking"],
      price: "From £5,000"
    }
  ];

  const benefits = [
    "Proven track record of success",
    "Experienced team of marketing professionals",
    "Customized strategies for your business",
    "Transparent reporting and analytics",
    "Ongoing support and optimization",
    "Flexible engagement models"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-primary-glow">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in">
            Comprehensive marketing solutions designed to elevate your brand and drive exceptional results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury group h-full">
                <CardHeader className="text-center">
                  <service.icon className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="luxury" className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Partner With M~1 Club?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-card">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your business, goals, and market position" },
                { step: "02", title: "Strategy", description: "We develop a customized marketing strategy for your needs" },
                { step: "03", title: "Execute", description: "We implement campaigns with precision and expertise" },
                { step: "04", title: "Optimize", description: "We monitor, measure, and optimize for maximum results" }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Elevate Your Marketing?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="luxury" size="lg">
                Start Your Project
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;