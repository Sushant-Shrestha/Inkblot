import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '@material-ui/icons/FiberManualRecord';

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
    },
    careerOption:{
        marginBottom: "10em",
        border: "none",
        borderBottom: "2px solid #000000"
    },
    circle: {
        height: "15px"
    },
    progress: {
        marginTop: "7em"
    }
}));

export default function Career(props) {
    
    const [career, setCareer] = React.useState('');

    const handleChange = (e) => {
        setCareer(e.target.value);
    }
 
    const click = () => {
        props.saveData('career', career, 6);
        //props.changePage(6);
    }

    const classes = useStyles();
    return(
        <div className={classes.main}>
            <h3 className={classes.heading}>What career field are you in?</h3>
            <select name="career" id="career" className={classes.careerOption} onChange={handleChange}>
                <option selected value=''>Select one...</option> 
                <option value="aviation">Aviation</option> 
                <option value="arts">Arts</option> 
                <option value="business">Business</option> 
                <option value="education">Education</option> 
                <option value="goverment">Goverment</option> 
                <option value="lawEnforcement">Law Enforcement</option> 
                <option value="media">Media</option> 
                <option value="medical">Medical</option> 
                <option value="serviceIndustry">Service Industry</option> 
                <option value="technology">Technology</option> 
            </select><br/>
            <Button disableRipple disabled={!career} variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={click}>Next</Button>
            <div className={classes.progress}>
                <Circle color="disabled" className={classes.circle} fontSize="small"/> <Circle color="disabled" className={classes.circle} fontSize="small"/> <Circle className={classes.circle} fontSize="small"/> 
            </div>
        </div>
    )
}