import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, Mail, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#about' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+254721937682" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+254 721 937 682</span>
            </a>
            <a href="mailto:maggyskienyeji@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">maggyskienyeji@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>3-7 Business days delivery</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/#home" className="flex items-center gap-3">
              <img src={logo} alt="Maggy's Kienyeji Ltd Logo" className="h-12 lg:h-14 w-auto" />
              <h1 className="text-xl lg:text-2xl font-display font-bold text-primary hidden sm:block">
                Maggy's Kienyeji Ltd
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-80" : "max-h-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4 border-t border-border">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
