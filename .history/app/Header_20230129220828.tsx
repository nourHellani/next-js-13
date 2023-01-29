import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <p className='font-bold text-white'>I'm the header</p>
      <Link href='/'></Link>
    </header>
  )
}

export default Header;