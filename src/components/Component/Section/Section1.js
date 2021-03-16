import React from "react";
import leftImg from "../../../assets/Section1/leftB.png";
import middleImg from "../../../assets/Section1/middleB.png";
import rightImg from "../../../assets/Section1/rightB.png";
import {
  Wrapper,
  Main,
  Text,
  Title,
  TextTitle,
  LeftBox,
  TextImage,
  MiddleBox,
  RightBox,
  Pattern,
} from "../../Style/Section/section1style";

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
