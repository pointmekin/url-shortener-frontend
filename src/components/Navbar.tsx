import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='fixed w-full py-2 bg-gray-300 bg-opacity-20'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex gap-4'>
          <Link href='/' className='text-xl font-bold'>
            Goly
          </Link>
          <Link href='/test' className='text-xl font-bold'>
            Test
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
