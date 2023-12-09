import Image from 'next/image'
import React from 'react'

function MenuItem() {
  return (
    <div className="bg-gray-200 rounded-lg p-4 text-center hover:bg-white shadow-lg hover:shadow-black/25 transition-all h-full mb-8 md:mb-0">
        <div className='text-center'>
            <Image 
                src="/pizza.png" 
                alt="piza"
                width={100}
                height={100} 
                className='block mx-auto h-12 w-auto'
            />
        </div>
        <h4 className="font-semibold text-xl my-3">Pepproni Pizza</h4>
        <p className="text-gray-500 text-sm my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero.</p>
        <button className="bg-primary text-white px-8 py-2 rounded-full">
            Add to cart $12
        </button>
    </div>
  )
}

export default MenuItem