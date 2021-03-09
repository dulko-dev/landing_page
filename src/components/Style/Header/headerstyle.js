import styled from "styled-components";
import {
  displayImage,
  displayMenuElement,
  moveZoom,
  searchInput,
} from "../keyframes";

export const NavSite = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  max-width: 1200px;
  max-height: 100px;
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

export const LiStyleZoom = styled.li`
  position: relative;
  padding: 60px 0;
  cursor: pointer;
`;

export const BlockBeforeAnimated = styled.div`
  position: absolute;
  right: 0%;
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
`;

export const Module = styled.div`
  position: fixed;
  bottom: 50%;
  right: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: ${moveZoom};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ModuleSearch = styled.div`
  width: 800px;
  height: 50px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${searchInput};
  animation-duration: 2s;
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 0;
  top: 12px;
  color: whitesmoke;
  cursor: pointer;
`;

export const ExitIcon = styled(SearchIcon)`
  right: 40px;
  top: 30px;
  animation-name: ${searchInput};
  animation-duration: 2s;
`;

export const Input = styled.input`
  &::placeholder {
    color: whitesmoke;
  }
  font-size: 1.5em;
  padding-bottom: 10px;
  padding-left: 10px;
  border-bottom: 3px solid whitesmoke;
  border-top: none;
  border-right: none;
  border-left: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: inherit;
  color: whitesmoke;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

export const SpanStyle = styled.span`
  cursor: pointer;
`;

export const HoverBack = styled.div`
  height: 100%;
  position: fixed;
  width: 100%;
  left: 0;
  top: 102px;
  background-color: red;
  overflow: auto;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

export const HoverPage = styled.div`
  position: absolute;
  bottom: -324px;
  left: -45px;
  animation-name: ${displayMenuElement};
  animation-duration: 0.5s;
`;

export const HoverShop = styled(HoverPage)`
  bottom: -422px;
`;

export const HoverElement = styled.div`
  position: fixed;
  top: 102px;
  left: 0;
  width: 100%;
  background-color: blue;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

export const HoverPortfolio = styled(HoverPage)`
  bottom: -116px;
`;
