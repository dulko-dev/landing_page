import React, { useState } from "react";
import styled from "styled-components";
import { displayImage } from "../../Style/keyframes";

const Ul = styled.ul`
  width: 250px;
  padding: 10px 0;
  background-color: red;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

const Li = styled.li`
  margin: 10px 0;
  padding: 0 16px;
  &:nth-child(1)::after,
  &:nth-child(2)::after,
  &:nth-child(3)::after,
  &:nth-last-child(3)::after {
    content: "\f054";
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
const SecondUl = styled.ul`
  position: absolute;
  right: -160px;
  top: 0;
  background-color: red;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

const SecondLi = styled.li`
  width: 125px;
  padding: 0 20px;
  margin: 10px 0;
  color: black;
  &:hover {
    color: violet;
  }
`;

function Page() {
  const [show, setShow] = useState({
    career: false,
    services: false,
    case: false,
    contact: false,
  });

  return (
    <Ul>
      <Li
        onMouseEnter={() => setShow({ career: true })}
        onMouseLeave={() => setShow({ career: false })}
      >
        Career
        {show.career && (
          <SecondUl style={{}}>
            <SecondLi>Job List</SecondLi>
            <SecondLi>Job Details</SecondLi>
            <SecondLi>Apply to Job</SecondLi>
          </SecondUl>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ services: true })}
        onMouseLeave={() => setShow({ services: false })}
      >
        Services
      </Li>
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
