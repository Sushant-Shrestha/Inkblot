import React from 'react';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    button: {
        borderRadius: "0",
        fontFamily: "Montserrat",
        textTransform: 'none',
        width: "150px",
        border: "1px black solid"
    },
    heading: {
        fontSize: "100px",
        width: "1060px",
        fontWeight: "460",
        textAlign: "center",
        margin: "1em auto",
        fontFamily: "Playfair Display"
    },
    main: {
        textAlign: "center",
    }
});

class HomePage extends React.Component{

    constructor(props){
        super(props);
    }

    click = () => {
        this.props.changePage(1);
    }

    render(){
        const {classes} = this.props;
        

        return(
            <div className={classes.main}>
                <h1 className={classes.heading}>Inkblot test for pyscho analysis made by <b>Hermann Rorschach</b></h1>
                <Button variant="outlined" className={classes.button} onClick={this.click}>Start test</Button>
            </div>
        )
    }
}

export default withStyles(useStyles)(HomePage);