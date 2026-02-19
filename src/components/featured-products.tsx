
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Dark Sage",
    category: "Signature Collection",
    price: 85,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2540&auto=format&fit=crop",
    scent: "Earthy & Fresh",
    isNew: true
  },
  {
    id: 2,
    name: "Noir Woods",
    category: "Reserve Blend",
    price: 120,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2569&auto=format&fit=crop",
    scent: "Woody & Spicy",
    isNew: false
  },
  {
    id: 3,
    name: "Obsidian Amber",
    category: "Signature Collection",
    price: 95,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2670&auto=format&fit=crop",
    scent: "Warm & Rich",
    isNew: false
  },
  {
    id: 4,
    name: "Steel Vetiver",
    category: "Modern Classic",
    price: 85,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2653&auto=format&fit=crop",
    scent: "Cool & Crisp",
    isNew: true
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900">
              The Collection
            </h2>
            <p className="text-neutral-500 max-w-sm font-light">
              Carefully curated scents designed to evoke emotion and memory.
            </p>
          </div>
          <Button variant="link" className="text-black underline-offset-4 hover:text-neutral-600 px-0">
            View All Scents
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group border-none shadow-none bg-transparent rounded-none overflow-visible">
              <CardContent className="p-0 relative aspect-[4/5] bg-neutral-50 overflow-hidden mb-4 rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-white text-black hover:bg-neutral-100 uppercase text-[10px] tracking-widest px-2 py-1 rounded-none shadow-sm border border-neutral-100">
                    New Arrival
                  </Badge>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-sm">
                     <Heart className="h-4 w-4" />
                   </Button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
                   <Button className="w-full bg-white text-black hover:bg-neutral-100 backdrop-blur-sm shadow-lg rounded-none h-11 text-xs uppercase tracking-widest font-medium group-hover:delay-75 transition-all">
                     Add to Bag — ${product.price}
                   </Button>
                </div>
              </CardContent>
              
              <CardFooter className="p-0 flex flex-col items-start gap-1">
                <div className="flex justify-between w-full items-start">
                   <div>
                      <h3 className="font-serif text-lg text-neutral-900 leading-none">{product.name}</h3>
                      <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{product.scent}</p>
                   </div>
                   <span className="font-medium text-sm text-neutral-900 hidden md:block">${product.price}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
