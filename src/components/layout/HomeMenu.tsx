import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeader from "./SectionHeader"

function HomeMenu() {
  return (
   <section>
        <div className="absolute h-full inset-0">
           <div className="w-48 h-48  absolute -left-0 flex justify-start top-72 -z-10">
            <Image 
                src="/sallad1.png"
                width={100}
                height={100}
                className="h-auto w-auto"
                alt="salad"/>
           </div>
           <div className="w-48 h-48  absolute -right-0 flex justify-end top-72 -z-10">
            <Image 
                src="/sallad2.png"
                width={100}
                height={100}
                className="h-auto w-auto"
                alt="salad"/>
           </div>
        </div>
        {/* section headers */}
        <SectionHeader subHeader="check out" mainHeader="Our Menu"/>
        {/* grid card */}
        <div className="md:grid grid-cols-3 gap-4 ">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
   </section>
  )
}

export default HomeMenu