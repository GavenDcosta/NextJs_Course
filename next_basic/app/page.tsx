import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
   <main className='flex flex-row justify-center flex-wrap'>
    <h1 className='text-black font-bold text-[30px]'>Hello World</h1>
    <Link href="/users" className='mt-20 p-10 text-white font-mono bg-slate-500 border rounded'>Users</Link>
    <ProductCard />
   </main>
  )
}
