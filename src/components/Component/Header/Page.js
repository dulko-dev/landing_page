import React, { useState } from "react";
import styled from "styled-components";
import { displayImage } from "../../Style/keyframes";

const Ul = styled.ul`
  width: 250px;
  padding: 10px 0;
  color: #2a2d34;
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
    color: #613DC1;
    transition: 0.2s;
    cursor: pointer;
  }
`;
const CareerUl = styled.ul`
  position: absolute;
  right: -160px;
  top: 0;
  background-color: #ffffff;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

const ServicesUl = styled(CareerUl)`
  top: 20px;
`;
const CaseUl = styled(CareerUl)`
  top: 50px;
`;
const ContactUl = styled(CareerUl)`
  top: 235px;
`;

const CareerLi = styled.li`
  width: 130px;
  padding: 0 20px;
  margin: 10px 0;
  color: #2a2d34;
  &:hover {
    color: #613DC1;
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
          <CareerUl>
            <CareerLi>Job List</CareerLi>
            <CareerLi>Job Details</CareerLi>
            <CareerLi>Apply to Job</CareerLi>
          </CareerUl>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ services: true })}
        onMouseLeave={() => setShow({ services: false })}
      >
        Services
        {show.services && (
          <ServicesUl>
            <CareerLi>Service 01</CareerLi>
            <CareerLi>Service 02</CareerLi>
            <CareerLi>Service 03</CareerLi>
          </ServicesUl>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ case: true })}
        onMouseLeave={() => setShow({ case: false })}
      >
        Case Study
        {show.case && (
          <CaseUl>
            <CareerLi>Case Study</CareerLi>
            <CareerLi>Case Studies details</CareerLi>
          </CaseUl>
        )}
      </Li>
      <Li>About us</Li>
      <Li>Process</Li>
      <Li>Pricing</Li>
      <Li>Team</Li>
      <Li>Sign up</Li>
      <Li>Sign in</Li>
      <Li
        onMouseEnter={() => setShow({ contact: true })}
        onMouseLeave={() => setShow({ contact: false })}
      >
        Contact
        {show.contact && (
          <ContactUl>
            <CareerLi>Contact 01</CareerLi>
            <CareerLi>Contact 02</CareerLi>
          </ContactUl>
        )}
      </Li>
      <Li>FAQs</Li>
      <Li>404 Error</Li>
    </Ul>
  );
}

export default Page;
