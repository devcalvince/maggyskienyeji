import event1 from '@/assets/gallery/event1.jpeg';
import event2 from '@/assets/gallery/event2.jpeg';
import gallery1 from '@/assets/gallery/gallery1.jpeg';
import gallery2 from '@/assets/gallery/gallery2.jpeg';
import gallery3 from '@/assets/gallery/gallery3.jpeg';
import gallery4 from '@/assets/gallery/gallery4.jpeg';
import gallery5 from '@/assets/gallery/gallery5.jpeg';

const events = [
  {
    id: 1,
    image: event1,
    title: 'University of Eldoret Field Day 2024',
    description: 'We were invited by the University of Eldoret to a field day in Turbo to promote the cultivation of indigenous leafy vegetables for nutrition health and food security.',
  },
  {
    id: 2,
    image: event2,
    title: 'Chebara ATC Agriculture Field Day 2024',
    description: 'Connecting with our community and sharing the benefits of indigenous dried vegetables. Engaging with people interested in health and nutrition.',
  },
];

const galleryImages = [
  { id: 1, image: gallery1, alt: 'Fresh vegetables at Maggy\'s Kienyeji' },
  { id: 2, image: gallery2, alt: 'Indigenous vegetables farming' },
  { id: 3, image: gallery3, alt: 'Community engagement' },
  { id: 4, image: gallery4, alt: 'Vegetable processing' },
  { id: 5, image: gallery5, alt: 'Farm activities' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2">
            Our Events & Community Engagement
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore moments from our events promoting nutrition, health, and food security with indigenous vegetables.
          </p>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
