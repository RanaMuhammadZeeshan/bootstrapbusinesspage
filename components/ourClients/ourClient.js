function OurClient({ imgPath }) {
  return (
    <div className='col-6 c-l-sm-4 col-lg-2 mb-3'>
      <img src={imgPath} alt='client picture' className='img-fluid' />
    </div>
  )
}

export default OurClient
