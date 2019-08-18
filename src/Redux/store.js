import { createStore } from "redux";
import myRootAppointmentReducer from "./reducers/rootAppointmentReducer";

const store = createStore(myRootAppointmentReducer);

export default store;
