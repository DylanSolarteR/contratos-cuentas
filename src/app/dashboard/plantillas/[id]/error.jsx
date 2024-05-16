'use client';
import React from 'react'
import { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link'

function ErrorPage(error) {

  useEffect(() => {
    console.log(error)
  }
    , [error])

  return (
    <div className='flex w-full h-full flex-col items-center justify-center'>
      <h1 className='text-light-texto dark:text-dark-texto text-4xl font-bold'>Algo salio mal :c</h1>
      <Button asChild variant='ghost' className='m-4 border-light-texto dark:border-dark-texto border'>
        <Link href={'/dashboard'}>Volver al dashboard</Link>
      </Button>
    </div>
  )
}

export default ErrorPage