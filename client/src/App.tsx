import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

interface AppProps{
  // history:any
}
interface AppState{
  // history:any
}
class App extends Component<AppProps> {
  constructor(props:AppProps){
    super(props)
  }
  render() {
    const containerStyle: React.CSSProperties = {
        backgroundColor: 'rgba(63, 81, 181, 0.2)'
    }
    return (
      <div className="vh-100" style={containerStyle}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
