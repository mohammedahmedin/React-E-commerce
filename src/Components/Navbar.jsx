import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`


`

const Wrapper = styledComponents.div`
padding: 10px; 20px;
display: flex;
align-items: center;
justify-content: space-between;
`



const Left = styledComponents.div`
flex: 1;
display: flex;
align-items: center; 

`;


const Language = styledComponents.span`
font-size: 14 px;
cursor: pointer;
`;

const SearchContainer  = styledComponents.div `

display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`;

const Input = styledComponents.input`

`




const Center = styledComponents.div`
flex: 1;
text-align: center;
`;

const Logo = styledComponents.h1
`
font-weight: bold;
`;
const Right = styledComponents.div`
flex: 1;
display: flex;
padding: 10px;
justify-content: flex-end;
`;

const MenuItem = styledComponents.div`
font-size: 14 px;
cursor:  pointer;
margin-left: 25px;

`





const Navbar = () => {
  return (
    <Container>
      <Wrapper>

      <Left>
      <Language> Eng </Language>
      <SearchContainer>
       <Input />
      
      <Search style={{color:"blue"}} /> 
      </SearchContainer>
      </Left>

      <Center><Logo>Mixez.</Logo></Center>
       <Right>

    <MenuItem>REGISTER</MenuItem>
    <MenuItem>SIGN IN</MenuItem>
    <MenuItem>
    <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge>
    
    </MenuItem>
       
       </Right>
      
      </Wrapper> 
    </Container>
  )
}

export default Navbar
