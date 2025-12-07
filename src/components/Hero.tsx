import { ArrowRight, Leaf, Award, Truck, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Truck, label: 'Free Shipping', desc: 'On orders above 50 pkts' },
  { icon: Leaf, label: 'Always Fresh', desc: 'Well packaged products' },
  { icon: Award, label: 'Superior Quality', desc: 'Premium ingredients' },
  { icon: HeartHandshake, label: '24/7 Support', desc: 'Always here for you' },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-nature opacity-95" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-secondary/30">
            🌿 Premium Dried Indigenous Vegetables
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100 leading-tight">
            Welcome to <br />
            <span className="text-secondary">Maggy's Kienyeji</span>
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
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="bg-background/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center border border-primary-foreground/10 hover:bg-background/20 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-primary-foreground mb-1">
                {feature.label}
              </h3>
              <p className="text-sm text-primary-foreground/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
