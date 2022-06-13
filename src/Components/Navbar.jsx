import { Search } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`


`

const Wrapper = styledComponents.div`
padding: 10px; 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;



const Left = styledComponents.div`
flex: 1;
display: flex;

`;


const Language = styledComponents.span`
font-size: 14 px;
cursor: pointer;
`;

const SearchContainer  = styledComponents.div `
border:  0.5 px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`;

const Input = styledComponents.input`



`







const Center = styledComponents.div`
flex: 1;

`;
const Right = styledComponents.div`
flex: 1;
`;






const Navbar = () => {
  return (
    <Container>
      <Wrapper>

      <Left>
      <Language> Eng </Language>
      <SearchContainer>
    
      <Input />
      
      <Search/> 
      </SearchContainer>
      </Left>

      


      <Center>Center</Center>
       <Right> Right</Right>
      
      </Wrapper> 
    </Container>
  )
}

export default Navbar
