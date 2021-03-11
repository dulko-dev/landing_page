import React, { useState } from "react";
import {
  Ul,
  Li,
  CareerUl,
  CareerLi,
  ServicesUl,
  CaseUl,
  ContactUl,
} from "../../Style/Header/pagestyle";

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
