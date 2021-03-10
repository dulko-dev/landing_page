import React from "react";
import styled from "styled-components";

const ElementWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

const EachColumn = styled.div`
  padding: 30px 0;
`;

const H2Style = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

const Li = styled.li`
  padding: 5px 0;
  &:hover {
    cursor: pointer;
    color: #613DC1;
  }
`;

function Element() {
  return (
    <ElementWrapper>
      <EachColumn>
        <H2Style>Elements 01</H2Style>
        <ul>
          <Li>Alerts</Li>
          <Li>Team</Li>
          <Li>Integrations</Li>
          <Li>CLients</Li>
          <Li>Subscribe</Li>
        </ul>
      </EachColumn>
      <EachColumn>
        <H2Style>Elements 02</H2Style>
        <ul>
          <Li>FAQs</Li>
          <Li>Call to Action</Li>
          <Li>Tabs</Li>
          <Li>Testimonial</Li>
          <Li>Video</Li>
        </ul>
      </EachColumn>
      <EachColumn>
        <H2Style>Elements 03</H2Style>
        <ul>
          <Li>Carousels</Li>
          <Li>Maps</Li>
          <Li>Contact Form</Li>
          <Li>Process</Li>
          <Li>Screen Features</Li>
        </ul>
      </EachColumn>
      <EachColumn>
        <H2Style>Elements 04</H2Style>
        <ul>
          <Li>Features</Li>
          <Li>Get App</Li>
          <Li>Pricing</Li>
          <Li>Fun Fact</Li>
          <Li>Steps</Li>
        </ul>
      </EachColumn>
    </ElementWrapper>
  );
}

export default Element;
