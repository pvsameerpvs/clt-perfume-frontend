
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-neutral-600">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold font-serif tracking-widest text-black mb-4">CLE PERFUMES.</h3>
            <p className="max-w-xs font-light">
              Elevating the everyday with scents that define your presence.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-black hover:text-neutral-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-black hover:text-neutral-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-black hover:text-neutral-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black transition-colors">All Fragrances</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Travel Size</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
          <p>© 2026 CLE Perfumes. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
