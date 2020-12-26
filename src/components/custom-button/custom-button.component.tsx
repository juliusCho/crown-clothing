import React from 'react'
import './custom-button.styles.scss'

type Props = {
  children: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  isGoogleSignIn?: boolean
}

export default function CustomButton({
  children,
  onClick,
  type,
  isGoogleSignIn,
}: Props) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}
