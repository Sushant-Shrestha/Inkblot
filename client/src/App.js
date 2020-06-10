import React from 'react';
import Header from './components/Header';
import './App.css';
import HomePage from './components/HomePage';
import Start from './components/Start';
import styled from 'styled-components';
import BeforeStart from './components/BeforeStart';
import Sex from './components/Sex';
import Age from './components/Age';
import Career from './components/Career';
import Webcam from './components/Webcam';
import End from './components/End';
import Inkblot from './components/Inkblot';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      pageNum: 1,
      currInkblot: 1,
      userData: {
        sex: '',
        age: '',
        career: '',
        webcam: false,
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: ''
      }
    }
  }

  changePage = (num) => {
    this.setState({pageNum: num});
  }

  // webcamControl = (boolean) => {
  //   this.setState({webcam: boolean});
  // }

  changeInkblot = (attribute, data, picNum) => {
    this.setState({ userData: {
      ...this.state.userData, [attribute]: data
    }}, () => {this.setState({currInkblot: picNum})});
    
  }

  saveData = (attribute, data, nextPage) => {
    //let {userData} = this.state;
    this.setState({ userData: {
      ...this.state.userData, [attribute]: data
    }}, () => {this.changePage(nextPage)});

    //this.setState({ [attribute] : data}, () => {console.log(this.state.age)} );
  }

  sendInfoToServer = () => {
    // console.dir(this.state.userData);
    const { userData } = this.state;

    axios({
      url: '/',
      method: 'POST',
      data: { userData}
    })
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
  }

  render() {
    const pages = [
        <HomePage changePage={this.changePage}/>,
        <Start changePage={this.changePage}/>, 
        <BeforeStart changePage={this.changePage}/>,
        <Sex changePage={this.changePage} saveData={this.saveData}/>,
        <Age changePage={this.changePage} saveData={this.saveData}/>,
        <Career changePage={this.changePage} saveData={this.saveData}/>,
        <Webcam changePage={this.changePage} saveData={this.saveData}/>,
        <Inkblot currInkblot={this.state.currInkblot} changePage={this.changePage} changeInkblot={this.changeInkblot} saveData={this.saveData}/>,
        <End sendToServer={this.sendInfoToServer} data={this.state.userData}/>
     ];
    return (
      <div className="App">
        <Header pageNum={this.state.pageNum} currInkblot={this.state.currInkblot} changePage={this.changePage}/>
        {pages[this.state.pageNum]}
        {/* <End data={this.state.userData}/> */}
        
      </div>
    );
  }
}

export default App;

