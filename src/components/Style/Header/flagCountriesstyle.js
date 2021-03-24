import styled from "styled-components";
import { displayListElement } from "../keyframes";

export const ImageFlag = styled.img`
  margin: 0 auto;
  width: 300px;
  height: 200px;
`;

export const ImageEffect = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -70px;
    width: 50px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: skewX(-10deg);
    transition: all ease 0.4s;
  }
  &::after {
    transition-delay: 0.15s;
  }
  &:hover::before,
  &:hover::after {
    left: 350px;
  }
  &:hover {
    transition: all 0.7s linear;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

export const LiStyle = styled.li`
  width: 300px;
  padding: 15px 10px;
  animation-name: ${displayListElement};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Title = styled.h3`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  font-size: 1em;
  padding-top: 10px;
`;

export const UlStyle = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-wrap: wrap;
  color: #2a2d34;
  padding-bottom: 100px;
`;

export const Waiting = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const EndText = styled.p`
  font-size: 2em;
  padding: 20px 0;
  font-weight: 600;
`;
