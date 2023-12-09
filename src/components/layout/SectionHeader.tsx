import React from 'react'

function SectionHeader({subHeader,mainHeader}:{subHeader:string,mainHeader:string}) {
  return (
    <div className="text-center mb-6">
        <h3 className="text-gray-500 uppercase font-semibold leading-6">{subHeader}</h3>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  )
}

export default SectionHeader