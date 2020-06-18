import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import './styles/sex.css';
import Circle from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    },
    circle: {
        height: "15px"
    },
    progress: {
        marginTop: "7em"
    }
}));

export default function Sex(props) {

    const [sex, setSex] = React.useState('');

    const handleClick = (e) => {
        
        setSex(e.target.value);
    }

    const click = () => {
        
        props.saveData('sex', sex, 4);
    }

    const classes = useStyles();
    return(
        <div className="sexMain">
            <h3 className="sexHeading">Do you identify as</h3>
            <form className="sexForm">
                <input type="radio" id="male" name="gender" value="male" onClick={handleClick}/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" onClick={handleClick}/>
                <label for="female">Female</label>
                <input type="radio" id="nonBinary" name="gender" value="nonBinary" onClick={handleClick}/>
                <label for="nonBinary">Non-Binary</label>
            </form>
            <Button disableRipple disabled={!sex} variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
            <div className={classes.progress}>
                <Circle className={classes.circle} fontSize="small"/> <Circle color="disabled" className={classes.circle} fontSize="small"/> <Circle color="disabled" className={classes.circle} fontSize="small"/>
            </div>
        </div>
    )
}
