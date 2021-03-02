import React, { useState } from "react";
import logo from "../assets/nav/logo.svg";
import person1 from "../assets/nav/1st.svg";
import person2 from "../assets/nav/2nd.svg";
import person3 from "../assets/nav/3rd.svg";
import person4 from "../assets/nav/4th.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 100px;
`;

const HoverBackImg = styled(Wrapper)`
  max-height: 100%;
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
  margin-top: 10px;
  height: 80vh;
  background-color: red;
`;

const LiStyle = styled.li`
  position: relative;
  cursor: pointer;
  padding: 50px 0;
  &::before {
    content: "";
    height: 2px;
    background-color: black;
    display: inline-block;
    position: absolute;
    bottom: 45px;
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
    bottom: 45px;
    right: 0;
    width: 0%;
    transition: width 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
`;

const ImageHoverBack = styled.img`
  width: 200px;
  height: 100px;
`;

function Nav() {
  const [show, setShow] = useState(false);

  const MouseOver = (e) => {
    if (e.screenX < 1235 || e.screenX > 1274) {
      setShow(false);
    }
  };

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
            onMouseLeave={MouseOver}
            // (e) => console.log("y:", e.screenY, "x:", e.screenX)
          >
            Home
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
        <div onMouseLeave={() => setShow(false)}>
          <HoverBack>
            <HoverBackImg>
              <ImageHoverBack src={person1} />
              <ImageHoverBack src={person2} />
              <ImageHoverBack src={person3} />
              <ImageHoverBack src={person4} />
            </HoverBackImg>
          </HoverBack>
        </div>
      )}
    </NavSite>
  );
}

export default Nav;
