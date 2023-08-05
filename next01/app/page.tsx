import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='font-bold text-white text-[30px]'>Home Page</h1>
      <Link href='/about'>About Page Link</Link>
    </main>
  )
}
