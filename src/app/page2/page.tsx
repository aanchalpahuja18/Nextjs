"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Page2 = () => {
    const router = useRouter();
  return (
    <div>
      <p>This is the page 2</p>
      <p>Studied about useRouter and implementing the challenge</p>
        <button onClick={() => router.back()} className='bg-gray-500 text-white p-2 rounded-md cursor-pointer'>Back</button>
    </div>
  )
}

export default Page2
