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
            background: 'linear-gradient(to right, #FABDFF, #AC8EFF, #ffffff 50%)',
            animation: `$gradient 1s linear forwards`,
            backgroundSize: '300% 300%'
        },
        '&:focus': {
            border: 'none',
            color: 'white',
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
        marginRight: "1em",
        '&:hover':{
            cursor: 'pointer'
        }
    },
    more: {
        marginTop: "0",
        lineHeight: '133%',
        
    },
    arrow: {
        fontSize: "14px"
    },
    links: {
        '&:hover':{
            cursor: 'pointer'
        }
    }
}));

export default function Start(props) {

    const click = () => {
        props.changePage(2);
    }

    const aboutPage = () => {
        props.changePage(9);
    }

    const classes = useStyles();
    return(
        <div className={classes.main}>
            <p className={classes.summary}>Interpreting the complexity of human personality, characteristics, and emotional functioning:</p>
            <h1 className={classes.heading}>Inkblot test for pyscho analysis</h1>
            <div className={classes.proceed}>
            <Button disableRipple variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Start Analysis</Button>

                <p onClick={aboutPage} className={classes.what}>What is this?</p>

                <div className={classes.proceed}>
                    <p className={classes.number}>1</p>
                    <div>
                        <p className={classes.more}>Read the blots in sequence and note all your answers</p>
                        <a onClick={aboutPage} className={classes.links}>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>

                <div className={classes.proceed}>
                    <p className={classes.number}>2</p>
                    <div>
                        <p className={classes.more}>There is no correct answer to each of these blots, choose the one that initially comes to mind</p>
                        <a onClick={aboutPage} className={classes.links}>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>

                <div className={classes.proceed}>
                    <p className={classes.number}>3</p>
                    <div>
                        <p className={classes.more}>This test is meant for you to understand your sub-conscious behaviour</p>
                        <a onClick={aboutPage} className={classes.links}>Read more {<ArrowForwardIcon className={classes.arrow}/>}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}       