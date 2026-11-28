"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Page1 = () => {
    const router = useRouter();
  return (
    <div>
      <h2>Welcome to the Page 1</h2>
      <button onClick={() => router.push("/page2")} className='bg-blue-500 p-2 rounded-md text-white cursor-pointer'>Go to page 2</button>
    </div>
  )
}

export default Page1
