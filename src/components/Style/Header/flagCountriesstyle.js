import styled from "styled-components";
import { displayListElement } from "../keyframes";

export const ImageFlag = styled.img`
  width: 300px;
  height: 200px;
`;

export const ImageEffect = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow:hidden;
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
  padding: 15px;
  animation-name: ${displayListElement};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.3em;
  padding-top: 10px;
`;

export const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  flex-wrap: wrap;
  color: #2a2d34;
`;

export const Waiting = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -20%);
  width: 200px;
  height: 200px;
`;
