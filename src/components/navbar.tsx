
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-transparent pt-4 pb-2">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-transparent pl-0 text-neutral-900 group">
              <span className="text-sm font-medium">Menu</span>
              <Menu className="h-5 w-5 stroke-[1.5] group-hover:scale-110 transition-transform" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[400px] bg-neutral-900 text-white border-neutral-800">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-3xl text-white">CLE</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-12">
              <Link href="#" className="text-2xl font-light hover:text-neutral-400 transition-colors">
                Collections
              </Link>
              <Link href="#" className="text-2xl font-light hover:text-neutral-400 transition-colors">
                Our Story
              </Link>
              <Link href="#" className="text-2xl font-light hover:text-neutral-400 transition-colors">
                Journal
              </Link>
              <Link href="#" className="text-2xl font-light hover:text-neutral-400 transition-colors">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          {/* Replaced simpler text with the requested style. 
              The reference image has a logo icon + text. 
              Using text for now as no SVG provided, styled to match generally. */}
          <span className="text-2xl font-serif tracking-tight text-neutral-900">
            CLE Perfumes
          </span>
        </Link>

        {/* Right: Action Button */}
        <Button className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-6 text-xs tracking-widest uppercase font-medium">
          Explore
        </Button>
      </div>
    </nav>
  )
}
