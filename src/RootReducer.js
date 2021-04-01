import {combineReducers} from 'redux';
import {quizItemsHasErrored, quizItemsIsLoading, quizItemsFetchDataSuccess} from './QuizReducer';
const rootReducer = combineReducers({
    quizItemsHasErrored,
    quizItemsIsLoading,
    quizItemsFetchDataSuccess
})
export default rootReducer