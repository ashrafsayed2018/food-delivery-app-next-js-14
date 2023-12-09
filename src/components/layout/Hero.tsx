import Right from "@/components/icons/Right"
import Image from "next/image"

function Hero() {
  return (
    <section className="hero">
        <div className="py-8">
            <h1 className="text-4xl font-semibold leading-normal">
                Everything 
                <br/>is better
                <br/> with a <span className="text-primary">Pizza</span>
            </h1>
            <p className="my-6 text-gray-800 text-lg leading-6">Pizza is delicious and very tasty for eating in our restaurant around kuwait governorate 
            </p>
            {/* buttons */}
            <div className="flex gap-4 items-center">
                <button className="bg-primary text-white rounded-full px-6 py-2 flex gap-3 items-center">
                    <span>Order now</span>
                    <Right className="w-6 h-6"/>
                </button>
                <button className="bg-gray-200 rounded-full px-6 py-2 flex gap-2 items-center">
                    <span className="font-semibold">Learn more</span>
                    <Right className="w-6 h-6"/>
                </button>
            </div>
        </div>
        <div className="relative">
        <Image 
        src="/pizza.png" 
        fill={true}
        sizes="w-96"
        priority={true}
        alt="pizza image" />
        </div>
    </section>
  )
}

export default Hero