import { combineReducers } from 'redux'
import firebase from '../firebase/firebase.utils'
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer,
})

export type StateType = {
  user: {
    currentUser: firebase.firestore.DocumentData
  }
}
