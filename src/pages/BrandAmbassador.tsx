import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BrandAmbassador = () => {
  const benefits = [
    {
      icon: Users,
      title: "Flexible Schedule",
      description: "Work on your own terms with flexible hours that fit your lifestyle and commitments."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Develop valuable sales, communication, and marketing skills through hands-on experience."
    },
    {
      icon: TrendingUp,
      title: "Uncapped Earnings",
      description: "Your earning potential is unlimited - the more you achieve, the more you earn."
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Outstanding performers are recognized and fast-tracked for leadership opportunities."
    }
  ];

  const requirements = [
    "Strong communication and interpersonal skills",
    "Enthusiastic and positive attitude",
    "Ability to work independently and as part of a team",
    "Professional appearance and demeanor",
    "Willingness to learn and develop new skills",
    "Reliable and punctual",
    "Previous sales or customer service experience preferred but not essential"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Application",
      description: "Submit your application through our contact form or get in touch directly."
    },
    {
      step: "2", 
      title: "Interview Process",
      description: "Participate in our comprehensive interview process to assess your fit and potential."
    },
    {
      step: "3",
      title: "Training Program", 
      description: "Complete our intensive training program covering sales techniques and brand knowledge."
    },
    {
      step: "4",
      title: "Start Your Journey",
      description: "Begin your career as a Brand Ambassador with full support from our team."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/services-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-wider">
              BECOME A
              <br />
              <span className="block text-primary">BRAND AMBASSADOR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join our dynamic team and represent some of the world's most innovative brands
            </p>
          </div>
        </div>
      </section>

      {/* What is a Brand Ambassador Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              What is a Brand Ambassador?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A Brand Ambassador is a professional representative who promotes and markets products 
                or services on behalf of our client brands. You'll be the face of the brand, creating 
                meaningful connections with potential customers through direct, face-to-face interactions.
              </p>
              <p>
                As a Brand Ambassador with M~1 Club, you'll work in various locations including retail 
                environments, events, and promotional campaigns. You'll be responsible for increasing 
                brand awareness, generating leads, and driving sales through authentic customer engagement.
              </p>
              <p>
                This role offers excellent opportunities for personal and professional growth, with many 
                of our Brand Ambassadors progressing to leadership positions within our organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Our Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-clean text-center">
                <CardContent className="p-6 space-y-4">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We're Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in equal opportunities for everyone. Whether you're just starting your career 
                  or looking for a change, we provide comprehensive training and ongoing support to help 
                  you succeed as a Brand Ambassador.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team culture is built on collaboration, growth, and mutual success. Join us and 
                  become part of a dynamic environment where your potential can flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-clean p-6">
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "Starting as a Brand Ambassador with M~1 Club changed my life. The training and support 
                    I received helped me develop skills I never knew I had. Now I'm leading my own team!"
                  </p>
                  <div className="font-semibold">- Sarah, Team Leader</div>
                </CardContent>
              </Card>
              <Card className="card-clean p-6">
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "The flexibility and earning potential as a Brand Ambassador allowed me to pursue my 
                    goals while building a successful career. The team genuinely cares about your success."
                  </p>
                  <div className="font-semibold">- James, Senior Brand Ambassador</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: "url('/assets/hero-marketing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl">
              Take the first step towards an exciting career as a Brand Ambassador
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/develop">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-black">
                  Learn About Development
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandAmbassador;