import { Users, MapPin, Handshake, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: MapPin, value: '3', label: 'Branches' },
  { icon: Handshake, value: '10+', label: 'Partners' },
  { icon: Trophy, value: '5', label: 'Awards' },
];

export const Stats = () => {
  return (
    <section className="py-16 lg:py-20 gradient-nature">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
