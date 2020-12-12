import React from 'react'
import { Link } from 'react-router-dom'

const buttonStyles = {
  width: '100px',
  height: '40px',
  backgroundColor: '#f06464',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transitionDuration: '0.2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in',
  margin: '10px auto',
}

export default function Button(props) {
  return (
    <Link to={props.destination}>
      <div style={buttonStyles}>
        <p>{ props.text }</p>
      </div>
    </Link>
  )
}
