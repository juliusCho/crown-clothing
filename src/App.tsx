import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import firebase, {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import * as Actions from './redux/user/user.actions'
import { LinkUrlEnum } from './types/section.types'

type Props = {
  setCurrentUser: (user: firebase.firestore.DocumentData | null) => void
}

const mapDispatchToProps = (
  dispatch: (
    userAction: Actions.UserActions,
  ) => firebase.firestore.DocumentData | null,
) => ({
  setCurrentUser: (user: firebase.firestore.DocumentData | null) =>
    dispatch(Actions.setCurrentUser(user)),
})

const App = connect(
  null,
  mapDispatchToProps,
)(function ({ setCurrentUser }: Props) {
  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribeFromAuth()
  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={'/' + LinkUrlEnum.SHOP} component={ShopPage} />
        <Route
          path={'/' + LinkUrlEnum.AUTHENTICATE}
          component={SignInAndSignUpPage}
        />
      </Switch>
    </div>
  )
})

export default App
