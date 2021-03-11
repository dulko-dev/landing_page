import React from "react";
import styled from "styled-components";
import redLabel from "../../../assets/Section2/analytices3.png";
import table from "../../../assets/Section2/analytices4.png";
import chart from "../../../assets/Section2/analytices2.png";
import comment from "../../../assets/Section2/analytices1.png";

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
  align-items: center;
`;
const LeftBox = styled.div``;

const RightBox = styled.div``;
const Title = styled.div`
  font-size: 2em;
  line-height: 1.2em;
  padding-bottom: 30px;
`;
const Text = styled.div`
  line-height: 1.5em;
  color: #8a8e91;
  position: relative;
  font-size: 1.1em;
  padding-bottom: 40px;
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
  padding-bottom: 25px;
  padding-left:1em;
  &::before{
      content:'•';
      color:green;
      font-weight:bolder;
      display:inline-block;
      width:1em;
      margin-left: -1em
      
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

function Section2() {
  return (
    <Section>
      <Content>
        <LeftBox>
          <img src={redLabel} alt="hear rate" />
          <img src={table} alt="table of person" />
          <img src={comment} alt="commentary" />
          <img src={chart} alt="chart" />
        </LeftBox>
        <RightBox>
          <Title>Explore user behavior on an individual level of detail</Title>
          <Text>
            Why I say old chap that is spiffing cobblers it's your round, haggle
            bits and bobs golly gosh up the duff mush well car boot bevvy.
          </Text>
          <ul style={{ paddingTop: "40px"}}>
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
