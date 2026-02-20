
"use client"

import { useState } from "react"
import { Product } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  Minus, 
  Plus, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  CreditCard,
  Heart
} from "lucide-react"

export function ProductDisplay({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
  const [activeImage, setActiveImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    e.currentTarget.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <div className="min-h-screen bg-white pb-20 pt-8">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-20">
          
          {/* Left Column: Images */}
          <div className="space-y-6">
            <div 
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-50 cursor-zoom-in group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              style={{
                backgroundImage: isZoomed ? `url(${activeImage})` : 'none',
                backgroundSize: '200%',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className={`object-cover transition-opacity duration-300 ${isZoomed ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
              <div className="absolute top-4 right-4 z-10">
                 <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white text-neutral-800 shadow-sm backdrop-blur-sm">
                   <Heart className="h-5 w-5" />
                 </Button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-black' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
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

        </div>

        {/* Reviews Section */}
        <div className="border-t border-neutral-200 pt-16 mb-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-serif mb-4">Reviews</h2>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl font-light text-neutral-900">{product.rating}</span>
                <div className="flex flex-col">
                  <div className="flex text-black mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-black' : 'text-neutral-200 fill-transparent'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-500">{product.reviews.length} Reviews</span>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full border-neutral-300">
                Write a Review
              </Button>
            </div>
            
            <div className="md:w-2/3 space-y-8">
              {product.reviews.length > 0 ? (
                product.reviews.map(review => (
                  <div key={review.id} className="pb-8 border-b border-neutral-100 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center font-serif text-neutral-500 font-medium">
                           {review.user.charAt(0)}
                         </div>
                         <div>
                           <div className="font-medium text-neutral-900">{review.user}</div>
                           <div className="text-xs text-neutral-400">{review.date}</div>
                         </div>
                       </div>
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-black text-black' : 'text-neutral-200 fill-transparent'}`} />
                          ))}
                       </div>
                    </div>
                    <p className="text-neutral-600 font-light mt-4 leading-relaxed pl-14">
                      {review.content}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-neutral-50 rounded-2xl">
                  <p className="text-neutral-500">No reviews yet. Be the first to share your thoughts!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="border-t border-neutral-200 pt-16">
          <h2 className="text-3xl font-serif mb-10 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link href={`/product/${p.slug}`} key={p.id} className="block group">
                 <div className="bg-neutral-50 aspect-[4/5] relative mb-4 overflow-hidden rounded-sm">
                   <Image 
                     src={p.images[0]} 
                     alt={p.name} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
                 <div className="flex justify-between items-start">
                   <div>
                      <h3 className="font-serif text-lg leading-none">{p.name}</h3>
                      <p className="text-xs text-neutral-500 mt-1">{p.scent}</p>
                   </div>
                   <span className="text-sm font-medium">${p.price}</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
