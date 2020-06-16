import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import QuestionIcon from '@material-ui/icons/ContactSupport';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
    main: {
        textAlign: "center",
        margin: "5em 0"
    },
    heading: {
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "2em"
    },
    content: {
        width: "475px",
        margin: "0 auto 5em"
    },
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px",
        margin: "0 2em"
    },
    icon: {
        width: "15px"
    },
    footer:{
        marginTop: "10em",
        textAlign: "right"
    }
}));

export default function Webcam(props) {
    
    // const click = () => {
    //     props.changePage(7);
    // }
    
    const dontAccept = () => {
        props.saveData('webcam', false, 7);
    }

    const accept = () => {
        props.saveData('webcam', true, 7);
    }

    const classes = useStyles();
    return(
        <div>
            <div className={classes.main}>
                <h3 className={classes.heading}>Webcam Access <QuestionIcon className={classes.icon}/></h3>
                <p className={classes.content}>We use eye tracking technology for you to better understand what you pay attention to with these inkblots. This technology needs one-time access to the webcam. If accepted, we can better understand what influences your decisions and how your mind interprets what is in front of you. No worries, the test can still be done without eye tracking.</p>
                <Button variant="outlined" className={classes.button} onClick={dontAccept}>I don't accept</Button>
                <Button variant="outlined" className={classes.button} onClick={accept}>I Accept</Button>
                
            </div>
            {/* <footer className={classes.footer}>
                <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
            </footer> */}
        </div>
    )
}
