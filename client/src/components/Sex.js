import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import './styles/sex.css';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    }
}));

export default function Sex(props) {
    
    var sex;

    const handleClick = (e) => {
        sex = e.target.value;
    }

    const click = () => {
        props.saveData('sex', sex, 4);
        //props.changePage(4);
    }

    const classes = useStyles();
    return(
        <div className="sexMain">
            <h3 className="sexHeading">Do you identify as</h3>
            <div className="sexForm">
                <input type="radio" id="male" name="gender" value="male" onClick={handleClick}/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" onClick={handleClick}/>
                <label for="female">Female</label>
                <input type="radio" id="nonBinary" name="gender" value="nonBinary" onClick={handleClick}/>
                <label for="nonBinary">Non-Binary</label>
            </div>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
        </div>
    )
}
