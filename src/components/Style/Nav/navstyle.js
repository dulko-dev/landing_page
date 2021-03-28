import styled from "styled-components";
import { movePlanet } from "../keyframes";

export const NavWrapper = styled.div`
  min-height: calc(100vh - 100px);
  max-width: 1400px;
  margin: 0 auto;
`;

export const WrappBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const LeftBox = styled.div`
  color: #fff;
  max-width: 700px;
  padding-right: 20px;
`;

export const RightBox = styled.div`
  max-width: 700px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 3.5em;
  line-height: 1.5em;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  line-height: 2em;
  font-size: 1.3em;
`;

export const Button = styled.button`
  background-color: #7ea3cc;
  display: inline-block;
  padding: 12px 36px;
  border-radius: 25px;
  border: 1px solid transparent;
  margin-top: 40px;
  color: #ffffff;
  &:hover {
    transition: all 0.3s linear;
    border-color: whitesmoke;
    background-color: inherit;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  bottom: 0;
  right: -40px;
  animation-name: ${movePlanet};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Img2 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

export const Img3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  animation-name: ${movePlanet};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
export const Img4 = styled.img`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50px);
`;

export const Img5 = styled.img`
  position: absolute;
  bottom: 80px;
  right: -180px;
`;

export const Img6 = styled.img`
  position: absolute;
  top: 0;
  left: -45px;
`;

export const ImgDiv2SmallBalls = styled.div`
  position: absolute;
  bottom: 0;
  height: 725px;
  width: 700px;
  z-index: -1;
`;

export const Img3Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 300px;
  width: 100px;
  z-index: -1;
`;

export const ImgDiv2Balls = styled.div`
  position: absolute;
  height: 200px;
  bottom: 0;
  left: 0;
  width: 400px;
  z-index: -1;
  overflow: hidden;
`;

export const ImgDivRedDoughnut = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 350px;
  width: 100px;
  z-index: -1;
`;

export const ArrowTop = styled.i`
  color: ${(props) => (props.color ? "#000" : "#fff")};
  position: fixed;
  right: 50%;
  transform: translateX(-50%);
  bottom: 3%;
  cursor: pointer;
  z-index: 1;
  &:hover {
    transition: 0.3s;
    color: red;
  }
`;

export const ArrowBottom = styled(ArrowTop)`
  left: 50%;
`;
