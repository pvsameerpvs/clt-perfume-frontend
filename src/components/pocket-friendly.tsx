"use client"
import { useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product/product-card"
import { ChevronRight } from "lucide-react"

export function PocketFriendly() {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)

  const pricePoints = [49, 99, 149, 199]

  const filteredProducts = selectedPrice 
    ? products.filter(p => p.price <= selectedPrice)
    : []

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full bg-[#E51919] rounded-[1rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm h-auto lg:h-[200px]">
          {/* Left Text */}
          <div className="flex flex-col text-center lg:text-left shrink-0">
            <h2 className="text-4xl md:text-5xl font-black tracking-widest text-[#111] uppercase leading-none">Pocket</h2>
            <p className="text-white text-sm md:text-base tracking-[0.1em] uppercase font-semibold mt-2 mb-3">Friendly Purchase</p>
            <div className="w-16 h-1 bg-white mx-auto lg:mx-0"></div>
          </div>

          {/* Cards */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 pb-4 lg:pb-0 w-full lg:w-auto items-center scrollbar-hide snap-x">
            {pricePoints.map((price) => (
              <button
                key={price}
                onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                className={`snap-center shrink-0 w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-white rounded-[1.5rem] flex flex-col items-center justify-center transition-all ${selectedPrice === price ? 'ring-4 ring-black scale-105 shadow-xl' : 'hover:scale-105 shadow-sm'}`}
              >
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black">Under</span>
                <span className="text-3xl md:text-5xl font-serif font-bold text-black my-0.5 md:my-1 leading-none">{price}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black">AED</span>
              </button>
            ))}
            
            <button className="shrink-0 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors ml-2 hidden md:flex cursor-pointer hover:scale-105">
                <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Filtered Products Dropdown */}
        {selectedPrice && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
              <h3 className="text-2xl font-serif font-medium text-neutral-900">
                Fragrances Under {selectedPrice} AED
              </h3>
              <button onClick={() => setSelectedPrice(null)} className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                Clear Filter
              </button>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-100">
                <p className="text-neutral-500 text-lg font-serif">No fragrances found under {selectedPrice} AED.</p>
                <button onClick={() => setSelectedPrice(null)} className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#E51919] hover:text-red-700">Explore Collection</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
