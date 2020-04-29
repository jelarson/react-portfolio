import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import loginImg from '../../../static/assets/images/auth/login.jpg'


export default function () {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column'
        style={{
          background: 'url(' + loginImg + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='phone' />
            </div>
            <div className='text'>
              555-555-5555
            </div>
          </div>
        </div>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='envelope' />
            </div>
            <div className='text'>
              jesse@jesse.com
            </div>
          </div>
        </div>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='map-marked-alt' />
            </div>
            <div className='text'>
              Orem, Utah
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}