import React from "react";
import styled from "styled-components";
import leftImg from "../../../assets/Section1/leftB.png";
import middleImg from "../../../assets/Section1/middleB.png";
import rightImg from "../../../assets/Section1/rightB.png";
import pattern from "../../../assets/Section1/pattern.png";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
const Main = styled.div`
  max-width: 1200px;
  padding-top: 200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: 250px 200px;
  grid-template-areas:
    "text text text"
    "leftBox middleBox rightBox";
`;
const Text = styled.div`
  grid-area: text;
  font-family: var(--textTitle);

`;
const Title = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  line-height: 2.3em;
`;

const TextTitle = styled.p`
  max-width: 600px;
  line-height: 1.5em;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  color: #8a8e91;
`;

const LeftBox = styled.div`
  grid-area: leftBox;
  justify-self: center;
  text-align: center;
`;
const MiddleBox = styled.div`
  grid-area: middleBox;
  justify-self: center;
  text-align: center;
`;
const RightBox = styled.div`
  grid-area: rightBox;
  text-align: center;
  justify-self: center;
`;
const TextImage = styled.p`
  padding-top: 20px;
  text-align: center;
  font-size: 1.7em;
  width: 250px;
`;

const Pattern = styled.div`
background-image:url(${pattern});
background-size:contain;
width:100%;
height:100px;
background-repeat:repeat;
margin-top: 100px;
`;

function Section1() {
  return (
    <Wrapper>
      <Main>
        <Text>
          <Title>Analytics</Title>
          <TextTitle>
            The full monty burke posh excuse my French Richard cheeky bobby
            spiffing crikey Why gormless, pear shaped.!
          </TextTitle>
        </Text>
        <LeftBox>
          <img src={leftImg} alt="sprocket wheel" />
          <TextImage>Quick setup in five simple steps.</TextImage>
        </LeftBox>
        <MiddleBox>
          <img src={middleImg} alt="cloud" />
          <TextImage>Complete purchase history</TextImage>
        </MiddleBox>
        <RightBox>
          <img src={rightImg} alt="chart" />
          <TextImage>Signup, No credit card details required.</TextImage>
        </RightBox>
      </Main>
      <Pattern></Pattern>
    </Wrapper>
  );
}

export default Section1;
