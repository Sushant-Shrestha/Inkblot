import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    circle: {
        border: '1pt solid black',
        width: '50px',
        height: '50px',
        borderRadius: '30px'
    }
});

class CircleInput extends React.Component {
    constructor(props){
      super(props);
  
      this.state ={
          hidden: false,
          input: ''
      }
    }

    toggleHidden = () => {

        this.setState({hidden: !this.state.hidden})
    }

    handleChange = (e) => {

        this.setState({input: e.target.value});
    }

    render() {
        const {classes} = this.props;
        return(
            <div>
                <div id="circle" className={classes.circle} onClick={this.toggleHidden}></div>
                {!this.state.hidden && <input onChange={this.handleChange} value={this.state.input} type="text" id="input" name='input' placeholder="What do you see?" />}
            </div>
        )
    }

}

export default withStyles(useStyles)(CircleInput);