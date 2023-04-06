import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='text-gray-800 dark:text-white/80 min-h-fit py-20 flex justify-center items-center'>
      <div>
        <h1 className='text-2xl xs:text-3xl sm:text-4xl mx-auto'>
          The Requested Blog Doesn&apos;t Exists
        </h1>
        <Link href='/' className='block w-fit mx-auto my-10 underline underline-offset-4 hover:text-white/40'>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound