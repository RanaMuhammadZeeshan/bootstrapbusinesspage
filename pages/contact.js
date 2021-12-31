import {
  faEnvelope,
  faHome,
  faPencilAlt,
  faPencilRuler,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import ContactusForm from '../components/contact/contactusForm'
import OurLocation from '../components/footer/ourLocation'

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Small Business</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='container my-1 my-sm-3'>
        <h1 className='text-center mb-sm-4 display-1'>Contact</h1>

        <div className='row'>
          <div className='col-12 col-md-6'>
            <OurLocation heading={'Address:'} />
          </div>
          <div className='col-12 col-md-6'>
            <h2>Opening hours:</h2>
            <p>
              Monday-Thursday: <span className='float-end'>9 am - 6 pm</span>
              <br />
              Friday-Saturday: <span className='float-end'>10 am - 10 pm</span>
              <br />
              Sunday: <span className='float-end'>Closed</span>
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-lg-6 mb-3'>
            <h2>Send us a message:</h2>
            <ContactusForm />
          </div>

          <div className='col-12 col-lg-6'>
            <h2>Where to find us:</h2>
            <div className='ratio ratio-4x3'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.0499399436053!2d73.04786871497251!3d33.707656643258034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb0f4f77379%3A0xf8c50b8651f56d02!2sThe%20Centaurus%20Mall%20Islamabad!5e0!3m2!1sen!2s!4v1640932337548!5m2!1sen!2s'
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
