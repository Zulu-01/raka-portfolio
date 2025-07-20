import { useState } from "react";
import { MessageSquare, Mail, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link to send email
    const mailtoLink = `mailto:rakaicha1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.open(mailtoLink);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-gradient-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let's Create Something
              <span className="gradient-text block">Amazing Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="glass-card p-10 rounded-2xl hover-lift text-center relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Email</h3>
                  <p className="text-muted-foreground mb-6 text-lg">rakaicha1@gmail.com</p>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-muted-foreground/20 hover:border-primary hover:bg-primary/5 hover-lift animated-border"
                    onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')}
                  >
                    <span className="mr-2">Send Email</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="glass-card p-10 rounded-2xl hover-lift text-center relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">WhatsApp</h3>
                  <p className="text-muted-foreground mb-6 text-lg">+62 812-2392-7487</p>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-muted-foreground/20 hover:border-primary hover:bg-primary/5 hover-lift animated-border"
                    onClick={() => window.open('https://wa.me/6281223927487', '_blank')}
                  >
                    <span className="mr-2">Chat Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-10 rounded-2xl hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-foreground font-medium text-lg">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-14 text-lg rounded-xl border-2 border-muted-foreground/20 focus:border-primary bg-background/50"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground font-medium text-lg">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-14 text-lg rounded-xl border-2 border-muted-foreground/20 focus:border-primary bg-background/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-foreground font-medium text-lg">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="h-14 text-lg rounded-xl border-2 border-muted-foreground/20 focus:border-primary bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-foreground font-medium text-lg">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or ideas..."
                    className="text-lg rounded-xl border-2 border-muted-foreground/20 focus:border-primary bg-background/50 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow hover-lift py-6 text-lg font-medium"
                >
                  <span className="mr-2">Send Message</span>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;