
"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const slides = [
    {
      image: "/prfume-bannar.jpeg",
      alt: "Luxury perfume bottle in dark setting",
      tagline: "An impression that lingers",
      headline: "Let Your Scent <br/> Speak First"
    },
    {
      image: "/prfume-bannar2.jpg",
      alt: "Elegant perfume aesthetic",
      tagline: "SOPHISTICATION REDEFINED",
      headline: "Essence of <br/> Pure Luxury"
    },
    {
      image: "/prfume-bannar4.jpg",
      alt: "Modern fragrance collection",
      tagline: "TIMELESS ELEGANCE",
      headline: "Crafted for <br/> The Bold"
    }
  ]

  return (
    <section className="relative w-full px-4 md:px-6 z-0 pb-16">
      <div className="relative w-full h-[70vh] rounded-[2rem] overflow-hidden bg-neutral-900 shadow-2xl">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0 h-full relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover opacity-80"
                    priority={index === 0}
                  />
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                  <div className="flex flex-col items-start gap-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {/* Tag/Pill */}
                    <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-neutral-200 text-sm font-light tracking-wide">
                      {slide.tagline}
                    </div>
                    
                    {/* Main Headline */}
                    <h1 
                      className="text-5xl md:text-7xl lg:text-8xl font-sans font-thin tracking-tight text-white leading-[1.1] uppercase"
                      dangerouslySetInnerHTML={{ __html: slide.headline }}
                    />
                    
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
