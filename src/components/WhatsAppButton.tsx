import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Maggy's Kienyeji! I'm interested in your products. Can you help me?"
    );
    window.open(`https://wa.me/254721937682?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-warm shadow-elevated hover:shadow-glow hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-elevated">
        Chat with us
      </span>
    </button>
  );
};
