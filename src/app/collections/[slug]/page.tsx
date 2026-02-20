import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft } from "lucide-react"

// Hardcoded collection data since it's not in products.ts
const COLLECTIONS = {
  "mens": {
    title: "Best Men's Collection",
    subtitle: "For Him",
    description: "Discover our most sought-after men's fragrances. Bold, sophisticated, and unmistakably masculine.",
    image: "/curated-perfume-men.png",
    filteredProductIds: ["4", "5", "1"] // Midnight Smock, Noir de Soir, Breath
  },
  "womens": {
    title: "Best Women's Collection",
    subtitle: "For Her",
    description: "An elegant selection of our finest women's perfumes. Delicate, romantic, and beautifully complex.",
    image: "/curated-pefume-banner.png",
    filteredProductIds: ["2", "3", "6"] // Elan, First Dance, Tears of Love
  },
  "deals": {
    title: "Best Deals & Sets",
    subtitle: "Exclusive Offers",
    description: "Curated gift sets and limited-time offers on our signature scents. Perfect for gifting or treating yourself.",
    image: "/best-deals-sets-2.png",
    filteredProductIds: ["1", "2", "6"] // Using the 'isNew' items for now
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  if (!(slug in COLLECTIONS)) {
    notFound()
  }

  const collection = COLLECTIONS[slug as keyof typeof COLLECTIONS]
  const collectionProducts = products.filter(p => collection.filteredProductIds.includes(p.id))

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Collection Hero */}
      <div className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center mb-16">
        <Image 
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 text-white border-white/30 tracking-widest uppercase bg-transparent hover:bg-transparent">
            {collection.subtitle}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            {collection.title}
          </h1>
          <p className="text-white/80 font-light text-lg">
            {collection.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Back Link */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors group"
          >
            <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
               <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <span className="font-medium tracking-wide uppercase text-xs">Back to Home</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collectionProducts.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id} className="block group">
              <Card className="border-none shadow-none bg-transparent rounded-none overflow-visible h-full">
                <CardContent className="p-0 relative aspect-[4/5] bg-neutral-50 overflow-hidden mb-4 rounded-sm">
                  {/* Primary Image */}
                  <div className="absolute inset-0 transition-opacity duration-500 z-10 group-hover:opacity-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Secondary Image (Hover) */}
                  <div className="absolute inset-0 transition-opacity duration-500 z-0">
                     <Image
                      src={product.images[1] || product.images[0]}
                      alt={`${product.name} alternate view`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 z-20 bg-white text-black hover:bg-neutral-100 uppercase text-[10px] tracking-widest px-2 py-1 rounded-none shadow-sm border border-neutral-100">
                      New Arrival
                    </Badge>
                  )}

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-sm">
                       <Heart className="h-4 w-4" />
                     </Button>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
                     <Button className="w-full bg-white text-black hover:bg-neutral-100 backdrop-blur-sm shadow-lg rounded-none h-11 text-xs uppercase tracking-widest font-medium group-hover:delay-75 transition-all">
                       Add to Bag — ${product.price}
                     </Button>
                  </div>
                </CardContent>
                
                <CardFooter className="p-0 flex flex-col items-start gap-1">
                  <div className="flex justify-between w-full items-start">
                     <div>
                        <h3 className="font-serif text-lg text-neutral-900 leading-none group-hover:text-neutral-600 transition-colors">{product.name}</h3>
                        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{product.scent}</p>
                     </div>
                     <span className="font-medium text-sm text-neutral-900 hidden md:block">${product.price}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {collectionProducts.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            No products found in this collection.
          </div>
        )}
      </div>
    </div>
  )
}
