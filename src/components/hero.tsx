"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full px-4 md:px-6 pb-16">
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl">
        
        {/* Background Image */}
        <Image
          src="/prfume-bannar.jpeg"
          alt="Luxury perfume bottle in dark setting"
          fill
          className="object-cover object-bottom"
          priority
          sizes="100vw"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 lg:p-24">
          
          {/* Top: Tagline */}
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-neutral-200 backdrop-blur-md">
              An impression that lingers
            </span>
          </div>

          {/* Center: Main Headline */}
          <div className="flex animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
            <h1 className="max-w-4xl text-5xl font-thin uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
              Let Your Scent <br/> Speak First
            </h1>
          </div>

          {/* Bottom: Call to Action */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button className="group flex h-14 items-center gap-4 rounded-full bg-white pl-8 pr-2 text-black transition-transform hover:scale-105">
              <span className="text-sm font-medium tracking-wide">
                Discover The Scent
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-[-45deg]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}