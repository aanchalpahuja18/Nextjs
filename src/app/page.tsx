// import React from 'react'
// import Link from 'next/link'

// const Home = () => {
//   return (
//     <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6'>
//       <div className="text-center">
//         <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to the Dashboard App</h1>
//         <p className='text-lg mb-8 text-gray-600'>
//           Manage your tasks, track analytics, and stay organised with our powerful dashboard.
//         </p>

//         <Link href="/dashboard" className='inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl'>Go to Dashboard</Link>
//       </div>
//     </div>
//   )
// }

// export default Home

"use client"

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();

  function navigate(page:string) {
    router.push(`/${page}`)
  }
  return (
    // <div>
    //   {/* <Navbar/> */}
    //   <h1>Welcome to my app</h1>
    //   <h2>This is the landing page of the webapp</h2>
    //   <Link href="/newdashboard" className='bg-blue-400 p-2 text-white rounded-full'>Go to the Dashboard</Link>
    // </div>
    <div>
      <button onClick={() => navigate("login")} className='bg-blue-300 p-2 rounded-md text-white m-2 cursor-pointer'>Go to Login page</button> <br />
      <Link href="/colors" className='bg-blue-300 p-2 rounded-md text-white m-2 mt-4 cursor-pointer'>Go to Colors page</Link>
    </div>
  )
}

export default Home
