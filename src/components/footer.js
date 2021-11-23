import { useRouter } from 'next/router'
import Router from 'next/router'
import Link from 'next/link'
export default function Footer(props) {
  return (
    <footer>
      <div className='footer-title'>Follow Me Around</div>
      <div className='row mx-0 justify-content-center'>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f1.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f2.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f3.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f4.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f5.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 col-12'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f6.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 d-sm-block d-none'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f7.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-md-12-8 px-0 d-sm-block d-none'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f8.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-6 px-0 d-block d-sm-none'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f7.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className='col-6 px-0 d-block d-sm-none'>
          <a href='#'>
            <div
              style={{
                backgroundImage: 'url(' + `${require('../static/images/f8.jpg')}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
            >
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
      </div>
      <div className='site-footer'>
        <div className='footer-container'>
          <div className='footer-menu'>
            {/* <Link href='/'>
              <a>
                <img src={require('../static/images/Glowish_logo.png')} />
              </a>
            </Link> */}
          </div>
          {/* <ul className='footer-menu'>
            <li className='footer-menu-item'>
              <a href=''>Travel</a>
            </li>
            <li className='footer-menu-item'>
              <a href=''>Fashion</a>
            </li>
            <li className='footer-menu-item'>
              <a href=''>Lifestyle</a>
            </li>
            <li className='footer-menu-item'>
              <a href=''>Shop my Style</a>
            </li>
          </ul> */}

          <div className='footer-info'>
            <p className='copyright'>Your copyright notice. 2020.</p>
            {/* <a href='' target='_blank'>
              Blush Co. WordPress Theme
            </a>{' '} */}
            GLOWISH.
          </div>
        </div>
      </div>
    </footer>
  )
}
