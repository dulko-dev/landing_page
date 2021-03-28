import styled, { css } from "styled-components";
import {
  section2,
  sectionChart,
  section3,
  searchInput,
} from "../../Style/keyframes";

export const Section = styled.div`
  padding-top: 100px;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  padding-top: 50px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  width: 100%;
`;

export const RightBox = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  visibility: hidden;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.index};
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleStay }) =>
    visibleStay &&
    css`
      animation-name: ${searchInput};
      animation-fill-mode: forwards;
    `}

  ${({ visibleChart }) =>
    visibleChart &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleTop }) =>
    visibleTop &&
    css`
      animation-name: ${section3};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

export const Title = styled.div`
  font-size: 2.4em;
  line-height: 1.2em;
  padding-bottom: 60px;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

export const Text = styled.div`
  position: relative;
  line-height: 1.5em;
  color: #8a8e91;
  font-size: 1.1em;
  padding-bottom: 60px;
  visibility: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(138, 142, 145, 0.3);
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
export const ListContainer = styled.div`
  visibility: hidden;
  position: relative;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  background-color: ${(props) => (props.on ? "#F4F5F5" : "")};
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(138, 142, 145, 0.3);
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

export const List = styled.div`
  cursor: pointer;
  width: 85%;
  color: #8a8e91;
  transition: 0.8s;
  &:hover {
    transform: translateX(30px);
  }
  ${({ on }) =>
    on &&
    css`
      &:hover {
        transform: translateX(0px);
      }
    `}
`;

export const PlusDiv = styled.div`
  padding-right: 1em;
`;
export const MinusDiv = styled.div`
  padding-right: 1em;
`;

export const ListText = styled.div`
  overflow: hidden;
  height: 0px;
  transition: all 0.5s ease-in-out;
  ${({ on }) =>
    on &&
    css`
      height: 150px;
    `}
`;
export const ListTitle = styled.h3`
  font-weight: 600;
  font-size: 1.3em;
  line-height: 1.2em;
  color: ${(props) => (props.color ? "#272727" : "")};
`;

export const Button = styled.button`
  visibility: hidden;
  display: block;
  margin: 200px auto 100px auto;
  padding: 15px 30px;
  border-color: blue;
  border-radius: 25px;
  border: 1px solid #7ea3cc;
  color: #7ea3cc;
  &:hover {
    background-color: #7ea3cc;
    transition: all 0.3s linear;
    color: #ffff;
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
