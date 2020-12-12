import React from 'react'
import { Button } from '../components'

export default function Contact() {
  const centerText = {
    textAlign: 'center'
  }

  return (
    <>
      <h1>Contact Me</h1>

      <div className='content-box' style={centerText}>
        <ul>
          <li>
            <p><a href='https://www.linkedin.com/in/fazeelanizam' rel='noopener noreferrer' target='_blank'>LinkedIn</a></p>
          </li>
          <li>
            <p><a href='http://fazeelanizam.com' rel='noopener noreferrer' target='_blank'>Homepage</a></p>
          </li>
          <li>
            <p><a href='https://github.com/fazeelanizam13' rel='noopener noreferrer' target='_blank'>GitHub</a></p>
          </li>
        </ul>
      </div>

      <Button destination='/' text='Back' />
    </>
  )
}
