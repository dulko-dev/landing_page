import React from "react";
import styled from "styled-components";
import { displayImage } from "../../Style/keyframes";

const Ul = styled.ul`
  padding: 16px 0;
  position: absolute;
  right: 425px;
  background-color: red;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

const Li = styled.li`
  width: 175px;
  padding: 16px 30px;
  &:nth-child(1)::after,
  &:nth-child(2)::after,
  &:nth-child(3)::after,
  &:nth-last-child(3)::after {
    content: "\f061";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    right: 20px;
  }
  &:hover {
    color: violet;
    transition: 0.4s;
    cursor: pointer;
  }
`;

function Page() {
  return (
    <Ul>
      <Li>Career</Li>
      <Li>Services</Li>
      <Li>Case Study</Li>
      <Li>About us</Li>
      <Li>Process</Li>
      <Li>Pricing</Li>
      <Li>Team</Li>
      <Li>Sign up</Li>
      <Li>Sign in</Li>
      <Li>Contact</Li>
      <Li>FAQs</Li>
      <Li>404 Error</Li>
    </Ul>
  );
}

export default Page;
