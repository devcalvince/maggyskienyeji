import { Award, Users, Leaf, Globe } from 'lucide-react';

const stats = [
  { icon: Award, value: '5+', label: 'Awards Won' },
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Leaf, value: '8+', label: 'Product Varieties' },
  { icon: Globe, value: 'Kenya', label: 'Nationwide Delivery' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Preserving Kenya's <span className="text-primary">Indigenous Heritage</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            At Maggy's Kienyeji Ltd, we are passionate about bringing the authentic taste of 
            Kenya's indigenous vegetables to your table. Our mission is to preserve traditional 
            food culture while promoting nutrition, health, and food security.
          </p>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
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
      </div>
    </section>
  );
};
