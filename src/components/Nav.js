import React, { useState } from "react";
import logo from "../assets/nav/logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 100px;
`;

const NavSite = styled.div`
  width: 100%;
  height: 100vh;
`;

const ButtonStyle = styled.button`
  border: none;
  padding: 0;
  background-color: white;
`;

const Image = styled.img`
  width: inherit;
  height: inherit;
`;

const Ul = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;
const HoverBack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 80%;
  background-color: red;
`;

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <NavSite>
      <Wrapper>
        <ButtonStyle>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <image
              onClick={() => (window.location.href = "#")}
              href={logo}
              width="100"
              height="150"
              alt="logo"
            />
          </svg>
        </ButtonStyle>

        <Ul>
          <li
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            Home
          </li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Elements</li>
          <li>Portfolio</li>
          <li>
            <i className="fas fa-search-plus"></i>
          </li>
        </Ul>
      </Wrapper>
      {show && <HoverBack></HoverBack>}
    </NavSite>
  );
}

export default Nav;
