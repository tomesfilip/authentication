import React from 'react'
import { SignButton } from './SignButton'

export const AuthWrapper = () => {
  return (
    <div className='auth-wrapper'>
      <SignButton 
        onClick={ () => console.log("fb") }
        buttonTxt="facebook" 
      />
      <SignButton
        onClick={ () => console.log("google") } 
        buttonTxt="google"
      />
      <SignButton
        onClick={ () => console.log("github") } 
        buttonTxt="github"
      />
    </div>
  )
}
