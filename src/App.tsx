import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { LinkUrlEnum } from './types/section.types'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={'/' + LinkUrlEnum.SHOP} component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
