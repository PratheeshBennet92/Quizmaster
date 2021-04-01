import React from 'react'
export function quizItemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'QUIZ_ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function quizItemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'QUIZ_ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function quizItemsFetchDataSuccess(state = [], action) {
    switch (action.type) {
        case 'QUIZ_ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}