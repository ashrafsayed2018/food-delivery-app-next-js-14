import  { ReactNode } from 'react'

function InfoBox({children}:{children: ReactNode}){
  return (
    <div className="text-center bg-blue-300 p-4 rounded-lg border-2 border-blue-500"> {children}  </div>
  )
}

export default InfoBox