
import Link from "next/link"
import Image from "next/image"
import { 
  User, 
  Heart, 
  ShoppingBag, 
  Search, 
  MapPin, 
  Zap,
  Globe 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  return (
    <header className="w-full bg-white z-50 relative">
      {/* Top Banner Ticker */}
      {/* Top Banner Ticker */}
      <div className="bg-black text-white text-[10px] md:text-xs py-2 overflow-hidden flex">
        <div className="animate-marquee whitespace-nowrap flex min-w-full">
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          
          {/* Duplicate for seamless loop */}
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
          <span className="mx-4">RAMADAN SPECIAL: 30% OFF ON LUXURY PERFUMES ✨ NOW AVAILABLE UNDER 49!</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col items-center">
               <Image src="/logo-cle-header.png" alt="CLE Perfumes" width={100} height={40} className="object-contain w-auto h-10" priority />
           <span className="text-[10px] tracking-[0.3em] uppercase mt-1">Perfumes</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 w-full max-w-2xl relative">
            <Input 
              type="search" 
              placeholder="Search for product or brand" 
              className="w-full rounded-full pl-6 pr-12 h-12 border-neutral-300 focus-visible:ring-black/5 text-neutral-600 font-light"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 flex-shrink-0 text-neutral-600">
            <Link href="#" className="flex flex-col items-center gap-1 hover:text-black transition-colors">
              <User className="h-5 w-5" />
              <span className="text-[10px] uppercase tracking-wide">Sign In</span>
            </Link>

            <Link href="#" className="flex flex-col items-center gap-1 hover:text-black transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-[10px] uppercase tracking-wide">Wishlist</span>
            </Link>

            <Link href="#" className="flex flex-col items-center gap-1 hover:text-black transition-colors relative">
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-3 w-3 p-0 flex items-center justify-center bg-black text-white rounded-full text-[8px]">0</Badge>
              </div>
              <span className="text-[10px] uppercase tracking-wide">My Bag</span>
            </Link>

            <div className="h-8 w-px bg-neutral-200 mx-2 hidden sm:block"></div>

            <Link href="#" className="flex flex-col items-center gap-1 text-green-600 hover:text-green-700 transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="text-[10px] uppercase tracking-wide">Find Store</span>
            </Link>

            
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-neutral-100 hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between py-4 text-xs font-medium tracking-widest uppercase text-neutral-600">
            <li>
              <Link href="#" className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700">
                <Zap className="h-4 w-4 fill-current" />
                Special Deals
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Men</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Women</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Shop By Brands</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Best Sellers</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Accessories</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Home & Body Care</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Inspired Creations</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="#">Fragrance Oils</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
