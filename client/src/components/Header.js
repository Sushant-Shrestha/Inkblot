import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: "0",
        fontSize: "12px",
        fontStyle: "italic",
        textTransform: 'none'
    }
}));

export default function Header() {
    
    const classes = useStyles();
    return(
    <Head>
        <Left>
            <h3>Rorscarch Test</h3>
        </Left>
        <Right>
            <p style={{
                marginRight: '50px'
            }}>About</p>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>}>Start Analysis</Button>
        </Right>
    </Head>
    )
    
}



const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

