import { combineReducers } from "redux";
import studentsReducer from "./studentsSlice"

const rootReducer = combineReducers({
    students: studentsReducer,
});

export default rootReducer;