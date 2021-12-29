import Link from 'next/link'
import React from 'react'
import LinkHelper from './linkHelper'

function QuickLink() {
  return (
    <>
      <h2>Quick Links</h2>
      <ul className='list-unstyled'>
        <li>
          <LinkHelper linkPath={'/home'} linkText={'Home'} />
        </li>
        <li>
          <LinkHelper linkPath={'/services'} linkText={'Services'} />
        </li>
        <li>
          <LinkHelper linkPath={'/about'} linkText={'About'} />
        </li>
        <li>
          <LinkHelper linkPath={'/team'} linkText={'Team'} />
        </li>
        <li>
          <LinkHelper linkPath={'/contact'} linkText={'Contact'} />
        </li>
      </ul>
    </>
  )
}

export default QuickLink
