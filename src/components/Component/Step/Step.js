import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import firstImg from "../../../assets/Step/setup_img1.png";
import secondImg from "../../../assets/Step/setup_img2.png";
import thirdImg from "../../../assets/Step/setup_img3.png";
import { section2Comment, sectionChart } from "../../Style/keyframes";

const StepStyle = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-family: var(--textTitle);
`;
const Title = styled.h3`
  text-align: center;
  padding-top: 150px;
  padding-bottom: 50px;
  font-size: 2.3em;
  line-height: 1.3;
`;

const SpanTitle = styled.span`
  display: block;
  font-weight: 600;
`;

const SpanText = styled(SpanTitle)`
  font-size: 1.3em;
  line-height: 1.2;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 1);
`;

const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  margin: 0 auto;
  text-align: center;
  width: 550px;
`;
const Content = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const FirstImage = styled.img.attrs({
  src: `${firstImg}`,
})`
  grid-column: 1/2;
  grid-row: 1/2;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

const FirstNumber = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
  width: 75px;
  height: 75px;
  border: none;
  border-radius: 50%;
  background-color: #e8ebed;
  box-shadow: 0 10px 30px 0 rgb(1 1 64 / 8%);
  &::after {
    content: "01";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    color: #4e78f4;
  }
  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed rgba(0, 0, 0, 0.5);
    height: 225px;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const FirstTextInside = styled.p`
  grid-column: 3/4;
  grid-row: 1/2;
  visibility: hidden;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.4;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
const SecondImage = styled.img.attrs({
  src: `${secondImg}`,
})`
  grid-column: 3/4;
  grid-row: 2/3;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
const SecondNumber = styled(FirstNumber)`
  grid-column: 2/3;
  grid-row: 2/3;
  &::after {
    content: "02";
  }
`;
const SecondTextInside = styled(FirstTextInside)`
  grid-column: 1/2;
  grid-row: 2/3;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
    `}
`;
const ThirdImage = styled.img.attrs({
  src: `${thirdImg}`,
})`
  grid-column: 1/2;
  grid-row: 3/4;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
const ThirdNumber = styled(FirstNumber)`
  grid-column: 2/3;
  grid-row: 3/4;
  &::after {
    content: "03";
  }
  &::before {
    height: 0;
  }
`;
const ThirdTextInside = styled(FirstTextInside)`
  grid-column: 3/4;
  grid-row: 3/3;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
    `}
`;

function Step() {
  const [firstRow, setFirstRow] = useState(false);
  const [secondRow, setSecondRow] = useState(false);
  const [thirdRow, setThirdRow] = useState(false);

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const thirdRowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setFirstRow(true);
            observer.unobserve(firstRowRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(firstRowRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setSecondRow(true);
            observer.unobserve(secondRowRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(secondRowRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setThirdRow(true);
            observer.unobserve(thirdRowRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(thirdRowRef.current);
  }, []);

  return (
    <StepStyle>
      <Wrapper>
        <Title>
          Easy Setup <SpanTitle>Get started in 30 seconds</SpanTitle>
        </Title>

        <Text>
          The full monty burke posh excuse my French Richard cheeky bobby
          spiffing crikey Why gormless, pear shaped.!
        </Text>
        <Content>
          <FirstImage ref={firstRowRef} visible={firstRow} />
          <FirstNumber></FirstNumber>
          <FirstTextInside ref={firstRowRef} visible={firstRow}>
            <SpanText>Share research with the whole team</SpanText>
            My good sir car boot super old owt to do with me say no biggie
            cheeky bugger
          </FirstTextInside>
          <SecondTextInside ref={secondRowRef} visible={secondRow}>
            <SpanText>Track changes in feedback over time</SpanText>
            My good sir car boot super old owt to do with me say no biggie
            cheeky bugger
          </SecondTextInside>
          <SecondNumber></SecondNumber>
          <SecondImage ref={secondRowRef} visible={secondRow} />
          <ThirdImage ref={thirdRowRef} visible={thirdRow} />
          <ThirdNumber></ThirdNumber>
          <ThirdTextInside ref={thirdRowRef} visible={thirdRow}>
            <SpanText>Advanced mining Traffic</SpanText>
            My good sir car boot super old owt to do with me say no biggie
            cheeky bugger
          </ThirdTextInside>
        </Content>
      </Wrapper>
    </StepStyle>
  );
}

export default Step;
