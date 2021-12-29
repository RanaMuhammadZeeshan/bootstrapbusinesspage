import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function LinkHelper({ linkPath, linkText, iconName = null }) {
  return (
    <Link href={linkPath}>
      <a>
        {iconName !== null ? (
          <FontAwesomeIcon icon={iconName} className='fa-fw' />
        ) : null}{' '}
        {linkText}{' '}
      </a>
    </Link>
  )
}

export default LinkHelper
