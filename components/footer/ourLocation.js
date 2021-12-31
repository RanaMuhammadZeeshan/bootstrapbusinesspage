import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import LinkHelper from './linkHelper'

function OurLocation({ heading }) {
  return (
    <>
      <h2>{heading}</h2>
      <address>
        <strong>Company Name</strong>
        <br />
        Street Name
        <br />
        ZIP code and city
        <br />
        <LinkHelper
          linkPath={'tel:+1234567890'}
          linkText={' (123) 456-7890'}
          iconName={faPhone}
        />
        <br />
        <LinkHelper
          linkPath={'mailto:info@domain.com'}
          linkText={' info@domain.com'}
          iconName={faEnvelope}
        />
      </address>
    </>
  )
}

export default OurLocation
