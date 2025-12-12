import { Play, Users } from 'lucide-react';

export const CEOVideoSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Users className="w-5 h-5" />
            Leadership
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            CEO at Conference Panel
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our CEO share insights about Maggy's Kienyeji and the future of 
            indigenous vegetables at the conference panel.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-background">
            <video
              controls
              className="w-full aspect-video"
              poster=""
              preload="metadata"
            >
              <source src="/videos/ceo_panel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
          
          <p className="text-center mt-6 text-muted-foreground">
            Our CEO discussing agribusiness entrepreneurship and sustainable farming practices
          </p>
        </div>
      </div>
    </section>
  );
};
