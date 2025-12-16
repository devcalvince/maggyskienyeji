import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, CartProduct } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (size: { weight: string; price: number }) => {
    const cartProduct: CartProduct = {
      id: `${product.id}-${size.weight}`,
      name: product.name,
      localName: product.localName,
      price: size.price,
      weight: size.weight,
      image: product.image,
      category: product.category,
      description: product.description,
      inStock: product.inStock,
    };
    addToCart(cartProduct);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${size.weight}) has been added to your cart.`,
    });
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`${product.name} - ${product.localName}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-display font-semibold text-lg text-foreground mt-1 mb-0.5">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-1">
          {product.localName}
        </p>
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add Buttons for each size */}
        <div className="space-y-2">
          {product.sizes.map((size) => (
            <div key={size.weight} className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {size.weight}:
                </span>
                <span className="text-lg font-bold text-primary">
                  KSH {size.price}
                </span>
              </div>
              <Button
                size="sm"
                variant="hero"
                onClick={() => handleAddToCart(size)}
                className="group/btn"
              >
                <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                Add
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
