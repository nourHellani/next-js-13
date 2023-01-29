import React from 'react'
import Link from 'next/link';
function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <p className='font-bold text-white'>I'm the header</p>
      <Link href='/'>Home</Link>
    </header>
  )
}

export default Header;