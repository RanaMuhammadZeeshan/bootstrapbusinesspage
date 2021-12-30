import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import Head from 'next/head'
import TeamComponent from '../components/team/team'

function Team() {
  return (
    <>
      <Head>
        <title>Team - Small Business</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='container my-1 my-sm-5'>
        <h1 className='text-center mb-sm-4 display-1'>Meet the team</h1>

        <p className='lead mb-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <div className='row'>
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
          <TeamComponent
            imgPath={'/200x200.png'}
            iconNameFirst={faTwitterSquare}
            iconNameSecond={faLinkedin}
            socialNameFirst={'Twitter'}
            socialNameSecond={'LinkedIn'}
          />
        </div>
      </div>
    </>
  )
}

export default Team
