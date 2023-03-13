import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
        <HeaderContainer1>
        <p>
        Until March 2023, new Model 3 and Model Y vehicles qualify for a $7,500 federal tax credit for eligible buyers. <a href="">Learn More</a>
        </p>
        </HeaderContainer1>
        <HeaderContainer2>
      <a>
        <img src='\images\logo.svg' alt='' />
      </a>
      </HeaderContainer2>
      <Menu>
        <p>Menu</p>
      </Menu>
      <MenuNavigation>
        <li>Existing Inventory </li>
      </MenuNavigation>
    </Container>
  )
}

export default Header;

const Container = styled.div`
height:50px;
width:1200px;
padding-top:15px;
`
const HeaderContainer1 = styled.div`
`
const HeaderContainer2 = styled.div`
align-items: center;
position:fixed;
min-height: 60px;
display: flex;
padding-top:30px;
padding-left: 30px;
`
const Menu = styled.div`
height: 4px;
width: 2px;
position: fixed;
display: flex;
padding-top: 30px;
padding-left: 1140px;
cursor: pointer;
justify-content: center;
font-size: 17px;
opacity:0.85;
`
const MenuNavigation = styled.div`

`
