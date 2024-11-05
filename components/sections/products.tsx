'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from '@/lib/constants/products'
import {  Product } from '@/types'

interface ProductCardProps {
  product: Product
  index: number
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const colors = ['bg-red-500', 'bg-purple-500', 'bg-green-500', 'bg-blue-500']
  
  return (
    <Card className={`w-[90%] ${colors[index]} text-white`}>
      <CardContent className="p-6 flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
          <Image
            src={`/placeholder.svg?height=300&width=300`}
            alt={`${product.name} image`}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className={`md:w-1/2 ${
          index % 2 === 0 ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6'
        }`}>
          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
          <p className="mb-4">{product.description}</p>
          <Button 
            variant="secondary"
            onClick={() => window.open(`/products/${product.name.toLowerCase()}`, '_blank')}
          >
            Try Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Products() {
  return (
    <section className={`w-full bg-gray-100 py-20 px-4 md:px-6 lg:px-8 `}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="space-y-12">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 