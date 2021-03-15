import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import redLabel from "../../../assets/Section2/analytices3.png";
import table from "../../../assets/Section2/analytices4.png";
import chart from "../../../assets/Section2/analytices2.png";
import comment from "../../../assets/Section2/analytices1.png";
import { section2, section2Comment,sectionChart } from "../../Style/keyframes";

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  font-family: var(--textTitle);
  padding-top:150px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
`;

const RightBox = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  visibility: hidden;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.index};
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleComment }) =>
    visibleComment &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleChart }) =>
    visibleChart &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

const Title = styled.div`
  font-size: 2.4em;
  line-height: 1.2em;
  padding-bottom: 60px;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
const Text = styled.div`
  position: relative;
  z-index: -1;
  line-height: 1.5em;
  color: #8a8e91;
  font-size: 1.1em;
  padding-bottom: 60px;
  visibility: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(138, 142, 145, 0.3);
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
const Li = styled.li`
  width: 85%;
  line-height: 1.5em;
  color: #8a8e91;
  padding-bottom: 30px;
  padding-left: 1em;
  visibility: hidden;
  &::before {
    content: "•";
    color: green;
    font-weight: bolder;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleDelay }) =>
    visibleDelay &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
    `}
`;

const Span = styled.span`
  font-weight: 600;
`;

function Section2() {
  const [visible, setVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
  const [fourthVisible, setFourthVisible] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setVisible(true);
            observer.unobserve(firstRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(firstRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setSecondVisible(true);
            observer.unobserve(secondRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(secondRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setThirdVisible(true);
            observer.unobserve(thirdRef.current);
          }
        });
      },
      { threshold: 0.75 }
    );
    observer.observe(thirdRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setFourthVisible(true);
            observer.unobserve(fourthRef.current);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(fourthRef.current);
  }, []);

  return (
    <Section>
      <Content>
        <LeftBox>
          <Image
            src={redLabel}
            alt="heart rate"
            left="0"
            visible={visible}
            ref={firstRef}
          />
          <Image
            src={table}
            alt="table of person"
            left="15%"
            top="18%"
            index="-1"
            ref={secondRef}
            visible={secondVisible}
          />
          <Image
            src={comment}
            alt="commentary"
            left="45%"
            bottom="10%"
            ref={thirdRef}
            visibleComment={thirdVisible}
          />
          <Image src={chart} alt="chart" bottom="20px" left="0" ref={fourthRef} visibleChart={fourthVisible}  />
        </LeftBox>
        <RightBox>
          <Title visible={visible} ref={firstRef}>
            Explore user behavior on an individual level of detail
          </Title>
          <Text visible={secondVisible} ref={secondRef}>
            Why I say old chap that is spiffing cobblers it's your round, haggle
            bits and bobs golly gosh up the duff mush well car boot bevvy.
          </Text>
          <ul style={{ paddingTop: "40px" }}>
            <Li visible={thirdVisible} ref={thirdRef}>
              <Span>Flexible, fast reporting:</Span> On your bike mate cobblers
              I don't want no agro bleeding crikey
            </Li>
            <Li visibleDelay={thirdVisible} ref={thirdRef}>
              <Span>Access our data anywhere: </Span> James Bond Queen's English
              mufty it's all gone to pot bobby elizabeth.
            </Li>
            <Li visibleDelay={fourthVisible} ref={fourthRef}>
              <Span>Invite your entire team: </Span> So I said in my flat
              Elizabeth no biggie me old mucker smashing starkers spiffing wind
              up, cobblers chip shop.
            </Li>
          </ul>
        </RightBox>
      </Content>
    </Section>
  );
}

export default Section2;
