"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();
  return (
    <div>
      <h2>Login page</h2>
      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Login
