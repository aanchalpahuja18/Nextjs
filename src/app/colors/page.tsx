"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Colours = () => {
    const router = useRouter();
  return (
    <div>
      <h1>Colours page</h1>
      <button onClick={() => router.back()} className='bg-gray-500 p-2 rounded-md cursor-pointer'>Back</button>
    </div>
  )
}

export default Colours
