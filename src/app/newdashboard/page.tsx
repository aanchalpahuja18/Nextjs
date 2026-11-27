import React from 'react'
import Link from 'next/link'

const NewDashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/newdashboard/settings">Settings</Link>
                </li>
                <li>
                    <Link href="/newdashboard/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NewDashboard
