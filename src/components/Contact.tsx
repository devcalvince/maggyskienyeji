import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Truck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.622540715603!2d35.2959418!3d0.5676055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178105f7d5bbfff7%3A0x966ca47b05971f2c!2sMAGGY%27S%20KIENYEJI%20LTD.!5e0!3m2!1sen!2snl!4v1765895018971!5m2!1sen!2snl";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.message && (formData.email || formData.phone)) {
      toast({
        title: "Message Sent!",
        description: "We'll respond within 24 hours.",
      });
      setFormData({ fullName: '', subject: '', email: '', phone: '', message: '' });
    } else {
      toast({
        title: "Please fill required fields",
        description: "Full name, message, and either email or phone is required.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to place an order? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm">
            <h3 className="text-secondary font-display text-xl font-semibold mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Product inquiry"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <Button type="submit" variant="default" size="lg" className="w-full max-w-xs">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                * Email OR phone number required. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Get In Touch Header */}
        <h3 className="text-secondary font-display text-xl font-semibold mb-6 text-center lg:text-left max-w-4xl mx-auto">
          Get In Touch
        </h3>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Visit Us */}
          <div className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Visit Us</h4>
                <p className="text-sm text-muted-foreground">Eldoret, Kenya</p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/BupkE5xLRoiKwMm97" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Call Us</h4>
                <p className="text-sm text-muted-foreground">+254 721 937 682</p>
              </div>
            </div>
            <a href="tel:+254721937682">
              <Button variant="outline" size="sm">
                Call Now
              </Button>
            </a>
          </div>

 <div className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start justify-between gap-3">
  {/* Added min-w-0 utility here to allow the text container to shrink */}
  <div className="flex items-start gap-4 flex-1 min-w-0">
    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
      <Mail className="w-5 h-5 text-secondary" />
    </div>
    {/* Added break-all class to allow the email address to wrap */}
    <div className="overflow-hidden">
      <h4 className="font-semibold text-foreground">Email Us</h4>
      <p className="text-sm text-muted-foreground break-all">info@maggyskienyeji.com</p>
    </div>
  </div>
  <div className="flex-shrink-0 mt-3 sm:mt-0">
    <a href="mailto:info@maggyskienyeji.com">
      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        Send Email
      </Button>
    </a>
  </div>
</div>

          {/* WhatsApp */}
          <div className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Quick responses</p>
                <p className="text-sm text-muted-foreground">Order directly</p>
              </div>
            </div>
            <a 
              href="https://wa.me/254721937682" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Chat Now
              </Button>
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground">Business Hours</h4>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">Closed</span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground">Delivery Information</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-secondary font-medium">Eldoret Town:</span>
                <p className="text-muted-foreground">Free delivery for 2+ items (same-day)</p>
              </div>
              <div>
                <span className="text-secondary font-medium">Outside Eldoret:</span>
                <p className="text-muted-foreground">KSh 100-250 depending on distance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-semibold mb-4 text-secondary">
            Find Us on the Map
          </h3>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maggy's Kienyeji Ltd Location"
              className="w-full"
            />
          </div>
          <p className="text-center mt-3 text-muted-foreground">
            <a 
              href="https://maps.app.goo.gl/BupkE5xLRoiKwMm97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors inline-flex items-center gap-1"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
