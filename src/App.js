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
      a:visited, a {
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
      h3 {
        font-weight:500;
        font-size:17px;
        line-height:24px;
      }
      p {
        font-weight:300;
        font-size:17px;
        line-height:30px;
        margin-top:24px;
        color: ${props=> props.inputColor || "#082939"}
      }
      button {
        font-size: 16px;
        font-weight:300;
        text-transform: uppercase;
        margin-top:24px;
        background-color: #082939;
        color: ${props=> props.inputColor || "white"};
        border:none;
        padding: 12px 24px;
        cursor: pointer;
      }
      caption {
        text-align: center;
        width: 80vw;
        font-weight: 200;
        font-style:italic;
        margin-top: -24px;
      }
      
  `;

  const Content = styled.div`
  `;

  const Wrapper = styled.div`
    width: 90vw;
    max-width: 900px;
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
