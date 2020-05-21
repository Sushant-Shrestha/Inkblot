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

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      pageNum: 0,
      webcam: false
    }
  }

  changePage = (num) => {
    this.setState({pageNum: num});
  }

  webcamControl = (boolean) => {
    this.setState({webcam: boolean})
  }

  pages = [<HomePage changePage={this.changePage}/>,
           <Start changePage={this.changePage}/>, 
           <BeforeStart changePage={this.changePage}/>,
           <Sex changePage={this.changePage}/>,
           <Age changePage={this.changePage}/>,
           <Career changePage={this.changePage}/>,
           <Webcam changePage={this.changePage} webcamControl={this.webcamControl}/>
          ]

  render() {
    return (
      <div className="App">
        <Header />
        {/* {this.pages[this.state.pageNum]} */}
        <Inkblot/>
      </div>
    );
  }
}

export default App;

