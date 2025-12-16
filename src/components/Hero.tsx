import { ArrowRight, Truck, Hourglass, Award, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';
import workersProcessing from '@/assets/carousel/workers_processing.jpg';

const features = [
  { icon: Truck, label: 'Free Shipping', desc: 'On orders above 50 pkts' },
  { icon: Hourglass, label: 'Long Shelf Life', desc: 'Well packaged products' },
  { icon: Award, label: 'Superior Quality', desc: 'Premium ingredients' },
  { icon: HeartHandshake, label: '24/7 Support', desc: 'Always here for you' },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image Container with object-contain (fits image entirely) */}
      <div className="absolute inset-0">
        
        {/* The image container uses w-full h-full and object-contain */}
        <div className="w-full h-full flex items-center justify-center bg-primary/95">
          <img 
            src={workersProcessing} 
            alt="Workers Processing Products" 
            loading="eager" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* The overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      {/* Main Content (Logo, Text, Buttons, Features) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img 
              src={logo} 
              alt="Maggy's Kienyeji Ltd Logo" 
              className="h-32 lg:h-40 w-auto drop-shadow-2xl"
            />
          </div>

          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-secondary/30">
            🌿 Premium Dried Indigenous Vegetables
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100 leading-tight">
            Welcome to <br />
            <span>Maggy's Kienyeji Ltd</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up animation-delay-200 max-w-xl mx-auto">
            Discover the authentic taste of Kenya with our premium dried indigenous vegetables. 
            Nutrient-rich, convenient, and delicious.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <Button variant="warm" size="xl" asChild>
              <a href="#products">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 animate-fade-up animation-delay-400">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-primary/70 backdrop-blur-md rounded-xl p-4 lg:p-6 text-center border border-primary-foreground/20 hover:bg-primary/80 transition-all duration-300 shadow-lg"
            >
              <feature.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-primary-foreground mb-1">
                {feature.label}
              </h3>
              <p className="text-sm text-primary-foreground/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};