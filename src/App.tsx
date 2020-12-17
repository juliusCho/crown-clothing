import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { LinkUrlEnum } from './types/section.types'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={LinkUrlEnum.HATS} component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
