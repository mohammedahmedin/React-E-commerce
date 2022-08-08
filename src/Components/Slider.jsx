import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styledComponents from "styled-components"
import img1 from "../Images/blue-adidas.png"

const Container = styledComponents.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const Arrow = styledComponents.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display:flex; align-items:center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left:  ${props=> props.direction === "left" && "10px" };
right:  ${props=> props.direction === "right" && "10px" };
margin: auto;
cursor: pointer;
opacity: 0.5;

`
const Wrapper = styledComponents.div`
height 100%

`

const Slide = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex; 
align-items: center;
`
const ImageContainer = styledComponents.div`
height: 100%;
flex: 1;
`
  const Image = styledComponents.img`
  height: 80%;
  background-color: transparent;
  
  `


const InfoContainer = styledComponents.div`
flex:1;
padding: 50px;
`
const   Title = styledComponents.h1`
font-size: 60px;
`;

const   Desc = styledComponents.p`
margin: 50px; 0px;
font-size:30px;
font-weight:800;
letter-spacing: 3px;

`;

const   Button = styledComponents.button`
padding:10px;
font-size:20px;
cursor: pointer;
font-weight:900;
background-color: transparent;
`;











const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
      <ArrowLeftOutlined/>
      </Arrow>

      <Wrapper>
      <Slide>
      <ImageContainer>
      <Image src={img1}  />
      </ImageContainer>

      <InfoContainer>
      <Title> SUMMER SALE</Title>
      <Desc>GET FLAT 30% OF FOR NEW ARRIVALS!</Desc>
      <Button>SHOW NOW</Button>
      </InfoContainer>

      </Slide>
      <Slide>
      <ImageContainer>
      <Image src={img1}  />
      </ImageContainer>

      <InfoContainer>
      <Title> SUMMER SALE</Title>
      <Desc>GET FLAT 30% OF FOR NEW ARRIVALS!</Desc>
      <Button>SHOW NOW</Button>
      </InfoContainer>

      </Slide>
      </Wrapper>

      <Arrow direction="right">
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
