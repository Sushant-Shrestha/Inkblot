import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import CreateIcon from '@material-ui/icons/Create';
import RotateIcon from '@material-ui/icons/Autorenew';


const useStyles = theme => ({
    button: {
        borderRadius: "0",
        fontFamily: "Montserrat",
        textTransform: 'none',
        width: "150px",
        border: "1px black solid",
        top: "54em"
    },
    main: {
        textAlign: "center"
    },
    input: {
        border: "none",
        borderBottom: "2px solid #000000",
        width: "583px"
    },
    image: {
        display: "block",
        // margin: "-50% 0 0 65%",
        // transform: "translate(0, -100%)",
        // whiteSpace: "nowrap",
        maxHeight: "40em",
        maxWidth: "auto",
        // margin: "40em"
    },
    outerRotate: {
        display: "table",
        marginLeft: "auto",
        marginRight: "auto"
    },
    innerRotate: {
        // padding: "50% 0 30% 0",
        // paddingTop: "50%"
        height: "0"
        
    },
    userInput: {
        position: "relative",
        top: "45em",
        
    }
});

class Inkblot extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          imgID: 10,
          imageRotation: 0
      }
    }

    click = () => {
        let temp = this.state.imgID;

        if(temp <=10) {
        this.setState({imgID: temp +1});
        } else {
            this.props.changePage(8);
        }        
    }

    rotate= () => {
        let temp = this.state.imageRotation;
       
        if(temp == 270){
            this.setState({imageRotation: 0});
        } else {
            this.setState({imageRotation: temp + 90});
        }
    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.main}>
                <div className={classes.outerRotate}>
                    <figure className={classes.innerRotate}>
                        <img style={{transform: `rotate(${this.state.imageRotation}deg)`}} className={classes.image} src={require(`./img/blot${this.state.imgID}.jpg`)}/>
                        
                    </figure>
                </div>
                <div className={classes.userInput}>
                    {/* User input */}
                    <input className={classes.input} type="text" id="overall" name="overall" placeholder="What do you see?"/>
                    <CreateIcon /> <PrintOutlinedIcon/> <RotateIcon onClick={this.rotate}/>
                </div>
                <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={this.click}>Continue</Button>
            </div>
        )
    }
}

export default withStyles(useStyles)(Inkblot);
