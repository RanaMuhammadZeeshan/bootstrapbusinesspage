import Link from 'next/link'
import Followus from './followus'
import Information from './information'
import OurLocation from './ourLocation'
import QuickLink from './quickLink'

function Footer() {
  return (
    <footer className='small bg-light'>
      <div className='container py-3 py-sm-5'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-3'>
            <QuickLink />
          </div>
          <div className='col-12 col-sm-6 col-md-3'>
            <Information />
          </div>
          <div className='col-12 col-sm-6 col-md-3'>
            <Followus />
          </div>
          <div className='col-12 col-sm-6 col-md-3'>
            <OurLocation />
          </div>
        </div>
        <ul className='list-inline mt-2 mb-0 text-center'>
          <li className='list-inline-item'>&copy; 2021 Company Name</li>
          <li className='list-inline-item'>All rights reserved.</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
