import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        fontSize: "12px",
        fontStyle: "italic",
        textTransform: 'none'
    },
    prev: {
        border: "none",
        textTransform: 'none',
        fontSize: "12px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center"
    },
    right: {
        display: "flex",
        alignItems: "center"
    },
    left: {
        marginRight: '7.5em'
    },
    desc: {
        color: "#858585"
    }
}));

export default function Header(props) {
    
    const classes = useStyles();

    var hidden = "hidden";;
    var currPageDesc;

    if(props.pageNum > 2){
        hidden = "";
    }

    if(props.pageNum > 2 && props.pageNum < 6) {
        currPageDesc = <p className={classes.desc}>Background Information</p>;      
    } else if(props.pageNum > 6 && props.pageNum < 8) {
        currPageDesc = <p className={classes.desc}>Inkblot {props.currInkblot}/10</p>;        
    } else if(props.pageNum === 8){
        currPageDesc = <p className={classes.desc}>Completed</p>;
    }

    const previous = () => {
        var currPage = props.pageNum;
        if(props.currInkblot > 1 && currPage != 8){
            props.changeInkblot(props.currInkblot-1);
        } else if(currPage === 8){
            props.changePage(currPage-1);
        } else {
            console.log("heree at " + currPage);
            props.changePage(currPage-1);
        }
    }

    const homePage = () => {
        props.changePage(1);
    }

    return(
        <div className={classes.header}>
            <div className={hidden} style={{
                marginRight: '7.5em'
                }}>
            <Button variant="outlined" className={classes.button,classes.prev} startIcon={<ArrowBackwardIcon/>} onClick={previous}>Previous</Button>
            </div>
            <div className={classes.mid}>
                <h3 onClick={homePage}>Rorscarch Test</h3>
                {currPageDesc}
            </div>
            <div className={classes.right}>
                <p style={{
                marginRight: '50px'
                }}>About</p>
                <Button onClick={props.restartApp} variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>}>Start Analysis</Button>
            </div>
        </div>
    )
    
}