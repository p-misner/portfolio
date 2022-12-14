import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavWrapper = styled.nav`
  background-color:#ffffff;
  width:calc(100vw - 32px);
  position: fixed;
  z-index:10;
  display:flex;
  flex-direction: row;
  justify-content: space-between;    
  left: 50%;
  transform: translate(-50%, 0);
  
  @media (min-width: 768px) {
    width: calc(100vw - 64px);
  }
  @media (min-width: 1024px) {
    width: 960px;
  }
`;

//logo
export const NavListLeft = styled.ul`
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;  
  flex-wrap: nowrap;
`;

//dropdown links
export const NavListRight = styled.ul`
  // margin: 0 auto;
  list-style: none;
  margin-top: 0px;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
`;

export const Logo = styled(Link)`
  margin-left: -24px;
  text-decoration: none;
  font-size:18px;
  font-weight:500;
  @media (min-width: 768px) {
    margin-left: -24px;

  }
  
  
`;

export const ListItem = styled.li`
  margin: 0px 24px;
  cursor:pointer;
  
`;

export const DropdownMenu = styled.div`
    display:flex;
    flex-direction:column;
    max-width:78px;
    position:fixed;

  `;

export const Label = styled.div`
  font-size:0px;
  @media (min-width: 440px) {
    font-size:18px; 
  }
`;