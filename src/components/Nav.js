import React, { useState } from "react";
import logo from "../assets/nav/logo.svg";
import person1 from "../assets/nav/1st.svg";
import person2 from "../assets/nav/2nd.svg";
import person3 from "../assets/nav/3rd.svg";
import person4 from "../assets/nav/4th.svg";
import styled from "styled-components";
import { keyframes } from "styled-components";

// keyframes //

const homeImages = keyframes`
from{
  transform: translateY(50%);
  opacity: 0
}
to{
  transform:translateX(0%);
  opacity:1
}
`;

const displayImage = keyframes`
from{
  transform: translateY(30%);
  opacity:0;
}

to{
  transform: translateY(0%);
  opacity:1;
}
`;

// style //

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 100px;
`;

const HoverBackImg = styled(Wrapper)`
  height: 100%;
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

const Ul = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

const HoverBack = styled.div`
  height: 95vh;
  background-color: red;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

const LiStyle = styled.li`
  position: relative;
  padding: 60px 0;

  &::before {
    content: "";
    height: 2px;
    background-color: black;
    display: inline-block;
    position: absolute;
    bottom: 55px;
    left: 0px;
    width: 0%;
    transition: width 0.3s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
  &::after {
    content: "";
    height: 2px;
    background-color: black;
    display: inline-block;
    position: absolute;
    bottom: 55px;
    right: 0;
    width: 0%;
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

const ImageHoverBack = styled.img`
  width: 200px;
  height: 100px;
`;

const HomeImagesBg = styled(ImageHoverBack)`
  margin-top: 30px;
  animation-name: ${homeImages};
  animation-duration: 1s;
`;

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <NavSite>
      <Wrapper>
        <ButtonStyle>
          <ImageHoverBack
            src={logo}
            onClick={() => (window.location.href = "#")}
          />
        </ButtonStyle>

        <Ul>
          <LiStyle
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <span style={{ cursor: "pointer" }}>Home</span>
          </LiStyle>
          <LiStyle>Pages</LiStyle>
          <LiStyle>Blog</LiStyle>
          <LiStyle>Shop</LiStyle>
          <LiStyle>Elements</LiStyle>
          <LiStyle>Portfolio</LiStyle>
          <li>
            <i className="fas fa-search-plus"></i>
          </li>
        </Ul>
      </Wrapper>
      {show && (
        <HoverBack
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
        >
          <HoverBackImg>
            <HomeImagesBg src={person1} />
            <HomeImagesBg src={person2} />
            <HomeImagesBg src={person3} />
            <HomeImagesBg src={person4} />
          </HoverBackImg>
        </HoverBack>
      )}
    </NavSite>
  );
}

export default Nav;
