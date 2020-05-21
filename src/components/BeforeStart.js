import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

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
        textAlign: "left",
        width: "543px",
        margin: "0 auto 5em"
    },
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    }
}));

export default function BeforeStart() {
    
    const click = () => {
        this.props.changePage(3);
    }

    const classes = useStyles();
    return(
        <div className={classes.main}>
            <h3 className={classes.heading}>Before you start</h3>
            <p className={classes.content}>This test consists of a series of 10 symetrical blots where the subject states what they see or what they interpret the blots as. Fill in the form below the inkblots. These slides are shown in the same order to align modern observations with historical performance.<br/>
            <br/><br/>Take your time, concentrate on defining your answer, be yourself, and try and learn a few things about your mind.</p>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Let's do this</Button>
        </div>
    )
}
