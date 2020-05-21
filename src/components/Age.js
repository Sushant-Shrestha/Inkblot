import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    }
}));

export default function Age(props) {
    
    const click = () => {
        props.changePage(5);
    }

    const classes = useStyles();
    return(
        <div>
            <h3>How old are you?</h3>
            <input type="number" id="age" name="age"/>
        </div>
    )
}