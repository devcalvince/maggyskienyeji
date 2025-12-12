import { ArrowRight, Leaf, Award, Truck, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.jpg';
import adPicture from '@/assets/carousel/ad_picture.jpg';
import internationalProduct from '@/assets/carousel/international_product.jpg';
import priceList from '@/assets/carousel/price_list.jpg';
import orderPic from '@/assets/carousel/order_pic.jpg';
import processingProducts from '@/assets/carousel/processing_products.jpg';
import workersProcessing from '@/assets/carousel/workers_processing.jpg';

const carouselImages = [
  { src: adPicture, alt: 'Maggy\'s Kienyeji Premium Products' },
  { src: internationalProduct, alt: 'International Shipping Available' },
  { src: priceList, alt: 'Product Price List' },
  { src: orderPic, alt: 'Order Premium Dried Veggies' },
  { src: processingProducts, alt: 'Product Processing' },
  { src: workersProcessing, alt: 'Workers Processing Products' },
];

const features = [
  { icon: Truck, label: 'Free Shipping', desc: 'On orders above 50 pkts' },
  { icon: Leaf, label: 'Always Fresh', desc: 'Well packaged products' },
  { icon: Award, label: 'Superior Quality', desc: 'Premium ingredients' },
  { icon: HeartHandshake, label: '24/7 Support', desc: 'Always here for you' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors p-3 rounded-full text-primary-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors p-3 rounded-full text-primary-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img 
              src={logo} 
              alt="Maggy's Kienyeji Logo" 
              className="h-32 lg:h-40 w-auto drop-shadow-2xl"
            />
          </div>

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
          {features.map((feature) => (
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
