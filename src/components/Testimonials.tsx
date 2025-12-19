import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Customer from Ireland',
    role: 'International Customer',
    quote: "Hello. Forgot to mention. I received the vegetables and came with them to Ireland. At least I'm sorted for the next one year. Thanks alot",
  },
  {
    name: 'Missionary Mark',
    role: 'Mission Partner',
    quote: "Missionary Mark received the contribution from Maggys kienyeji ltd. He was so excitedly because these mboga will help feed the students we are training. In addition he sent some of it to another bigger market to test Market of these products. He says it is likely to attract a good liking.",
  },
  {
    name: 'Otieno Ochieng',
    role: 'Customer from Kisumu',
    quote: "Maggys Kienyeji has transformed our dining experience! The flavors are authentic and the service is exceptional. I highly recommend trying their signature dishes!",
  },
  {
    name: 'Wanjiku Mwangi',
    role: 'Customer from Nairobi',
    quote: "The value for money at Maggys Kienyeji is outstanding. Their dishes are delicious and affordable!",
  },
  {
    name: 'Kipchirchir Kosgei',
    role: 'Customer from Kericho',
    quote: "Maggys Kienyeji not only serves amazing food but also creates a wonderful dining experience. I can't recommend it enough!",
  },
  {
    name: 'Nyambura Nyokabi',
    role: 'Customer from Nyeri',
    quote: "The atmosphere at Maggys Kienyeji is cozy, and the service is incredibly welcoming. It's my favorite spot for family gatherings!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied customers who have experienced the authentic taste 
            of Maggy's Kienyeji Ltd products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
