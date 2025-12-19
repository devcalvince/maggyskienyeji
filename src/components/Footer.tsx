import { Facebook, Instagram, Heart } from 'lucide-react';

/* TikTok SVG Icon (Lucide does not provide one) */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.7 2h3.1c.2 1.9 1.2 3.7 3 4.7v3.2c-1.8.1-3.5-.4-5.1-1.5v6.3a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.2a2.6 2.6 0 1 0 1.9 2.5V2z" />
  </svg>
);

/* Social Media Links */
const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61550794111144',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/maggyskienyejiveggies?igsh=dWVwdXQzYTA4YWc1',
    label: 'Instagram',
  },
  {
    icon: TikTokIcon,
    href: 'https://www.tiktok.com/@maggyskienyeji?_r=1&_t=ZM-92K79unq8Ro',
    label: 'TikTok',
  },
];

/* Quick Links */
const quickLinks = [
  { name: 'Story', href: '#story' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              Maggy's Kienyeji Ltd
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Preserving Kenya’s indigenous heritage by delivering nutritious,
              high-quality dried vegetables that promote health and food security.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>+254 721 937 682</li>
              <li>info@maggyskienyeji.com</li>
              <li>Eldoret, Kenya</li>
              <li>Mon – Sat: 8:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Maggy's Kienyeji Ltd & Autene Softwares.
            All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};
