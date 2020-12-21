import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { LinkUrlEnum } from './types/section.types'

function App() {
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
}

export default App
