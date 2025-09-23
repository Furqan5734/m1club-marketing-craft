import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in every project, ensuring exceptional results that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with clients to achieve shared success."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our business relationships."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends, constantly innovating to deliver cutting-edge marketing solutions."
    }
  ];

  const milestones = [
    { year: "2020", title: "M~1 Club Founded", description: "Abdul Mohsi Shiekh establishes M~1 Club with a vision for results-driven marketing." },
    { year: "2021", title: "First Major Campaign", description: "Successfully launched our first multi-channel marketing campaign for a Fortune 500 company." },
    { year: "2022", title: "Team Expansion", description: "Grew our network to include over 50 skilled brand ambassadors across the UK." },
    { year: "2023", title: "Industry Recognition", description: "Recognized as a leading marketing consultancy with multiple industry awards." },
    { year: "2024", title: "Global Reach", description: "Expanded services internationally, serving clients across Europe and North America." }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-primary-glow">M~1 Club</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in">
            Your trusted partner in marketing excellence, dedicated to transforming brands and driving exceptional results
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                M~1 Club was born from a simple yet powerful vision: to bring back human connection in marketing. 
                In an increasingly digital world, we recognized the irreplaceable value of genuine, face-to-face 
                interactions between brands and their customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  We are a results and systems driven Direct Marketing Consultancy dedicated to helping 
                  innovative brands connect with their audiences through authentic experiences. Our network 
                  of independent Brand Ambassadors brings your vision to life, creating meaningful 
                  interactions that drive sales and build lasting relationships.
                </p>
                <p className="text-muted-foreground">
                  Through our 'Equal Opportunities' business model, we provide everyone with a fair chance 
                  to build their future while delivering exceptional results for our clients.
                </p>
              </div>
              <div className="bg-gradient-card rounded-xl p-8 shadow-luxury">
                <img 
                  src="/src/assets/m1-logo.jpg" 
                  alt="M~1 Club Logo" 
                  className="w-32 h-32 mx-auto rounded-full animate-float mb-6"
                />
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold">Abdul Mohsi Shiekh</h4>
                  <p className="text-primary font-semibold">Director & Founder</p>
                  <p className="text-sm text-muted-foreground">
                    "Building bridges between brands and people through authentic marketing experiences."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-luxury group text-center">
                <CardContent className="p-6 space-y-4">
                  <value.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Campaigns" },
              { number: "50+", label: "Brand Ambassadors" },
              { number: "100+", label: "Happy Clients" },
              { number: "4+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Join Our Success Story?</h2>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            Let's work together to create marketing strategies that deliver real results and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-luxury text-lg px-8 py-4 group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;