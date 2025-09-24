import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const teamMembers = [
    {
      name: "ABDUL MOHSI SHIEKH",
      image: "/assets/m1-logo.jpg",
      story: "I have always been passionate about creating opportunities for others and building something meaningful. After years in various industries, I discovered the power of direct marketing and decided to build M~1 Club. In my first year, I was amazed at how much we were growing, learning, and traveling while helping brands connect with their customers. I am now running my own consultancy and love coaching others to achieve their potential because I have big goals that include amazing people... could it be you?"
    }
  ];

  const galleryImages = [
    "/assets/hero-marketing.jpg",
    "/assets/services-hero.jpg",
    "/assets/m1-logo.jpg",
    "/assets/hero-marketing.jpg",
    "/assets/services-hero.jpg",
    "/assets/m1-logo.jpg"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Link Marketing Style */}
      <section 
        className="hero-section relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/hero-marketing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Play button like Link Marketing */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold leading-tight uppercase tracking-wider">
              WHAT IS A
              <br />
              <span className="block">BRAND AMBASSADOR?</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              If it's your first time here,
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              WELCOME!
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a results and systems driven Direct Marketing Consultancy based in London. 
                Through our network of independent Brand Ambassadors, we provide promotional services 
                for some of the world's most innovative brands. We aim to increase sales and generate 
                new business on behalf of the brands we represent through face to face interactions 
                with customers, bringing back human contact.
              </p>
              <p>
                Our relentless attitude towards growth has been integral to our success to date. 
                We work closely with our network of independent Brand Ambassadors, mentoring and 
                developing them through our 'Equal Opportunities' business model, providing everyone 
                an equal and fair opportunity to build their own future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <section className="h-64 md:h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/services-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Yes, That's us!</h2>
            <h3 className="text-2xl md:text-3xl font-bold">Hello!</h3>
          </div>

          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="team-card">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="gallery-grid max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg italic text-muted-foreground">
              "Such an amazing place to work. Lots of fun, great people with fantastic mentoring."
            </p>
            <p className="text-lg italic text-muted-foreground">
              "An amazing opportunity for those looking to take charge of their future"
            </p>
            <footer className="text-xl font-bold">— Our Team Members</footer>
          </blockquote>
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
            <h2 className="text-3xl md:text-4xl font-bold">Join the movement</h2>
            <h3 className="text-2xl md:text-3xl font-bold">Become a Brand Ambassador</h3>
            <Link to="/contact">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Start Here
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">GET IN TOUCH</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:admin@m1club.uk" className="text-lg hover:text-primary transition-colors">
                  admin@m1club.uk
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+447311027272" className="text-lg hover:text-primary transition-colors">
                  +44 7311 027272
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href="https://wa.me/447311027272" className="text-lg hover:text-primary transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/contact">
                <Button size="lg" className="btn-primary">
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;