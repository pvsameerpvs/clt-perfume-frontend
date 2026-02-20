import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Collections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900 mb-4">
            Curated Selections
          </h2>
          <p className="text-neutral-500 max-w-lg font-light">
            Discover our most sought-after fragrances, tailored for every preference and occasion. Shop by exclusive collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[600px]">
          {/* Best Men's Collection */}
          <Link href="/collections/mens" className="relative group overflow-hidden rounded-2xl block h-full w-full">
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/curated-perfume-men-2.jpeg"
                 alt="Best Men's Collection"
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-10">
               <span className="text-white/70 text-xs font-medium uppercase tracking-[0.2em] mb-3">For Him</span>
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-none">Best Men's<br/>Collection</h3>
               <div className="flex items-center text-white text-sm group-hover:text-white transition-colors overflow-hidden">
                  <span className="uppercase tracking-widest font-medium border-b border-white/30 pb-1 group-hover:border-white transition-colors">Explore</span>
                  <ArrowRight className="h-4 w-4 ml-3 transition-transform group-hover:translate-x-2" />
               </div>
            </div>
          </Link>
          
          {/* Best Women's Collection */}
          <Link href="/collections/womens" className="relative group overflow-hidden rounded-2xl block h-full w-full">
             <div className="absolute inset-0 z-0">
               <Image 
                 src="/curated-pefume-banner-1.jpeg"
                 alt="Best Women's Collection"
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-10">
               <span className="text-white/70 text-xs font-medium uppercase tracking-[0.2em] mb-3">For Her</span>
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-none">Best Women's<br/>Collection</h3>
               <div className="flex items-center text-white text-sm group-hover:text-white transition-colors overflow-hidden">
                  <span className="uppercase tracking-widest font-medium border-b border-white/30 pb-1 group-hover:border-white transition-colors">Explore</span>
                  <ArrowRight className="h-4 w-4 ml-3 transition-transform group-hover:translate-x-2" />
               </div>
            </div>
          </Link>

          {/* Best Deals */}
          <Link href="/collections/deals" className="relative group overflow-hidden rounded-2xl block h-full w-full">
             <div className="absolute inset-0 z-0">
               <Image 
                 src="/best-deals-sets.png"
                 alt="Best Deals"
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-10">
               <span className="text-white/70 text-xs font-medium uppercase tracking-[0.2em] mb-3">Exclusive Offers</span>
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-none">Best Deals<br/>& Sets</h3>
               <div className="flex items-center text-white text-sm group-hover:text-white transition-colors overflow-hidden">
                  <span className="uppercase tracking-widest font-medium border-b border-white/30 pb-1 group-hover:border-white transition-colors">Shop Now</span>
                  <ArrowRight className="h-4 w-4 ml-3 transition-transform group-hover:translate-x-2" />
               </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
