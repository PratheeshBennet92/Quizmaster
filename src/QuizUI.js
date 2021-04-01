import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Box, Link, FormGroup, FormHelperText, createStyles, ButtonGroup, AppBar, Toolbar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AppleIcon from '@material-ui/icons/Apple';
import Alert from '@material-ui/lab/Alert';
const QuizUI = (props) => {
    const avatarStyle = { padding: 20, margin: "0px auto", backgroundColor: 'black', align: "center" }
    const titleStyle = { padding: 20, margin: "0px auto", align: "center" }
    const questionStyle = { padding: 0, margin: "20px auto", align: "center" }
    const btnstyle = { margin: '8px 0' }
    const alertStyle = { margin: '8px 0', justifyContent: 'center' }
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    const buttonStyle = { width: '200px', maxHeight: '50px', margin: '8px 0', align: 'center' }
    const navButtonStyle = { width: '50px', maxHeight: '50px', margin: '8px 0', align: 'center', marginTop: '10px', marginRight: '50px' }
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        let answerIndex = props.question.options.findIndex(obj => obj === event.target.value);
        //props.question.selectionIndex = answerIndex
        props.updateSelectedIndex(answerIndex)
    };
    useEffect(() => {
        console.log("I have been mounted")
    }, [])
    useEffect(() => {
        console.log("I have been mounted")
        if (props.question.selectionIndex != null) {
            setValue(props.question.options[props.question.selectionIndex])
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault();

        // if (value === 'best') {
        //     setHelperText('You got it!');
        //     setError(false);
        // } else if (value === 'worst') {
        //     setHelperText('Sorry, wrong answer!');
        //     setError(true);
        // } else {
        //     setHelperText('Please select an option.');
        //     setError(true);
        // }
    };
    const nextTapped = () => {
        let answerIndex = props.question.options.findIndex(obj => obj === value);
        props.nextCallback(answerIndex)
        //Reseting values after next
        setValue('')
    };
    const prevTapped = () => {
        props.prevCallback()
    };
    const skipTapped = () => {
        props.skipCallback()
    };
    const styles = createStyles({
        formControlLabel: { fontSize: '1.25rem', color: 'black' }
    });
    if (props.isReview) {
        return (
            <Grid>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Bible quiz-Test</Typography>
                    </Toolbar>
                </AppBar>
                <Grid item>
                    {/* <Avatar style={avatarStyle} ><AppleIcon fontSize="large" /></Avatar> */}
                    <Alert severity="success" style={alertStyle}>Quiz completed
                    <Typography fontWeight="fontWeightMedium" style={titleStyle}>
                            Score: {props.score} %
            </Typography>
                    </Alert>

                </Grid>
            </Grid >
        )
    }
    return (
        <Grid container direction={'column'} spacing={0} alignItems="center">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Bible quiz-Test</Typography>
                </Toolbar>
            </AppBar>
            <Grid item>
                {/* <Avatar style={avatarStyle} ><AppleIcon fontSize="large" /></Avatar> */}

                <Typography fontWeight="fontWeightMedium" style={titleStyle}>
                    Question: {props.question.order + 1}/{props.totalQuestion.length}
                </Typography>
            </Grid>
            <Grid item>
                <FormControl component="fieldset" error={error} align="justify">
                    <Typography fontWeight="fontWeightBold" style={questionStyle}>
                        <Box fontWeight="fontWeightBold" m={1}>
                            {props.question.question}
                        </Box>

                    </Typography>
                    <RadioGroup
                        aria-label="quiz"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        {props.question.options.map(option => { // using props in child component and looping
                            return (
                                <FormControlLabel value={option} control={<Radio />} label={option} />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item>
                <Button type="submit" variant="contained" color="primary" style={buttonStyle} onClick={nextTapped} disabled={value == ''}>
                    {props.isLastQuestion ? "Submit & Finish" : "Submit"}
                </Button>
            </Grid>
            <Grid item>
                {/* <Button type="submit" variant="outlined" color="primary" style={buttonStyle} onClick={skipTapped}>
                Skip
        </Button> */}
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" style={navButtonStyle}>
                    <Button type="submit" onClick={prevTapped} disabled={props.isFirstQuestion} >{'   <   '}</Button>
                    <Button type="submit" onClick={nextTapped} disabled={props.isLastQuestion}>{'   >   '}</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}
export default QuizUI