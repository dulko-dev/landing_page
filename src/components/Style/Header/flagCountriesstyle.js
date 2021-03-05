import styled from "styled-components";
import { displayListElement } from "./flagCountrieskey";

export const ImageFlag = styled.img`
  width: 300px;
  height: 200px;
`;

export const LiStyle = styled.li`
  padding: 15px;
  animation-name: ${displayListElement};
  animation-duration: 1s;
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
  margin-right: 20px;
`;

export const Waiting = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -20%);
  width: 200px;
  height: 200px;
`;
