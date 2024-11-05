import { Button } from '@/components/ui/button'

export const CTA = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join us in shaping the future of technology. Let's build something amazing together.
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-white border-white hover:bg-white hover:text-black"
        >
          Contact Us
        </Button>
      </div>
    </section>
  )
} 