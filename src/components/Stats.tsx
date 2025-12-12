import { Users, MapPin, Handshake, Trophy, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Happy Customers' },
  { icon: Globe, value: 1, suffix: '', label: 'Worldwide & Nationwide' },
  { icon: Handshake, value: 10, suffix: '+', label: 'Partners' },
  { icon: Trophy, value: 5, suffix: '', label: 'Awards' },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 gradient-nature">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
        <stat.icon className="w-7 h-7 text-secondary" />
      </div>
      <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
        {stat.label === 'Worldwide & Nationwide' ? 'Global' : `${count}${stat.suffix}`}
      </p>
      <p className="text-primary-foreground/80 text-sm lg:text-base">
        {stat.label}
      </p>
    </div>
  );
};
