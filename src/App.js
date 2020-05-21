import React from 'react';
import Header from './components/Header';
import './App.css';
import HomePage from './components/HomePage';
import Start from './components/Start';
import styled from 'styled-components';
import BeforeStart from './components/BeforeStart';
import Sex from './components/Sex';
import Age from './components/Age';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      pageNum: 0
    }
  }

  changePage = (num) => {
    this.setState({pageNum: num});
  }

  pages = [<HomePage changePage={this.changePage}/>,
           <Start changePage={this.changePage}/>, 
           <BeforeStart changePage={this.changePage}/>,
           <Sex changePage={this.changePage}/>,
           <Age changePage={this.changePage}/>
          ]

  render() {
    return (
      <div className="App">
        <Header />
        {this.pages[this.state.pageNum]}
        
      </div>
    );
  }
}

export default App;

