import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  // firestoreReducer automatically syncs 
  // firestore property on the state object
  // to the database, depending on what component
  // is active
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;