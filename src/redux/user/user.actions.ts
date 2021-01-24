import firebase from '../../firebase/firebase.utils'

export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export type UserActions = {
  type: UserActionTypes
  payload: firebase.firestore.DocumentData | null
}

export const setCurrentUser = (
  user: firebase.firestore.DocumentData | null,
) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})
