import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='bg-light py-3 py-sm-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
            <img src='/730x400.png' className='img-fluid' alt='hero image' />
          </div>
          <div className='col-12 col-lg-6 '>
            <h1 className='display-1'>Small Business</h1>
            <p className='leading'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.{' '}
            </p>
            <Link href={'#0'}>
              <a className='btn btn-lg btn-primary me-2'>Read more</a>
            </Link>
            <Link href={'#0'}>
              <a className='btn btn-lg btn-outline-primary'>Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
