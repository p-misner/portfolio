import React, {Fragment} from 'react';
import {NavBar} from "./HomePage/Navigation.js";
import {Home} from "./HomePage/Hero.js";
import {Project_VRDriving, Project_RSE, Project_JustAcc} from './Projects/Project_JustAcc.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components"
import './App.css';

function App() {
  const GlobalStyle = createGlobalStyle`
      body{
        color:#082939;
        font-family: 'Poppins', sans-serif;
        margin:0px;
      }
      a:hover{
        opacity:0.5
      }
      a:visited {
        color:#082939;
      }
      h1 {
        font-weight: 600;
        font-size:72px;
        padding:0px;

      }
      h2 {
        font-weight: 600;
        font-size:36px;
      }
      p {
        font-weight:300;
        font-size:24px;
        line-height:36px;

      }
      button {
        font-size: 18px;
        font-weight:300;
        text-transform: uppercase;
      }
      
  `;

  const Content = styled.div`
  `;

  const Wrapper = styled.div`
    width: 90vw;
    background-color:rgba(0,255,0,0.1);
    margin: 0px auto;
  `;


  return (
    <Content>
      <Router>
        <NavBar />
         
        <Route path="/" exact component={Home} />
        <Route path="/justaccessibility"  component={Project_JustAcc} />
        <Route path="/rse"  component={Project_RSE} />
        <Route path="/vrdriving"  component={Project_VRDriving} />

      </Router>
      <GlobalStyle />

    </Content>
  );
}

export default App;
