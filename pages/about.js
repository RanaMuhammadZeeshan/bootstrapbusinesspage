import Head from 'next/head'
import OurClient from '../components/ourClients/ourClient'
import OurOffice from '../components/ourOffice/ourOffice'

function About() {
  return (
    <>
      <Head>
        <title>About - Small Business</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='container my-1 my-sm-3'>
        <h1 className='text-center mb-sm-2 display-1'>About</h1>
        <div className='mb-sm-4'>
          <h2 className='text-center  mb-sm-4'>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis velit quis sapien sollicitudin ultrices. Ut metus tortor,
            aliquet non rutrum ac, dapibus vehicula augue. Etiam congue erat
            sem, vitae gravida nunc pretium vitae. Fusce sed ex tellus. Quisque
            auctor viverra feugiat. Nulla urna odio, porta ut tristique ut,
            consequat non dolor. Etiam varius maximus dolor, at consectetur
            lectus. Mauris rutrum aliquet tellus, sed convallis diam.
          </p>
          <p>
            Etiam aliquam lectus eget mauris tempor fermentum. Praesent ac dolor
            quis diam ultrices commodo. Cras efficitur tellus ante, non
            facilisis justo varius vel. Maecenas aliquet finibus ultricies.
            Quisque nec est posuere, luctus orci suscipit, convallis lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fermentum, ligula et bibendum gravida, turpis turpis imperdiet est,
            ac sodales orci ex volutpat lectus. Quisque quis elit laoreet,
            pellentesque ligula nec, faucibus felis. Vestibulum feugiat viverra
            semper.
          </p>
          <p>
            Vivamus sit amet tortor interdum, ultricies neque eget, cursus
            massa. Ut maximus lorem in posuere luctus. Vestibulum imperdiet mi
            at orci pulvinar lobortis. Vestibulum finibus elementum dolor et
            bibendum. Donec eu velit dolor. Aliquam viverra maximus sapien et
            varius. Proin velit justo, fringilla vitae dui sed, vehicula
            pulvinar magna. Curabitur leo mi, sodales id lectus scelerisque,
            viverra auctor arcu. Pellentesque aliquam mattis tortor, quis
            malesuada libero posuere vel. Etiam ut augue urna. Sed viverra justo
            vitae ornare posuere.
          </p>
        </div>

        <div className='mb-sm-4'>
          <h2 className='text-center mb-sm-4'>Our office</h2>
          <div className='row'>
            <OurOffice />
            <OurOffice />
          </div>
        </div>

        <div className='mb-sm-4'>
          <h2 className='text-center mb-sm-4'>Our clients</h2>
          <div className='row'>
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
            <OurClient imgPath='/400x300.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
