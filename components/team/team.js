import TeamSocialLink from './teamSocialLink'

function TeamComponent({
  imgPath,
  iconNameFirst,
  iconNameSecond,
  socialNameFirst,
  socialNameSecond,
}) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center mb-3'>
      <img
        src={imgPath}
        className='img-fluid rounded-circle mb-2'
        alt='team image'
      />
      <ul className='list-inline mb-1'>
        <li className='list-inline-item small'>
          <TeamSocialLink
            iconName={iconNameFirst}
            socialName={socialNameFirst}
          />
        </li>
        <li className='list-inline-item small'>
          <TeamSocialLink
            iconName={iconNameSecond}
            socialName={socialNameSecond}
          />
        </li>
      </ul>
      <h5>Firstname Lastname</h5>
      <p>Chief Executive Officer</p>
    </div>
  )
}

export default TeamComponent
