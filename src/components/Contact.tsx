import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 721 937 682',
    href: 'tel:+254721937682',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'maggyskienyeji@gmail.com',
    href: 'mailto:maggyskienyeji@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kimumu, Eldoret, Kenya',
    href: 'https://maps.app.goo.gl/BupkE5xLRoiKwMm97',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Sat: 8AM - 6PM',
    href: '#',
  },
];

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7574!2d35.269779!3d0.514277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTEuNCJOIDM1wrAxNicxMS4yIkU!5e0!3m2!1sen!2ske!4v1234567890";

export const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 gradient-nature text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 mb-6">
              Contact Us
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Have questions or want to place an order? We'd love to hear from you. 
              Reach out through any of the channels below.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-center">
            <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10 mb-8">
              <h3 className="font-display text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Get updates about our latest products, special offers, and health tips 
                delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <Button variant="warm" size="lg" type="submit">
                  <Send className="w-4 h-4" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="font-display text-2xl font-bold mb-6 text-center">
            Find Us on the Map
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-primary-foreground/10">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maggy's Kienyeji Location"
              className="w-full"
            />
          </div>
          <p className="text-center mt-4 text-primary-foreground/80">
            <a 
              href="https://maps.app.goo.gl/BupkE5xLRoiKwMm97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors underline"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
