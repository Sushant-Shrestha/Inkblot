import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


const useStyles = makeStyles(theme => ({
    main: {
        textAlign: "center",
        margin: "5em 0"
    },
    heading: {
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "1.5em"
    },
    content: {
        textAlign: "left",
        width: "460px",
        margin: "0 auto 5em"
    },
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    },
    icons: {
        margin: "0 2em 3em 0"
    }
}));

export default function Webcam(props) {
    
    const aboutPage = () => {
        props.changePage(7);
    }

    const classes = useStyles();

    return(
        <div className={classes.main}>
            <h3 className={classes.heading}>You’ve completed the Rorscach Test</h3>
            <div className={classes.icons}><PrintOutlinedIcon style={{marginRight: "0.5em"}}/> <SaveAltIcon/></div>
            <p className={classes.content}>Like art, the Rorscach test is made to behave in ambiguity. It is up to the interpreter to understand what the inkblots mean to them and what parts of the unconscious they use to make decisions. We have provided the measurements to your test, it is to you to decide who you are.</p>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={aboutPage}>About Rorscach</Button>
        </div>
    )
}