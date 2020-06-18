import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = theme => ({
    heading: {
        fontSize: "50px",
        margin: "0 0 1em 0",
        fontWeight: "460",
        textAlign: "center"
    },
    list: {
        // display: "flex",
        margin: "2em",
        textAlign: "center",
        // justifyContent: "center",
        // alignItems: "center"
    },
    image: {
        width: "30em",
        height: "20em",
        marginRight: "2em"
    },
    para: {
        // width: "30em"
    }
});

class PDF extends React.Component {
    constructor(props){
        super(props);
    }

    

    render() {
        const inkblot = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        const {classes} = this.props;
        return (
            <div>
                
                <h1 className={classes.heading}>Inkblot test for pyscho analysis</h1>
                {inkblot.map((blot,index)=> {
                    return (
                        <div key={index}>
                            <div className={classes.list}> 
                                <img className={classes.image} src={require(`./img/blot${index+1}.jpg`)} />
                                {/* <p>{this.props.data[blot]}</p> */}
                                <p className={classes.para}>{this.props.data[blot]}</p>
                            </div>
                            <Divider variant="inset"/>
                        </div>
                    )
                    
                })}
            </div>
        );
    }
}

export default withStyles(useStyles)(PDF);