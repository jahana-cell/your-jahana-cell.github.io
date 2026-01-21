
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
  farm?: string;
}

interface ProductDetailDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailDialog({ product, open, onOpenChange }: ProductDetailDialogProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 'Shop');
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 90vw, 425px"
              className="object-cover"
            />
            {product.farm && <Badge className="absolute top-2 right-2 text-sm" variant="secondary">{product.farm}</Badge>}
          </div>
          <DialogTitle className="font-headline text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="text-base">{product.description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-3xl font-bold font-mono text-primary">${product.price.toFixed(2)}</p>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleAddToCart} className="w-full" size="lg">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
