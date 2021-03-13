import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import redLabel from "../../../assets/Section2/analytices3.png";
import table from "../../../assets/Section2/analytices4.png";
import chart from "../../../assets/Section2/analytices2.png";
import comment from "../../../assets/Section2/analytices1.png";
import { section2 } from "../../Style/keyframes";

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  font-family: var(--textTitle);
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
 
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  z-index: ${props => props.index};
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 3s;
    `}
`;

const Title = styled.div`
  font-size: 2.4em;
  line-height: 1.2em;
  padding-bottom: 60px;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 3s;
    `}
`;
const Text = styled.div`
  position: relative;
  z-index: -1;
  line-height: 1.5em;
  color: #8a8e91;
  font-size: 1.1em;
  padding-bottom: 60px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(138, 142, 145, 0.3);
  }
`;
const Li = styled.li`
  width: 85%;
  line-height: 1.5em;
  color: #8a8e91;
  padding-bottom: 30px;
  padding-left: 1em;
  &::before {
    content: "•";
    color: green;
    font-weight: bolder;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

function Section2() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <Section>
      <Content>
        <LeftBox>
          <Image src={redLabel} alt="heart rate" left="0" />
          <Image
            src={table}
            alt="table of person"
            left="50%"
            top="50%"
            transform="translate(-50%, -45%)"
            index='-1'
          />
          <Image src={comment} alt="commentary" left="45%" bottom='10%' ref={ref} visible={visible} />
          <Image src={chart} alt="chart" bottom="20px" left="0" />
        </LeftBox>
        <RightBox>
          <Title ref={ref} visible={visible}>
            Explore user behavior on an individual level of detail
          </Title>
          <Text>
            Why I say old chap that is spiffing cobblers it's your round, haggle
            bits and bobs golly gosh up the duff mush well car boot bevvy.
          </Text>
          <ul style={{ paddingTop: "40px" }}>
            <Li>
              <Span>Flexible, fast reporting:</Span> On your bike mate cobblers
              I don't want no agro bleeding crikey
            </Li>
            <Li>
              <Span>Access our data anywhere: </Span> James Bond Queen's English
              mufty it's all gone to pot bobby elizabeth.
            </Li>
            <Li>
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
