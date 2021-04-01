import React from 'react'
import axios from 'axios'
export function quizItemsHasErrored(bool) {
    return {
        type: 'QUIZ_ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function quizItemsIsLoading(bool) {
    return {
        type: 'QUIZ_ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function quizItemsFetchDataSuccess(items) {
    debugger;
    console.log("Items", items)
    return {
        type: 'QUIZ_ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
export function fetchQuiz() {
    debugger;
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSPmHnnS5MOAemTHuP0wTcswJJbBHgMZy_nA7895sEVzKiawDhI_3KQG4Oy6eSwVPV0OCXBVtc2vttY/pubhtml
    console.log('API hit')
    return (dispatch) => {
        dispatch(quizItemsIsLoading(true))
        axios.get('https://sheet.best/api/sheets/2f58c9e3-b91b-431c-beec-055257bb9886')
  .then((response) => {
      if (response.status == 200) {
      let receivedResponse = response.data
      receivedResponse.forEach(element => {
          element.options = element.options.split(',')
          element.order = parseInt(element.order)
          element.answer = parseInt(element.answer)
          element.id = parseInt(element.id)
          element.quizid = parseInt(element.quizid)
      });
      console.log("received response", receivedResponse);
      dispatch(quizItemsFetchDataSuccess(receivedResponse))
      } else {
      dispatch(quizItemsHasErrored(true))
      }
      dispatch(quizItemsIsLoading(false))
   
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });    
    };
}



// setTimeout(
//     () => {
//         debugger;
//         dispatch(quizItemsFetchDataSuccess([
//             {
//                 id: 1,
//                 question: 'This is the first super question of the quizz app.',
//                 options: ['test option1', 'test  firstoption2', 'test  first option3'],
//                 type: 'Single',
//                 answer: 0,
//                 order: 0,
//                 quizid: 1
//             },
//             {
//                 id: 2,
//                 question: 'This is the second super question of the quizz app.',
//                 options: ['test option1', 'test option2', 'test option3'],
//                 type: 'Single',
//                 answer: 0,
//                 order: 1,
//                 quizid: 1
//             },
//             {
//                 id: 3,
//                 question: 'This is the third super question of the quizz app.',
//                 options: ['test third option1', 'test third option2', 'test third option3'],
//                 type: 'Single',
//                 answer: 0,
//                 order: 2,
//                 quizid: 1
//             },
//         ]));
//         dispatch(quizItemsIsLoading(false));
//     }, 
//     3000
//   );