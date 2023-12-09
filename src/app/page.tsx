import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
     
      <Hero/>
      <HomeMenu/>
      {/* about us section */}
      <section className="text-center my-16">
        <SectionHeader subHeader="our story" mainHeader="About Us"/>
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laboriosam.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi pariatur eum autem ipsum, fugit sed assumenda aut enim ullam.
            </p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>
      {/* contact us section */}
      <section className="text-center my-16">
          <SectionHeader subHeader="don't hesitate" mainHeader="Contact Us"/>
          <a 
          href="tel:9652523252"
          className="text-4xl block mt-8 underline text-blue-500">9652523252</a>
      </section>
      {/* footer */}
   
    </>
  )
}
