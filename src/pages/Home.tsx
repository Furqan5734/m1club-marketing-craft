import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Precision-targeted marketing strategies that deliver measurable results for your brand."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our network of skilled brand ambassadors brings your vision to life with professionalism."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge marketing solutions that keep your brand ahead of the competition."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of success with measurable growth and increased brand recognition."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/hero-marketing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <img 
              src="/assets/m1-logo.jpg" 
              alt="M~1 Club Logo" 
              className="w-24 h-24 mx-auto rounded-full animate-glow-pulse"
            />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              WELCOME TO
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
                M~1 CLUB
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your premier marketing consultancy delivering results through innovative strategies, 
              exceptional brand experiences, and a relentless pursuit of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="luxury" size="lg" className="group">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              If it's your first time here,
              <span className="block text-primary">WELCOME!</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a results and systems driven Direct Marketing Consultancy based in London. 
              Through our network of independent Brand Ambassadors, we provide promotional services 
              for some of the world's most innovative brands. We aim to increase sales and generate 
              new business on behalf of the brands we represent through face to face interactions 
              with customers, bringing back human contact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our relentless attitude towards growth has been integral to our success to date. 
              We work closely with our network of independent Brand Ambassadors, mentoring and 
              developing them through our 'Equal Opportunities' business model, providing everyone 
              an equal and fair opportunity to build their own future.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose M~1 Club?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-luxury group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <feature.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Meet Our Founder</h2>
            <div className="bg-gradient-card rounded-xl p-8 shadow-luxury">
              <div className="space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  A.M
                </div>
                <h3 className="text-2xl font-bold">Abdul Mohsi Shiekh</h3>
                <p className="text-primary font-semibold">Director & Founder at M~1 Club</p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With years of experience in marketing and business development, Abdul leads M~1 Club 
                  with vision and dedication, ensuring every client receives exceptional service and 
                  outstanding results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Brand?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Let's work together to create marketing strategies that drive real results for your business.
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;