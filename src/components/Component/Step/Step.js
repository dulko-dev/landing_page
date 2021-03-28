import React, { useEffect, useRef, useState } from "react";
import {
  StepStyle,
  Wrapper,
  Title,
  SpanTitle,
  Text,
  ThirdNumber,
  ThirdTextInside,
  Content,
  FirstImage,
  FirstNumber,
  FirstTextInside,
  SpanText,
  SecondTextInside,
  SecondNumber,
  SecondImage,
  ThirdImage,
} from "../../Style/Step/stepstyle";

function Step(_, ref) {
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
    <StepStyle ref={ref}>
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

const stepRef = React.forwardRef(Step);

export default stepRef;
