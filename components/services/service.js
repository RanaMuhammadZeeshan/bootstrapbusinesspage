import Link from 'next/link'
import React from 'react'

function Service({ imgPath, serviceHeading }) {
  return (
    <>
      <div className='col-12 col-md-6 mb-3 mb-md-0'>
        <img src={imgPath} alt='services image' className='img-fluid' />
      </div>
      <div className='col-12 col-md-6'>
        <h2>{serviceHeading}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <Link href={'#0'}>
          <a className='btn btn-primary'>Read more</a>
        </Link>
      </div>
    </>
  )
}

export default Service
