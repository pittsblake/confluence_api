import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import SideNav from './components/SideNav';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import ReleaseNotes from './components/ReleaseNotes';
import Body from './components/Body'
import styled from 'styled-components'
import Help from './components/Help'

class App extends Component {
  state = {
    realeaseNotes: false,
    help: false
  }

  onReleaseNotes = () => {
    this.setState({
      realeaseNotes: true,
      help: false
    })
  }

  onHelp = () => {
    this.setState({
      help: true,
      realeaseNotes: false
    })
  }


  checkForComponent = () => {
    if (this.state.realeaseNotes) {
      return <ReleaseNotes />
    }
    else if (this.state.help) {
      return <Help />
    }

    return <Body />
  }

  render() {
    this.checkForComponent();

    return (
      <Router>
        <div className="container">
        
          <Header> </Header>
          <SideNavBodyContainer>
            <SideNav
              onReleaseNotes={this.onReleaseNotes}
              onHelp={this.onHelp}
            ></SideNav>


            <Switch>
              <Route exact path="/release-notes" component={ReleaseNotes} />
              <Route exact path="/help" component={Help} />

            </Switch>
          </SideNavBodyContainer>
        </div>
      </Router>
    );
  }
}

export default App;


const SideNavBodyContainer = styled.div`
  display: flex;
`