import Link from 'next/link'

function Announcement() {
  return (
    <>
      <div className='alert alert-warning mb-3 mb-sm-5' role={'alert'}>
        <h2 className='alert-heading'>We&apos;re hiring!</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
          <br />
          <Link href={'#0'}>
            <a className='alert-link'>
              Can you help translate this site into a foreign language ? Please
              email us with details if you can help.
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Announcement
