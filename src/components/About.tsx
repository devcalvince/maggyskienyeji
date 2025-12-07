import { Award, Users, Leaf, Globe } from 'lucide-react';

const stats = [
  { icon: Award, value: '5+', label: 'Awards Won' },
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Leaf, value: '8+', label: 'Product Varieties' },
  { icon: Globe, value: 'Kenya', label: 'Nationwide Delivery' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Preserving Kenya's <span className="text-primary">Indigenous Heritage</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Maggy's Kienyeji LTD, we are passionate about bringing the authentic taste of 
              Kenya's indigenous vegetables to your table. Our mission is to preserve traditional 
              food culture while promoting nutrition, health, and food security.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Through careful drying and packaging processes, we ensure that our vegetables 
              retain their nutritional value and authentic flavor, making healthy eating 
              convenient for every Kenyan home.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-background rounded-xl shadow-soft">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://maggyskienyeji.com/images/Event2.jpeg"
                alt="Community event"
                className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-soft"
              />
              <img
                src="https://maggyskienyeji.com/images/StaticImage1.jpeg"
                alt="Our products"
                className="w-full h-32 lg:h-40 object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://maggyskienyeji.com/images/StaticImage2.jpeg"
                alt="Product showcase"
                className="w-full h-32 lg:h-40 object-cover rounded-2xl shadow-soft"
              />
              <img
                src="https://maggyskienyeji.com/images/awardi.jpeg"
                alt="Award ceremony"
                className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
