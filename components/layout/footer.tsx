import { Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

const products = [
  { name: 'Daily Topper', link: 'https://dailytopper.com' },
  { name: 'Testiphy', link: 'https://testiphy.com' },
  { name: 'Taalaash', link: 'https://taalaash.com' },
  { name: 'TopperOn', link: 'https://topperon.com' }
]

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="mb-12 overflow-hidden">
          <h2 className="text-[48px] sm:text-[80px] md:text-[120px] font-bold text-gray-200">
            RubizCode
          </h2>
          <hr className="border-t-2 border-gray-200 w-full mt-4 mb-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com/RubizCode.Official" 
                target="_blank"
                className="text-[#1877F2] hover:text-[#0d6efd]"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/rubizcode" 
                target="_blank"
                className="text-[#0A66C2] hover:text-[#004182]"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
             
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-black">© 2024 RubizCode. All Rights Reserved.</p>
              <p className="text-black">RubizCode</p>
              <p className="text-black">+880 1616 001001</p>
              <p className="text-black">33/Kha Eudora Lakewood, 12/A Dhanmondi, Dhaka-1212</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Products</h3>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link 
                      href={product.link}
                      target="_blank" 
                      className="text-sm text-gray-500 hover:text-gray-600"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Company</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Services', link: '/#products' },
                  { name: 'Our Team', link: '/#team' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.link} 
                      className="text-sm text-gray-500 hover:text-gray-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}