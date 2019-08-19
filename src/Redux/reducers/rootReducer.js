import { combineReducers } from 'redux'

import { theDefaultReducer, 
  firstNamedReducer,
  secondNamedReducer,
  rootReducer2
} from './reducers'
import myRootAppointmentReducer from './rootAppointmentReducer';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    rootReducer2,
    myRootAppointmentReducer,
    theDefaultReducer,
    firstNamedReducer,
    secondNamedReducer
})

export default rootReducer;