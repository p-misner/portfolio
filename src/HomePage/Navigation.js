import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color:#ffffff;
  width: 90vw;
  max-width: 1200px;

  margin: 0 auto;
  z-index:10;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  // background-color:green;

`;

const NavListLeft = styled.ul`
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;  
  // background-color:red;
`;

const NavListRight = styled.ul`
  // margin: 0 auto;
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // background-color:orange;
  
`;

const Logo = styled(Link)`
  margin-left: -16px;
  text-decoration: none;
  font-size:17px;
  font-weight:500;
  
  @media (max-width:450px){
    font-size:13px;
  }
`;

const ListItem = styled.li`
  margin: 0px 24px;
  cursor:pointer;
  
`;

const DropdownMenu = styled.div`
    display:flex;
    flex-direction:column;
    max-width:78px;
    position:fixed;

  `;

  const Label = styled.div`
  font-size:17px;
  
  @media(max-width:450px){
    font-size:13px;
  }
`;


export function NavBar(){
  return (
    <NavWrapper>
      <NavListLeft>
        <ListItem><Logo to="/"> priya misner </Logo></ListItem>
      </NavListLeft>
      <NavListRight>
        {/* <ListItem><StyledLink to="/">experience</StyledLink></ListItem> */}
        <ListItem>
            <Card 
              label="work ⤸" 
              items={
                [
                  {link:"/justaccessibility", title:"Geographic Viz"}, 
                  {link:"/rse", title:"Redesigning Results"}, 
                  {link:"/vrdriving", title:"VR Driving"}, 
                ]
              } 
            />
        </ListItem>
        <ListItem>
            <Card 
              label="explorations ⤸" 
              items={
                [
                  {link:"/networkflow", title:"Network Flow"}, 
                  {link:"/pandemicmario", title:"Pandemic Mario"}, 
                  {link:"/chartcollection", title:"Charts"}, 
                ]
              } 
            />
        </ListItem>
        {/* <ListItem><StyledLink to="/#explorations">explorations</StyledLink></ListItem> */}
      </NavListRight>
    </NavWrapper>
  );
}

function Card({label, items}){
  const [menuOpen, setMenuOpen] = useState(false);
  const DropdownLink = styled(Link)`
    text-decoration: none;
    background-color:#ffffff;
    clear:right;
    width:200px;
    padding:15px 0px 8px 0px;
  `;
  
    

  return(
    <div onMouseEnter={()=> setMenuOpen(true)} onClick={()=> setMenuOpen(!menuOpen)} onMouseLeave={()=>setMenuOpen(false)}>
      <Label>{label}</Label>
      {
        menuOpen 
        ?
        (
          <DropdownMenu onClick={()=>setMenuOpen(false)}>
            {
              items.map(item =>{
                return <DropdownLink key={item.link} to={item.link}>{item.title}</DropdownLink>
              })
            }
            {/* <DropdownLink to="/justaccessibility">Just Accessibility</DropdownLink>
            <DropdownLink to="/rse">Ready.Set.Excel.</DropdownLink>
            <DropdownLink to="/vrdriving">VR Driving</DropdownLink> */}
          
          </DropdownMenu>
        )
        :
        null
      }
    </div>
  );
}

