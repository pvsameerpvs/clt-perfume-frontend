"use client"

import { useState } from "react"
import { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Star, 
  Minus, 
  Plus, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  CreditCard 
} from "lucide-react"

export function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-3 uppercase tracking-widest text-[10px] bg-neutral-100 text-neutral-600 rounded-sm px-2">
          {product.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 mb-2">{product.name}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-black">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-black' : 'text-neutral-300 fill-transparent'}`} />
            ))}
            <span className="text-sm font-medium ml-2">{product.rating}</span>
          </div>
          <span className="text-sm text-neutral-400">|</span>
          <span className="text-sm text-neutral-500">{product.reviews.length} Reviews</span>
        </div>

        <div className="text-2xl font-light text-neutral-900 mb-6">${product.price}</div>

        <div className="prose prose-neutral text-neutral-600 font-light mb-8">
          <p>{product.description}</p>
        </div>

        {/* Tags/Notes */}
        <div className="flex flex-wrap gap-2 mb-8">
          {product.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-xs uppercase tracking-wide text-neutral-600 rounded-full">
                {tag}
              </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-6 lg:mt-auto">
        {/* Quantity */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-wide">Quantity</span>
          <div className="flex items-center border border-neutral-200 rounded-full">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10 flex items-center justify-center hover:bg-neutral-50 rounded-l-full transition-colors"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="h-10 w-10 flex items-center justify-center hover:bg-neutral-50 rounded-r-full transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="h-14 flex-1 rounded-full border-neutral-300 hover:bg-neutral-50 uppercase tracking-widest text-xs font-medium">
            Add to Cart
          </Button>
          <Button className="h-14 flex-1 rounded-full bg-black hover:bg-neutral-800 text-white uppercase tracking-widest text-xs font-medium">
            Buy Now
          </Button>
        </div>

        {/* Delivery Box */}
        <div className="grid grid-cols-2 gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-sm">
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="font-medium text-neutral-900">Free Delivery</div>
              <div className="text-neutral-500 text-xs mt-1">On orders over $200</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RotateCcw className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="font-medium text-neutral-900">Easy Returns</div>
              <div className="text-neutral-500 text-xs mt-1">30 days return policy</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="font-medium text-neutral-900">Secure Payment</div>
              <div className="text-neutral-500 text-xs mt-1">Encrypted transaction</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard className="h-5 w-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="font-medium text-neutral-900">Payment Options</div>
              <div className="text-neutral-500 text-xs mt-1">All cards accepted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
