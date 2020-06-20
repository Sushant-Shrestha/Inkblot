import React from 'react';
import {Button} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import CreateIcon from '@material-ui/icons/Create';
import RotateIcon from '@material-ui/icons/Autorenew';
import CircleInput from './CircleInput';

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
          imageRotation: 0,
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
          seven: '',
          eight: '',
          nine: '',
          ten: '',
          hidden: true,
          x: '',
          y: ''
      }      
    }    

    inkblot = [ 'zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    
    handleChange = (e) => {
        const currInkblot = this.inkblot[this.props.currInkblot];
        this.setState({ [currInkblot]: e.target.value});
    }
    
    onMouseClick = (e) => {
        var xCord = e.nativeEvent.offsetX;
        var yCord = e.nativeEvent.offsetY;
        
        this.setState({
            x: xCord,
            y: yCord
        })
        // this.toggleHidden();
    }

    toggleHidden = () => {
        this.setState({hidden: !this.state.hidden});
    }

    click = () => {
        let temp = this.props.currInkblot;
        const currInkblot = this.inkblot[this.props.currInkblot];
        if(temp < 10) {        
            this.props.changeInkblot(currInkblot, this.state[currInkblot],temp+1);
        } else {
            this.props.saveData(currInkblot, this.state[currInkblot], 8);
            //this.props.changePage(8);
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
                        <img onClick={this.onMouseClick} style={{transform: `rotate(${this.state.imageRotation}deg)`}} className={classes.image} src={require(`./img/blot${this.props.currInkblot}.jpg`)}/>
                        {/* {!this.state.hidden && <CircleInput style={{ position: 'absolute', left: this.state.x, top: this.state.y }}/>} */}
                    </figure>
                </div>
                <div className={classes.userInput}>
                    {/* User input */}
                    <input value={this.state[this.inkblot[this.props.currInkblot]]} onChange={this.handleChange} className={classes.input} type="text" id="overall" name={this.props.currInkblot} placeholder="What do you see?"/>
                    <CreateIcon /> <PrintOutlinedIcon/> <RotateIcon onClick={this.rotate}/>
                </div>
                <Button disableRipple variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={this.click}>Continue</Button>
            </div>
        )
    }
}

export default withStyles(useStyles)(Inkblot);
