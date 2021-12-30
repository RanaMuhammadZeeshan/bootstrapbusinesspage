import Link from 'next/link'

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top'>
      <div className='container'>
        <Link href={'/'}>
          <a className='navbar-brand'>Small Business</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link href={'/'}>
                <a className='nav-link' aria-current='page'>
                  Home
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={'/services'}>
                <a className='nav-link'>Services</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={'/about'}>
                <a className='nav-link'>About</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={'/team'}>
                <a className='nav-link'>Team</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={'/contact'}>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
          <div className='dropdown'>
            <button
              type='button'
              className='btn btn-secondary btn-sm dropdown-toggle'
              id='dropdownLanguage'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Change language:
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownLanguage'>
              <Link href={'https://companyname.com/language'}>
                <a className='dropdown-item'>Language</a>
              </Link>
              <Link href={'https://companyname.com/language'}>
                <a className='dropdown-item'>Language</a>
              </Link>
              <Link href={'https://companyname.com/language'}>
                <a className='dropdown-item'>Language</a>
              </Link>
              <Link href={'https://companyname.com/language'}>
                <a className='dropdown-item'>Language</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
