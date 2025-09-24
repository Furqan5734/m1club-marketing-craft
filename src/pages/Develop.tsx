import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, ArrowRight, Star, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Develop = () => {
  const developmentAreas = [
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Develop essential leadership qualities through mentoring and managing Brand Ambassador teams."
    },
    {
      icon: Target,
      title: "Business Acumen",
      description: "Learn business fundamentals including strategy, operations, and financial management."
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Master advanced sales techniques and comprehensive marketing strategies."
    },
    {
      icon: Award,
      title: "Personal Development",
      description: "Build confidence, communication skills, and professional presence through structured programs."
    }
  ];

  const developmentPath = [
    {
      level: "Brand Ambassador",
      duration: "0-6 months",
      description: "Learn the fundamentals of direct marketing and customer engagement while representing our client brands.",
      skills: ["Customer interaction", "Product knowledge", "Sales basics", "Professional presentation"]
    },
    {
      level: "Senior Brand Ambassador", 
      duration: "6-12 months",
      description: "Take on increased responsibility and begin mentoring new team members while maintaining high performance.",
      skills: ["Team support", "Training delivery", "Performance optimization", "Goal achievement"]
    },
    {
      level: "Team Leader",
      duration: "12-18 months", 
      description: "Lead and manage a small team of Brand Ambassadors while developing business management skills.",
      skills: ["Team management", "Recruitment", "Performance analysis", "Business planning"]
    },
    {
      level: "Area Manager",
      duration: "18+ months",
      description: "Oversee multiple teams and territories while building your own business within our network.",
      skills: ["Multi-team leadership", "Strategic planning", "Business development", "Entrepreneurship"]
    }
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "Mentorship Program",
      description: "One-on-one guidance from experienced leaders who have built successful careers in our industry."
    },
    {
      icon: Star,
      title: "Skills Workshops",
      description: "Regular training sessions covering everything from communication skills to business management."
    },
    {
      icon: Briefcase,
      title: "Business Building Support",
      description: "Comprehensive support to help you build and scale your own business within our network."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/hero-marketing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-wider">
              DEVELOP
              <br />
              <span className="block text-primary">WITH US</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Build your future through our comprehensive development programs
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Growth is Our Priority
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At M~1 Club, we believe that everyone deserves an equal opportunity to build their future. 
                Our development programs are designed to take you from where you are today to where you 
                want to be tomorrow, regardless of your background or experience level.
              </p>
              <p>
                Through our structured approach to personal and professional development, we've helped 
                countless individuals build successful careers and businesses. Our 'Equal Opportunities' 
                business model ensures that everyone has the same chance to succeed.
              </p>
              <p>
                Whether you're just starting your career or looking to make a change, our comprehensive 
                development pathway provides the tools, training, and support you need to achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Develop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {developmentAreas.map((area, index) => (
              <Card key={index} className="card-clean text-center">
                <CardContent className="p-6 space-y-4">
                  <area.icon className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Path */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Development Journey</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {developmentPath.map((stage, index) => (
              <Card key={index} className="card-clean">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{stage.level}</h3>
                      </div>
                      <p className="text-primary font-semibold">{stage.duration}</p>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-muted-foreground">{stage.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Skills Developed:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {stage.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Development Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="card-clean text-center">
                <CardContent className="p-8 space-y-6">
                  <program.icon className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-semibold">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">Track Record of Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "85%", label: "Promotion Rate", description: "of Brand Ambassadors advance within 12 months" },
                { number: "20+", label: "Business Owners", description: "started their own operations through our program" },
                { number: "500+", label: "Lives Changed", description: "individuals developed through our programs" },
                { number: "95%", label: "Satisfaction Rate", description: "of participants would recommend our program" }
              ].map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">{metric.number}</div>
                  <div className="text-lg font-semibold">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Team Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-clean">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "The development program here is incredible. I went from having no sales experience 
                  to running my own team in just 18 months. The support never stops."
                </p>
                <div className="font-semibold">- Marcus, Area Manager</div>
              </CardContent>
            </Card>
            <Card className="card-clean">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "What I love most is the equal opportunities approach. It doesn't matter where you 
                  come from - if you're willing to work and learn, they'll help you succeed."
                </p>
                <div className="font-semibold">- Lisa, Team Leader</div>
              </CardContent>
            </Card>
            <Card className="card-clean">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "The skills I've learned here go beyond just sales and marketing. I've developed 
                  confidence, leadership abilities, and business acumen I never thought I had."
                </p>
                <div className="font-semibold">- David, Senior Brand Ambassador</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: "url('/assets/services-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Develop Your Future?</h2>
            <p className="text-xl">
              Join our development program and unlock your potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Start Your Development
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/brand-ambassador">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-black">
                  Learn About Brand Ambassador Role
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Develop;