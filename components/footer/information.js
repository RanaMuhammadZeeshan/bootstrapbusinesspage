import LinkHelper from './linkHelper'

function Information() {
  return (
    <>
      <h2>Information</h2>
      <ul className='list-unstyled'>
        <li>
          <LinkHelper linkPath={'#0'} linkText={'Legal information'} />
        </li>
        <li>
          <LinkHelper linkPath={'#0'} linkText={'Job opportunities'} />
        </li>
        <li>
          <LinkHelper linkPath={'#0'} linkText={'Frequently Asked Questions'} />
        </li>
      </ul>
    </>
  )
}

export default Information
