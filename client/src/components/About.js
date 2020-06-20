import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        
    },
    mainImg: {
        position: "absolute",
        top: '-2%',
        right: '1%',
        zIndex: '-1'
    },
    heading: {
        fontFamily: "Georgia",
        fontSize: '100px',
        fontWeight: 'normal',
        marginBottom: '20px'
    },
    secondary: {
        fontFamily: 'Helvetica',
        lineHeight: '10px',

    },
    date: {
        fontFamily: 'Montserrat'
    },
    content: {
        marginTop: '5em',
        width: '330px',
        lineHeight: '144.3%',
        '& > span': {
            fontFamily: 'Playfair Display',
            fontSize: '74px',
            float: 'left',
            height: '50px',
            marginTop: '23px',
            marginRight: '15px',
            
        }
    },
    secondImg: {
        position: 'fixed',
        bottom: '0px',
        left: '841px'
    },
    main: {
        position: 'relative'
    }
}));

export default function About(props) {

    const classes = useStyles();

    return(
        <div className={classes.container}>
            
            <figure className={classes.mainImg}>
                <img src={require('./img/hermann1.png')}/>
            </figure> 
            
            <div className={classes.main}>
                <h1 className={classes.heading}>Hermann Rorschach</h1>
                <div className={classes.secondary} >
                    <h4>PSYCHOANALYSIS WITHIN ART</h4>
                    <h4 className={classes.dates}>1884-1922</h4>
                </div>

                <p className={classes.content}><span>W</span>was a Swiss psychiatrist and psychoanalyst. His education in art helped to spur the development of a set of inkblots that were used experimentally to measure various unconscious parts of the subject's personality. His method has come to be referred to as the Rorschach test, iterations of which have continued to be used over the years to help identify personality, psychotic, and neurological disorders. Rorschach continued to refine the test until his premature death at age 37.</p>
                <figure className={classes.secondImg}>
                    <img src={require('./img/hermann2.png')}/>
                </figure>
            </div>
        </div>
    );
}