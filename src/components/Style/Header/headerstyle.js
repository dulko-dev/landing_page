import styled from "styled-components";
import { displayImage } from "../keyframes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 100px;
`;

export const NavSite = styled.div`
  position: relative;
  width: 100%;
`;

export const ButtonStyle = styled.button`
  border: none;
  padding: 0;
  background-color: white;
`;

export const Ul = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

export const HoverBack = styled.div`
  position: relative;
  background-color: red;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

export const LiStyle = styled.li`
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

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

export const SpanStyle = styled.span`
  cursor: pointer;
`;

export const HoverPage = styled.div`
  position: absolute;
  bottom: -325px;
  left: -30px;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;
