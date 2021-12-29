import Link from 'next/link'

function Itemcard() {
  return (
    <div className='card'>
      <div className='card-header small'>
        Published: <time dateTime='2021-01-01'>01-01-2021</time>
      </div>
      <div className='card-body'>
        <h2 className='card-title'>New item</h2>
        <p className='card-text'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className='card-footer'>
        <Link href={'#0'}>
          <a className='btn d-grid btn-primary'>Read more</a>
        </Link>
      </div>
    </div>
  )
}

export default Itemcard
