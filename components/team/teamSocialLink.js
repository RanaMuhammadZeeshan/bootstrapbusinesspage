import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function TeamSocialLink({ socialName, iconName }) {
  return (
    <Link href={'#0'}>
      <a>
        <FontAwesomeIcon icon={iconName} className='fab fa-2x' />
        <span className='visually-hidden'>{socialName}</span>
      </a>
    </Link>
  )
}

export default TeamSocialLink
