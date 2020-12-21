import React from 'react'
import './custom-button.styles.scss'

type Props = {
  children: string
  type?: 'button' | 'submit' | 'reset'
}

export default function CustomButton({ children, type }: Props) {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  )
}
