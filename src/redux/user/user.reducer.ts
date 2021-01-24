import firebase from '../../firebase/firebase.utils'
import { UserActionTypes } from './user.actions'

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (
  state: {
    currentUser: firebase.firestore.DocumentData | null
  } = INITIAL_STATE,
  action: { type: string; payload: firebase.firestore.DocumentData | null },
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
