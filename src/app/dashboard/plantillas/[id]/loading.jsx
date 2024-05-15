import React from 'react'
import { LoaderCircle } from 'lucide-react'

function loading() {
  return (
    <div className='text-light-texto dark:text-dark-texto flex items-center justify-center w-full h-full'><LoaderCircle className='animate-spin h-12 w-12'/></div>
  )  
}

export default loading