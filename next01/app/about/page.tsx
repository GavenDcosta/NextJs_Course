import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-slate-800'>
    <div className='font-bold text-[30px] text-white'>About Page</div>
    <Link href='/'>Home Page Link</Link>
    </div>
  )
}
