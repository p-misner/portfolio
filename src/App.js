import React, { useRef } from 'react';
import ReactGA from 'react-ga';

import { NavBar } from './HomePage/Navigation';
import { Footer } from './HomePage/Footer';
import { Home } from './HomePage/Home';
import { NetworkFlow } from './Explorations/networkFlow';
import { PandemicMario } from './Explorations/PandemicMario';
import { ChartCollection } from './Explorations/ChartCollection';
import { LowCostSim } from './Explorations/LowCostSim';
import { PedCrossingSim } from './Explorations/PedCrossingSim';
import {
  Project_VRDriving,
  Project_RSE,
  Project_JustAcc,
} from './Projects/Projects.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

ReactGA.initialize('UA-205070821-1', {
  debug: true,
});

ReactGA.pageview(window.location.pathname + window.location.search);

const GlobalStyle = createGlobalStyle`
      body{
        color:#082939;
        font-family: 'Poppins', sans-serif;
        margin:0px;
        
      }
      a{
        text-decoration:none;
      }
      a:visited, a {
        color:#082939;
      }
     
      h1 {
        font-weight: 600;
        font-size:72px;
        padding:0px;
        @media (max-width:800px){

          font-size: 48px;
        }

      }
      h2 {
        font-weight: 600;
        font-size:36px;
        line-height:50px;
        @media (max-width:800px){
          font-size: 32px;
          line-height:40px;
        }
        
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
       
        
      }
      button {
        font-size: 16px;
        font-weight:300;
        text-transform: uppercase;
        margin-top:24px;
        background-color: #082939;
        border:  2px solid #082939;
        color: ${(props) => props.inputColor || 'white'};
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
  overflow-x: hidden;
`;

function App() {
  return (
    <Content>
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/justaccessibility" component={Project_JustAcc} />
        <Route path="/rse" component={Project_RSE} />
        <Route path="/grointelligence" component={Project_VRDriving} />
        <Route path="/networkflow" component={NetworkFlow} />
        <Route path="/pandemicmario" component={PandemicMario} />
        <Route path="/lowcostsim" component={LowCostSim} />
        <Route path="/pedcrossingsim" component={PedCrossingSim} />

        <Footer />
      </Router>
      <GlobalStyle />
    </Content>
  );
}

export default App;
