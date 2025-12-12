import { Play, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Watch Our Story
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            See How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our promotional video to learn more about Maggy's Kienyeji and our commitment 
            to bringing you the best dried indigenous vegetables.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-background">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="/videos/promotion_video.mp4"
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/promotion_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-primary/40 flex items-center justify-center cursor-pointer transition-all hover:bg-primary/30"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors text-foreground"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Video Caption */}
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Learn about our process and see the quality behind every packet of Maggy's Kienyeji vegetables
          </p>
        </div>
      </div>
    </section>
  );
};
