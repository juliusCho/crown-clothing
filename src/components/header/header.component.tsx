import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { LinkUrlEnum } from '../../types/section.types'
import './header.styles.scss'

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={'/' + LinkUrlEnum.SHOP}>
          {LinkUrlEnum.SHOP.toUpperCase()}
        </Link>
        <Link className="option" to={'/' + LinkUrlEnum.SHOP}>
          CONTACT
        </Link>
      </div>
    </div>
  )
}