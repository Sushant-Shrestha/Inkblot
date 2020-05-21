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
    },
    sexMain: {
        textAlign: "center",
        margin: "10em 0 0"
    },
    heading: {
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "2em"
    },
    form: { 
        marginBottom: "10em"        
    }
}));

export default function BeforeStart(props) {
    
    const click = () => {
        props.changePage(4);
    }

    const classes = useStyles();
    return(
        <div className={classes.sexMain}>
            <h3 className={classes.heading}>Do you identify as</h3>
            <div className={classes.form}>
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"/>
                <label for="female">Female</label>
                <input type="radio" id="nonBinary" name="gender" value="nonBinary"/>
                <label for="nonBinary">Non-Binary</label>
            </div>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
        </div>
    )
}

const Input = styled.input`
content: '';
background-color: white;
border: 2px solid #ddd;
display: inline-block;
vertical-align: middle;
width: 20px;
height: 20px;
padding: 2px;
margin-right: 10px;
text-align: center;
`;