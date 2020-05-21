import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = theme => ({
    button: {
        borderRadius: "0",
        fontFamily: "Montserrat",
        textTransform: 'none',
        width: "150px",
        border: "1px black solid",
        marginTop: "5em"
    },
    main: {
        textAlign: "center"
    },
    input: {
        border: "none",
        borderBottom: "2px solid #000000",
        width: "583px"
    }
});

class Inkblot extends React.Component {
    constructor(props){
      super(props);
    }

    click = () => {

    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.main}>
                <figure>
                    {/* Image  */}
                </figure>
                <div>
                    {/* User input */}
                    <input className={classes.input} type="text" id="overall" name="overall" placeholder="What do you see?"/>
                    <CreateIcon /> <PrintOutlinedIcon/> 
                </div>
                <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={this.click}>Continue</Button>
            </div>
        )
    }
}

export default withStyles(useStyles)(Inkblot);
