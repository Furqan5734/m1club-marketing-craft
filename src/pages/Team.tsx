import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Abdul Mohsi Shiekh",
      role: "Director & Founder",
      bio: "Visionary leader with extensive experience in marketing strategy and business development. Abdul founded M~1 Club with the mission to revolutionize how brands connect with their audiences.",
      specialties: ["Strategic Leadership", "Business Development", "Brand Strategy", "Market Analysis"],
      email: "abdul@m1club.com",
      phone: "077216048992"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Digital Marketing",
      bio: "Digital marketing expert with over 8 years of experience in creating compelling online campaigns that drive engagement and conversions.",
      specialties: ["Digital Strategy", "Social Media", "Content Marketing", "SEO/SEM"],
      email: "sarah@m1club.com"
    },
    {
      name: "Michael Chen",
      role: "Brand Ambassador Coordinator",
      bio: "Experienced team leader who manages our network of brand ambassadors, ensuring every campaign is executed with precision and professionalism.",
      specialties: ["Team Management", "Event Coordination", "Training", "Quality Assurance"],
      email: "michael@m1club.com"
    },
    {
      name: "Emma Thompson",
      role: "Creative Director",
      bio: "Award-winning creative professional who brings brands to life through innovative design and compelling storytelling.",
      specialties: ["Creative Strategy", "Brand Design", "Campaign Development", "Visual Identity"],
      email: "emma@m1club.com"
    },
    {
      name: "David Rodriguez",
      role: "Analytics Manager",
      bio: "Data-driven analyst who transforms complex metrics into actionable insights that drive campaign optimization and business growth.",
      specialties: ["Data Analysis", "Performance Tracking", "ROI Optimization", "Market Research"],
      email: "david@m1club.com"
    },
    {
      name: "Lisa Park",
      role: "Client Relations Manager",
      bio: "Dedicated client advocate who ensures every client receives exceptional service and support throughout their journey with M~1 Club.",
      specialties: ["Client Management", "Project Coordination", "Communication", "Customer Success"],
      email: "lisa@m1club.com"
    }
  ];

  const ambassadorProgram = [
    "Comprehensive Training Program",
    "Professional Development Opportunities",
    "Flexible Working Arrangements",
    "Performance-Based Incentives",
    "Equal Opportunity Environment",
    "Ongoing Support & Mentorship"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-primary-glow">Team</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in">
            Meet the passionate professionals behind M~1 Club's success and discover how you can join our growing family
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="card-luxury group">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      {member.email && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>{member.email}</span>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                      <div className="flex justify-center pt-2">
                        <Linkedin className="w-5 h-5 text-primary hover:text-primary-glow cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Program Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Join Our Brand Ambassador Network</h2>
              <p className="text-lg text-muted-foreground">
                Be part of our dynamic team and help bring brands to life through meaningful customer interactions.
                Our Equal Opportunities business model ensures everyone has a fair chance to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ambassadorProgram.map((benefit, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-card text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <h3 className="font-semibold">{benefit}</h3>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What We Look For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold">Personal Qualities:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Excellent communication skills</li>
                    <li>• Professional appearance and attitude</li>
                    <li>• Enthusiasm and energy</li>
                    <li>• Reliability and punctuality</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Experience:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Customer service background (preferred)</li>
                    <li>• Sales or marketing experience (advantageous)</li>
                    <li>• Event or promotional work (beneficial)</li>
                    <li>• Willingness to learn and develop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Our Culture</h2>
            <p className="text-lg text-muted-foreground">
              At M~1 Club, we believe that our people are our greatest asset. We foster a culture of growth, 
              collaboration, and excellence where everyone can thrive and reach their full potential.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Growth Mindset",
                  description: "We invest in continuous learning and development for all team members."
                },
                {
                  title: "Collaborative Spirit",
                  description: "We work together to achieve shared goals and celebrate collective success."
                },
                {
                  title: "Equal Opportunities",
                  description: "We provide fair opportunities for everyone to build their future with us."
                }
              ].map((value, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Whether you're looking to advance your career or start fresh in marketing, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-luxury text-lg px-8 py-4 group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;