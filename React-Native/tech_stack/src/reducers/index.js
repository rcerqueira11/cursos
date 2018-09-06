import { combineReducers } from 'redux'; // to combine all the reducer who handle differents parts of the state
import LibraryReducer from './LibraryReducer'
import SelectionReducer from "./SelectionReducer";
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
})