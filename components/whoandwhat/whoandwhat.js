import Image from 'next/image'
import Link from 'next/link'

function Whoandwhat({ heading }) {
  return (
    <>
      <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
        <div className='row'>
          <div className='col-12 col-sm-6 text-center'>
            <img
              src={'/300x300.png'}
              className='img-fluid rounded-circle mb-4 mb-lg-0'
              alt='who we are image'
            />
          </div>
          <div className='col-12 col-sm-6'>
            <h2>{heading}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link href={'#0'}>
              <a className='btn btn-primary'>Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whoandwhat
