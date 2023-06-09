import React from 'react';
import styled from 'styled-components';


function Section({ title, description, leftbtn, backgroundImg, rightbtn }) {
    return (
        <Container bgImage={backgroundImg} >
            <ItemText>
                <h1>
                    { title }
                </h1>
                <p>
                   { description }
                </p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                  { leftbtn }
                </LeftButton>
                {rightbtn && 
                <RightButton>
                  { rightbtn }
                </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Container>
    )
}

export default Section

const Container = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url('/images/${props.bgImage}')` };
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
cursor: pointer;
@media (max-width: 786px){
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
align-items: center;
color: white;
display:flex;
justify-content: center;
border-radius: 100px;
opacity:0.85;
text-transform: uppercase;
font-size: 12px;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
cursor: pointer;
`
const Buttons = styled.div`

`