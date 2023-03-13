import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section
        title = "Model 3"
        description = "Leasing starting at $349/mo"
        leftbtn = "Custom Order"
        rightbtn = "View Inventory"
        backgroundImg="model-3.jpg"
        />
        <Section
        title = "Model Y"
        leftbtn = "Custom Order"
        rightbtn = "View Inventory"
        backgroundImg="model-y.jpg"
        />
        <Section
        title = "Model S"
        description = "Schedule a Demo Drive"
        leftbtn = "Custom Order"
        rightbtn = "View Inventory"
        backgroundImg="model-s.jpg"
        />
        <Section
        title = "Model X"
        description = "Schedule a Demo Drive"
        leftbtn = "Custom Order"
        rightbtn = "View Inventory"
        backgroundImg="model-x.jpg"
        />
        <Section
        title = "Solar Panels"
        description = "Lowest Cost Solar Panels in America"
        leftbtn = "Order Now"
        rightbtn = "Learn more"
        backgroundImg="solar-panel.jpg"
        />
        <Section
        title = "Solar Roof"
        description = "Produce Clean Energy From Your Roof"
        leftbtn = "Order Now"
        rightbtn = "Learn more"
        backgroundImg="solar-roof.jpg"
        />
        <Section
        title = "Accessories"
        leftbtn = "Shop Now"
        backgroundImg="accessories.jpg"
        />

    </Container>
  )
}

export default Home;

const Container = styled.div`
height: 100vh;
`