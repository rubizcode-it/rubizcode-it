import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function Mission() {
  return (
    <section className="container mx-auto py-20 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:w-1/2">
          <div className="relative col-span-2 h-[300px] md:h-[200px] bg-gray-200 rounded-lg overflow-hidden border-l-4 border-b-4 border-green-500">
            <Image 
              src="/images/missions/mission1.jpg" 
              alt="Product image 1" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
          <div className="relative col-span-1 h-[300px] md:h-[200px] bg-gray-200 rounded-lg overflow-hidden border-l-4 border-b-4 border-purple-500">
            <Image 
              src="/images/missions/mission4.jpg" 
              alt="Product image 2" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
          <div className="relative col-span-1 h-[300px] md:h-[200px] bg-gray-200 rounded-lg overflow-hidden border-l-4 border-b-4 border-red-500">
            <Image 
              src="/images/missions/mission2.jpg" 
              alt="Product image 3" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
          <div className="relative col-span-2 h-[300px] md:h-[200px] bg-gray-200 rounded-lg overflow-hidden border-l-4 border-b-4 border-blue-500">
            <Image 
              src="/images/missions/mission3.jpg" 
              alt="Product image 4" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600">
            We are a dynamic team of developers, designers, and visionaries committed to crafting web and app solutions that elevate businesses. Our approach is simple yet effective: listen, innovate, and deliver.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto bg-white">
              <DialogHeader>
                <DialogTitle>Our Mission & Products</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p className="text-gray-600">
                  At RubizCode, we specialize in delivering cutting-edge digital solutions that transform businesses. Our comprehensive suite of services includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Web Development:</strong> Custom websites, e-commerce solutions, and web applications built with the latest technologies.</li>
                  <li><strong>Mobile Applications:</strong> Native and cross-platform mobile apps that provide seamless user experiences.</li>
                  <li><strong>UI/UX Design:</strong> Intuitive and engaging user interfaces that enhance user satisfaction.</li>
                  <li><strong>Cloud Solutions:</strong> Scalable and secure cloud infrastructure implementation and management.</li>
                  <li><strong>Digital Marketing:</strong> Strategic digital marketing services to boost your online presence.</li>
                </ul>
                <p className="text-gray-600">
                  Our commitment to excellence and innovation drives us to deliver solutions that not only meet but exceed our clients&apos; expectations. We believe in building long-term partnerships and helping businesses thrive in the digital age.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
} 