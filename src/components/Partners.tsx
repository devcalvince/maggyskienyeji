import partner1 from '@/assets/partners/partner1.png';
import partner2 from '@/assets/partners/partner2.png';
import partner3 from '@/assets/partners/partner3.jpeg';
import partner4 from '@/assets/partners/partner4.png';
import partner5 from '@/assets/partners/partner5.png';
import partner6 from '@/assets/partners/partner6.png';

const partners = [
  { id: 1, image: partner1, name: 'Partner 1' },
  { id: 2, image: partner2, name: 'Partner 2' },
  { id: 3, image: partner3, name: 'Partner 3' },
  { id: 4, image: partner4, name: 'Partner 4' },
  { id: 5, image: partner5, name: 'FAO' },
  { id: 6, image: partner6, name: 'Partner 6' },
];

export const Partners = () => {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Our Partners
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We are proud to collaborate with these organizations in our mission to promote indigenous vegetables.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-background rounded-xl p-4 lg:p-6 flex items-center justify-center border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-16 lg:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
