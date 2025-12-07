import { Trophy } from 'lucide-react';

const awards = [
  {
    title: 'Pacesetters Awards Ceremony East Africa',
    description: 'Winner in Pacesetter Vegetable Value Addition category',
    image: 'https://maggyskienyeji.com/images/awardi.jpeg',
  },
  {
    title: 'Pacesetters Trophy',
    description: 'Excellence in value-added indigenous vegetables',
    image: 'https://maggyskienyeji.com/images/Award3.jpeg',
  },
  {
    title: 'Kalenjin Awards Trophy',
    description: 'Processing and manufacturing of indigenous vegetables',
    image: 'https://maggyskienyeji.com/images/award1.jpeg',
  },
  {
    title: 'Top Agribusiness Innovator - EldoHub',
    description: 'Commitment to innovation and sustainability',
    image: 'https://maggyskienyeji.com/images/eldohub_award.jpeg',
  },
];

export const Awards = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            Achievements
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground text-lg">
            We are proud to have received various awards for our excellence in 
            delivering quality products and services.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
