import { ReactNode } from 'react'

function SuccessBox({children}:{children: ReactNode}){
    return (
      <div className="text-center bg-green-300 p-4 rounded-lg border-2 border-green-500"> {children}  </div>
    )
  }
  

export default SuccessBox