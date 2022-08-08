import styledComponents from 'styled-components'


const Container = styledComponents.div `

height : 30px;
background-color: teal;
color: white;
display:flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;


`

const Announcement = () => {
  return (
 <Container> Super Deal, Free shipping! $50</Container>
  )
}

export default Announcement