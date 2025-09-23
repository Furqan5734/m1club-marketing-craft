import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["077216048992"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@m1club.com", "abdul@m1club.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["London, United Kingdom"],
      description: "Visit us by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "GMT Time Zone"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact <span className="text-primary-glow">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in">
            Ready to transform your marketing? Let's discuss how M~1 Club can help achieve your business goals
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Get In Touch</CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand-strategy">Brand Strategy & Development</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing Solutions</SelectItem>
                          <SelectItem value="brand-ambassador">Brand Ambassador Programs</SelectItem>
                          <SelectItem value="analytics">Marketing Analytics & Research</SelectItem>
                          <SelectItem value="consulting">Strategic Marketing Consulting</SelectItem>
                          <SelectItem value="campaign-management">Integrated Campaign Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under £5,000</SelectItem>
                          <SelectItem value="5k-15k">£5,000 - £15,000</SelectItem>
                          <SelectItem value="15k-50k">£15,000 - £50,000</SelectItem>
                          <SelectItem value="50k-plus">£50,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-luxury text-lg py-3 group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Let's Start a Conversation</h2>
                <p className="text-lg text-muted-foreground">
                  We're here to help you achieve your marketing goals. Reach out to us through 
                  any of the channels below or fill out the contact form.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-luxury group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="w-8 h-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="font-medium">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
                  <p>Call Abdul Mohsi Shiekh directly for urgent inquiries</p>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open('tel:077216048992')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: 077216048992
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you start a project?",
                answer: "We can typically begin new projects within 1-2 weeks of the initial consultation, depending on project scope and current capacity."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies, tailoring our services to fit your budget and needs."
              },
              {
                question: "What's included in your consulting services?",
                answer: "Our consulting includes marketing audits, strategy development, implementation guidance, and ongoing optimization support."
              },
              {
                question: "How do you measure campaign success?",
                answer: "We use comprehensive analytics to track KPIs such as ROI, conversion rates, brand awareness, lead generation, and customer acquisition costs."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-luxury">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;