import React from 'react'

export const SignButton = ({ onClick, iconSrc, iconAlt, buttonTxt }) => {
  return (
    <button className='sign-button' onClick={ onClick }>
      <img className="icon" src={iconSrc} alt={iconAlt} />
      { buttonTxt }
    </button>
  )
}
