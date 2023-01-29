import React, { Suspense } from 'react'
import Link from 'next/link';
import TodosList from './(users)/todos/TodosList';

function Home () {
  return (
    <div>
      <Suspense>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList/>
        </div>
      </Suspense>
        

      <S
        <h1>Loading Shopping Trolley</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
        <TodosList/>
        </div>
      </div>
  )
}

export default Home; 