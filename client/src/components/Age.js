import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import './styles/age.css';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    },
    main: {
        textAlign: "center",
        margin: "10em 0 0"
    },
    heading: {
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "2em"
    }
}));

export default function Age(props) {
    
    const click = () => {
        props.changePage(5);
    }

    const classes = useStyles();
    return(
        <div className={classes.main}>
            <h3 className={classes.heading}>How old are you?</h3>
            <input type="number" id="age" name="age" max="120" className="ageInput"/><br/>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
        </div>
    )
}