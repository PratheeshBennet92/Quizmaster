import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormGroup, FormHelperText } from '@material-ui/core'
import QuizUI from './QuizUI'
import { fetchQuiz, quizItemsFetchDataSuccess } from './QuizAction'
import {connect} from 'react-redux'
import CircularSpinner from './CircularSpinner'
import AlertDialogSlide from './AlertDialogSlide'
import { render } from '@testing-library/react'
const Quiz = (props) => {
    const paperStyle = { padding: 20, height: '70h', width: '75%', margin: "20px auto", align: "center" }
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [score, setScore] = useState(0)
    const [isFirstQuestion, setIsFirstQuestion] = useState(false)
    const [isLastQuestion, setIsLastQuestion] = useState(false)
    const [isReview, setIsReview] = useState(false)
    const [showConfirmAlert, setShowConfirmAlert] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        console.log("Response", props.response)
        setQuestions(props.response)
        console.log("Questions", questions)
        let newQues = questions[0]
        setCurrentQuestion(newQues)
    }, [props.response]);
    useEffect(() => {
        console.log("Questions", questions)
        let newQues = questions[0]
        setCurrentQuestion(newQues)
    }, [questions]);
    useEffect(() => {
        console.log("New score", score)
    }, [score]);
    useEffect(() => {
        debugger;
        props.fetchQuestion()
        console.log("Show confirm alert", showConfirmAlert)
    }, [])
    useEffect(() => {
        if (currentQuestion != null) {
            flagFirstQuestion()
            flagLastQuestion()
        }
        console.log("Show confirm alert", showConfirmAlert)
    });
    const nextTapped = (index) => {
        debugger;
        if (currentQuestion.selectionIndex != index) {
            updateScore(index)
        }
        updateSelection(index)
        setStateCurrentQuestion()
    };
    const prevTapped = () => {
        setStatePrevCurrentQuestion()
    }
    const updateSelectedIndex = (index) => {
        debugger;
        updateSelection(index)
        updateScore(index)
    }
    const setStateCurrentQuestion = () => {
        if (currentQuestion.order <= questions.length - 1) {
            let newOrder = currentQuestion.order + 1
            console.log("increment oreder", newOrder)
            if (newOrder == questions.length) {
                showConfirmSubmit()
                //setIsReviewBool()
            } else {
                let newQues = questions[newOrder]
                console.log("next ques", newQues)
                setCurrentQuestion(newQues)
            }
        }
    }
    const setStatePrevCurrentQuestion = () => {
        if (currentQuestion.order <= questions.length - 1) {
            let newOrder = currentQuestion.order - 1
            console.log("increment oreder", newOrder)
            let newQues = questions[newOrder]
            setCurrentQuestion(newQues)
        }
    }
    const updateScore = (index) => {
        let correctAns = questions.filter(eachQues => eachQues.answer === eachQues.selectionIndex).length
        //if (currentQuestion.answer === index) {
            setScore(correctAns/questions.length * 100)
       // }
    }
    const updateSelection = (index) => {
        var currentQuesObj = questions.filter(eachQues => eachQues.id === currentQuestion.id)[0]
        currentQuesObj.selectionIndex = index
        console.log("Updated question object", questions)
    }
    const flagLastQuestion = () => {
        console.log("is last ques", isLastQuestion, currentQuestion.order)
        if (currentQuestion.order === questions.length - 1) {
            setIsLastQuestion(true)
            console.log("is last ques", isLastQuestion)
        } else {
            setIsLastQuestion(false)
        }
    }
    const flagFirstQuestion = () => {
        if (currentQuestion.order === 0) {
            setIsFirstQuestion(true)
        } else {
            setIsFirstQuestion(false)
        }
    }
    const setIsReviewBool = () => {
        setIsReview(true)
    }
    const skipTapped = () => {

    };
    const showConfirmSubmit = () => {
        setShowConfirmAlert(true)
    }
    const confirmSubmit = () => {
        removeConfirmAlert()
        setIsReviewBool()
    }
    const cancelSubmit = () => {
        removeConfirmAlert()
    }
    const removeConfirmAlert = () => {
        setShowConfirmAlert(false)
    }
    return (
        <Paper elevation={10} style={paperStyle}>
            {props.loading ? <CircularSpinner/> : null}
            {currentQuestion != null ?
                <QuizUI
                    question={currentQuestion}
                    nextCallback={nextTapped}
                    skipCallback={skipTapped}
                    prevCallback={prevTapped}
                    order={currentQuestion.order}
                    isLastQuestion={isLastQuestion}
                    isFirstQuestion={isFirstQuestion}
                    isReview={isReview}
                    score={score}
                    totalQuestion={questions}
                    showAlert = {showConfirmAlert}
                    updateSelectedIndex={updateSelectedIndex}
                />
                : null}
                {showConfirmAlert ?  <AlertDialogSlide
                onSubmit = {confirmSubmit}
                onCancel = {cancelSubmit}
                />: null}
        </Paper>
    )
}
const mapStateToProps = (state) => {
    return {
        response: state.quizItemsFetchDataSuccess,
        error: state.quizItemsHasErrored,
        loading: state.quizItemsIsLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestion: () => dispatch(fetchQuiz())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);