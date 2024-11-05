'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center  sm:text-3xl md:text-3xl lg:text-3xl mb-16">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Trusted by Leading Brands & Innovators
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Biology Haters Testimonial */}
          <Card className="relative text-black bg-gray-200 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <Quote className="absolute text-gray-400 w-12 h-12 -top-4 -left-4 rotate-180" />
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-[50%] rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      alt="Biology Haters logo"
                      className="object-contain"
                      src="/images/testimonials/bio-haters.svg"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <hr className="border-gray-300 my-2" />
                <blockquote className="text-black">
                  &quot;RubizCode has truly transformed our reach and operations. Their 360 digital education services have enabled us to focus more on our core teaching while they handle everything from marketing to financial management. The seamless integration of their online exam system with our courses has made a huge difference in our students&apos; experience. RubizCode has been invaluable in helping us maintain high standards and connect with a broader audience. We&apos;re thrilled to be working with a partner who understands education tech so deeply!&quot;
                </blockquote>
                <footer className="text-sm">
                  — Biology Haters Team
                </footer>
              </div>
            </CardContent>
          </Card>

          {/* Secret Files Testimonial */}
          <Card className="relative bg-gray-100 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <Quote className="absolute text-gray-400 w-12 h-12 -top-4 -left-4 rotate-180" />
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-[50%] rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      alt="Secret Files logo"
                      className="object-contain"
                      src="/images/testimonials/secret-files.svg"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <hr className="border-gray-300 my-2" />
                <blockquote className="text-black">
                  &quot;As a provider of competitive exam preparation materials, we needed a partner that could enhance our delivery and visibility. RubizCode&apos;s comprehensive digital services have allowed us to streamline our sales, improve our marketing, and deliver interactive exam experiences through their online exam system. The results speak for themselves — with RubizCode, we&apos;ve reached a wider audience and given our students a more dynamic, effective study experience. They truly understand the needs of EdTech businesses and educators.&quot;
                </blockquote>
                <footer className="text-sm">
                  — Secret Files Team
                </footer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 