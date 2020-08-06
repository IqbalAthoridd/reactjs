import React, { Component } from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Tabel from './components/Tabel';
import PureComp from './components/PureComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';



class App extends Component {

  render() {
    return (
      <div className="App" >
        <ClickCounter />
        <HoverCounter />
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <PureComp /> */}
        {/* <Tabel /> */}
        {/* <FragmentDemo /> */}
      </div>
    );
  }
}

export default App;
