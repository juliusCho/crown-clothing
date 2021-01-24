import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import firebase, { auth } from '../../firebase/firebase.utils'
import { StateType } from '../../redux/root-reducer'
import { LinkUrlEnum } from '../../types/section.types'
import './header.styles.scss'

type Props = {
  currentUser: null | firebase.firestore.DocumentData
}

const mapStateToProps = (state: StateType) => ({
  currentUser: state.user.currentUser,
})

const Header = connect(mapStateToProps)(function ({ currentUser }: Props) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
})

export default Header
