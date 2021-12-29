import Image from 'next/image'
import Link from 'next/link'
import Announcement from '../components/announcement/announcement'
import Itemcard from '../components/cards/itemcard/itemcard'
import Hero from '../components/hero/hero'
import Whoandwhat from '../components/whoandwhat/whoandwhat'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='container my-3 my-sm-5'>
        <Announcement />

        <div className='row g-0 bg-light p-4 mb-3 mb-sm-5 '>
          <Whoandwhat heading={'What we do'} />
          <Whoandwhat heading={'Who we are'} />
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0'>
            <Itemcard />
          </div>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0'>
            <Itemcard />
          </div>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-0 mb-lg-3 mb-xl-0'>
            <Itemcard />
          </div>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <Itemcard />
          </div>
        </div>
      </div>
    </>
  )
}
