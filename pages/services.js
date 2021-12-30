import Head from 'next/head'
import Link from 'next/link'
import Service from '../components/services/service'

function Services() {
  return (
    <>
      <Head>
        <title>Services - Small Business</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='container my-1 my-sm-3'>
        <h2 className='text-center mb-sm-2 display-1'>Our services</h2>

        <div className='row mb-4 align-items-center flex-md-row-reverse'>
          <Service imgPath={'/600x450.png'} serviceHeading={'Service #1'} />
        </div>
        <hr className='mb-4' />

        <div className='row mb-4 align-items-center'>
          <Service imgPath={'/600x450.png'} serviceHeading={'Service #2'} />
        </div>
        <hr className='mb-4' />

        <div className='row mb-4 align-items-center flex-md-row-reverse'>
          <Service imgPath={'/600x450.png'} serviceHeading={'Service #3'} />
        </div>
        <hr className='mb-4' />

        <div className='row mb-4 align-items-center'>
          <Service imgPath={'/600x450.png'} serviceHeading={'Service #4'} />
        </div>
      </div>
    </>
  )
}

export default Services
