import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color:#ffffff;
  width: 100vw;
  // position:fixed;
  z-index:10;

`;
const NavList = styled.ul`
  width: 90vw;
  margin: 0 auto;
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // background-color:orange;
  
`;

const ListItem = styled.li`
  margin: 0px 24px;
  cursor:pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


export function NavBar(){
  return (
    <NavWrapper>
      <NavList>
        <ListItem><StyledLink to="/">about</StyledLink></ListItem>
        <ListItem><StyledLink to="/about">experience</StyledLink></ListItem>
        <ListItem>
            <Card label="projects ⤸" />
        </ListItem>
        <ListItem><StyledLink to="/contact">explorations</StyledLink></ListItem>
      </NavList>
    </NavWrapper>
  );
}

function Card({label}){
  const [menuOpen, setMenuOpen] = useState(false);
  const DropdownLink = styled(Link)`
    text-decoration: none;
    background-color:#ffffff;
    clear:right;
    width:200px;
    padding:15px 0px 8px 0px;
  `;
  const DropdownMenu = styled.div`
    display:flex;
    flex-direction:column;
    max-width:78px;
    position:fixed;

  `;

  return(
    <div onMouseEnter={()=> setMenuOpen(true)} onMouseLeave={()=>setMenuOpen(false)}>
      <div>{label}</div>
      {
        menuOpen 
        ?
        (
          <DropdownMenu onClick={()=>setMenuOpen(false)}>
            <DropdownLink to="/justaccessibility">Just Accessibility</DropdownLink>
            <DropdownLink to="/rse">Ready.Set.Excel.</DropdownLink>
            <DropdownLink to="/vrdriving">VR Driving</DropdownLink>
          
          </DropdownMenu>
        )
        :
        null
      }
    </div>
  );
}

