import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import LinkHelper from './linkHelper'

function Followus() {
  return (
    <>
      <h2>Follow us</h2>
      <ul className='list-unstyled'>
        <li>
          <LinkHelper
            linkPath={'#0'}
            linkText={' Facebook'}
            iconName={faFacebook}
          />
        </li>
        <li>
          <LinkHelper
            linkPath={'#0'}
            linkText={' Instagram'}
            iconName={faInstagram}
          />
        </li>
        <li>
          <LinkHelper
            linkPath={'#0'}
            linkText={' Twitter'}
            iconName={faTwitter}
          />
        </li>
        <li>
          <LinkHelper
            linkPath={'#0'}
            linkText={' Youtube'}
            iconName={faYoutube}
          />
        </li>
        <li>
          <LinkHelper
            linkPath={'#0'}
            linkText={' Linkedin'}
            iconName={faLinkedinIn}
          />
        </li>
      </ul>
    </>
  )
}

export default Followus
