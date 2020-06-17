import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        fontSize: "12px",
        fontStyle: "italic",
        textTransform: 'none',
        '&:hover': {
            border: 'none',
            color: 'white',
            // background: 'linear-gradient(to right, #ffffff 50%, #FABDFF, #AC8EFF)',
            background: 'linear-gradient(to right, #FABDFF, #AC8EFF, #ffffff 50%)',
            animation: `$gradient 1s linear forwards`,
            backgroundSize: '300% 300%'
        },
        '&:focus': {
            border: 'none',
            color: 'white',
            // background: 'linear-gradient(to right, #ffffff 50%, #FABDFF, #AC8EFF)',
            background: 'linear-gradient(to right, #FABDFF, #AC8EFF,#ffffff 50%)',
            animation: `$gradient 1s linear forwards`,
            backgroundSize: '300% 300%'
        }
    },
    '@keyframes gradient': {
        "0%": {
            backgroundPosition: "right"
        },
        "100%": {
            backgroundPosition: "left"
        }
        // transition: '1s all',
        
        // backgroundPosition: '100% 50%',
/*
        // background: 'linear-gradient(to right,#FABDFF 0 calc(10% - 10px),#AC8EFF 0 calc(30% - 10px),#AC8EFF calc(50% - 10px) calc(50% + 10px),#ffffff calc(50% + 10px) 100% )',

        '&:hover': {
            border: 'none',
            // background: 'linear-gradient(to right, #FABDFF 9.17%, #AC8EFF 101.17%, #ffffff 100%)',
            
            animation: `$gradient linear 0.8s forwards`,
            // backgroundPosition: '-100% -150%',
            // transition: '1s all'
        },
        '&:focus': {
            border: 'none',
            // background: 'linear-gradient(to right, #FABDFF 9.17%, #AC8EFF 101.17%, #ffffff 100%)',
            
            animation: `$gradient linear 0.8s forwards`,
            // backgroundPosition: '-100% -150%',
            // transition: '1s all'
        }
    },
    '@keyframes gradient': {
        "0%": {
            background: 'linear-gradient(to right, #ffffff 100%)'
        },
        "10%": {
            background: 'linear-gradient(to right, #FABDFF 1%, #AC8EFF 9%, #ffffff 90%)'
        },
        "20%": {
            background: 'linear-gradient(to right, #FABDFF 2%, #AC8EFF 18%, #ffffff 80%)'
        },
        "30%": {
            background: 'linear-gradient(to right, #FABDFF 3%, #AC8EFF 27%, #ffffff 70%)'
        },
        "40%": {
            background: 'linear-gradient(to right, #FABDFF 4%, #AC8EFF 36%, #ffffff 60%)'
        },
        "50%": {
            background: 'linear-gradient(to right, #FABDFF 5%, #AC8EFF 45%, #ffffff 50%)'
        },
        "60%": {
            background: 'linear-gradient(to right, #FABDFF 6%, #AC8EFF 54%, #ffffff 40%)'
        },
        "70%": {
            background: 'linear-gradient(to right, #FABDFF 7%, #AC8EFF 63%, #ffffff 30%)'
        },
        "80%": {
            background: 'linear-gradient(to right, #FABDFF 8%, #AC8EFF 72%, #ffffff 20%)'
        },
        "90%": {
            background: 'linear-gradient(to right, #FABDFF 9%, #AC8EFF 81%, #ffffff 10%)'
        },
        '100%': {
            background: 'linear-gradient(to right, #FABDFF 10%, #AC8EFF 101.17%)'
        }
        */
       
    },
    main: {
        margin: "8em 25em 0 0"
    },
    summary: {
        fontFamily: "Helvetica"
    },
    heading: {
        fontSize: "100px",
        width: "876px",
        margin: "0 0 1em 0",
        fontWeight: "460"
    },
    proceed: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        '& div': {
            width: "148px",
            justifyContent: "space-between",
            fontSize: "14px",
            marginTop: "0"
        }
    },
    number: {
        color: "#C1C1C1",
        fontWeight: "bold",
        fontSize: "30px",
        margin: "0 18px 0 0"
    },
    what: {
        color: "#7D7D7D",
        fontStyle: "italic",
        fontSize: "12px",
        marginRight: "1em"
    },
    more: {
        marginTop: "0"
    },
    arrow: {
        fontSize: "14px"
    }
}));

export default function Start(props) {

    const click = () => {
        props.changePage(2);
    }

    const classes = useStyles();
    return(
        <div className={classes.main}>
            <p className={classes.summary}>Interpreting the complexity of human personality, characteristics, and emotional functioning:</p>
            <h1 className={classes.heading}>Inkblot test for pyscho analysis</h1>
            <div className={classes.proceed}>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Start Analysis</Button>

                <p className={classes.what}>What is this?</p>

                <div className={classes.proceed}>
                    <p className={classes.number}>1</p>
                    <div>
                        <p className={classes.more}>Read the blots in sequence and note all your answers</p>
                        <a>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>

                <div className={classes.proceed}>
                    <p className={classes.number}>2</p>
                    <div>
                        <p className={classes.more}>There is no correct answer to each of these blots, choose the one that initially comes to mind</p>
                        <a>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>

                <div className={classes.proceed}>
                    <p className={classes.number}>3</p>
                    <div>
                        <p className={classes.more}>This test is meant for you to understand your sub-conscious behaviour</p>
                        <a>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}       