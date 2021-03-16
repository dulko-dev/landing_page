import styled, { css } from "styled-components";
import { section2, sectionChart, section2Comment } from "../../Style/keyframes";

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &::after {
    content: "";
    position: absolute;
    left: 15%;
    right: 15%;
    bottom: 150px;
    background-color: rgba(138, 142, 145, 0.3);
    height: 1px;
  }
`;

export const Content = styled.div`
  font-family: var(--textTitle);
  position: relative;
  padding-top: 150px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
`;

export const RightBox = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  visibility: hidden;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.index};
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleComment }) =>
    visibleComment &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleChart }) =>
    visibleChart &&
    css`
      animation-name: ${sectionChart};
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
  z-index: -1;
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
export const Li = styled.li`
  width: 85%;
  line-height: 1.5em;
  color: #8a8e91;
  padding-bottom: 30px;
  padding-left: 1em;
  visibility: hidden;
  &::before {
    content: "•";
    color: green;
    font-weight: bolder;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
  ${({ visibleDelay }) =>
    visibleDelay &&
    css`
      animation-name: ${section2};
      animation-duration: 2s;
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
    `}
`;

export const Span = styled.span`
  font-weight: 600;
`;
