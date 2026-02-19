
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full px-4 md:px-6 z-0 pb-16">
      <div className="relative w-full h-[85vh] rounded-[2rem] overflow-hidden bg-neutral-900 shadow-2xl">
        {/* Background Image: Person holding bottle concept */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2569&auto=format&fit=crop"
            alt="Luxury perfume bottle in dark setting"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            {/* Tag/Pill */}
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-neutral-200 text-sm font-light tracking-wide">
              An impression that lingers
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-thin tracking-tight text-white leading-[1.1] uppercase">
              Let Your Scent <br/> Speak First
            </h1>
            
            {/* Call to Action Button */}
             <Button 
                className="bg-white text-black hover:bg-neutral-100 rounded-full h-14 pl-8 pr-2 flex items-center justify-between gap-4 min-w-[200px] group transition-all duration-300"
              >
                <span className="text-sm font-medium tracking-wide">Discover The Scent</span>
                <div className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
