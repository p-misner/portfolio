import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NavWrapper,
  NavListLeft,
  NavListRight,
  Logo,
  ListItem,
  DropdownMenu,
  Label,
} from './NavigationStylesheet.js';
import GradientSquare from '../Images/GradientSquareBorder.png';

export function NavBar() {
  return (
    <NavWrapper>
      <NavListLeft>
        <ListItem>
          <Logo to="/">
            {' '}
            <img src={GradientSquare} />
            priya misner{' '}
          </Logo>
        </ListItem>
      </NavListLeft>
      <NavListRight>
        {/* <ListItem><StyledLink to="/">experience</StyledLink></ListItem> */}
        <ListItem>
          <a href="/#work">
            <Label>work</Label>
          </a>
          {/* <Card 
              label="work ⤸" 
              items={
                [
                  {link:"/justaccessibility", title:"Geographic Viz"}, 
                  {link:"/rse", title:"Redesigning Results"}, 
                  {link:"/vrdriving", title:"VR Driving"}, 
                ]
              } 
            /> */}
        </ListItem>
        <ListItem>
          <a href="/#explorations">
            <Label>explorations</Label>
          </a>
          {/* <Card 
              label="explorations ⤸" 
              items={
                [
                  {link:"/networkflow", title:"Network Flow"}, 
                  {link:"/pandemicmario", title:"Pandemic Mario"}, 
                  {link:"/chartcollection", title:"Charts"}, 
                ]
              } 
            /> */}
        </ListItem>
        {/* <ListItem><StyledLink to="/#explorations">explorations</StyledLink></ListItem> */}
      </NavListRight>
    </NavWrapper>
  );
}

function Card({ label, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const DropdownLink = styled(Link)`
    text-decoration: none;
    background-color: #ffffff;
    clear: right;
    width: 200px;
    padding: 15px 0px 8px 0px;
  `;

  return (
    <div
      onMouseEnter={() => setMenuOpen(true)}
      onClick={() => setMenuOpen(!menuOpen)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <Label>{label}</Label>
      {menuOpen ? (
        <DropdownMenu onClick={() => setMenuOpen(false)}>
          {items.map((item) => {
            return (
              <DropdownLink key={item.link} to={item.link}>
                {item.title}
              </DropdownLink>
            );
          })}
          {/* <DropdownLink to="/justaccessibility">Just Accessibility</DropdownLink>
            <DropdownLink to="/rse">Ready.Set.Excel.</DropdownLink>
            <DropdownLink to="/vrdriving">VR Driving</DropdownLink> */}
        </DropdownMenu>
      ) : null}
    </div>
  );
}
