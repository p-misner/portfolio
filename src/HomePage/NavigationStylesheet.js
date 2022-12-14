import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavWrapper = styled.nav`
  background-color:#ffffff;
  width: 100%;
  max-width: 960px;
  position: fixed;
  margin: 0 auto;
  z-index:10;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin-left: -16px;
  text-decoration: none;
  font-size:18px;
  font-weight:500;
  
  
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
  font-size:10px;
`;