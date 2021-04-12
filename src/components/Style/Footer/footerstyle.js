import styled from 'styled-components';
import { sunMove, cloudMove } from "../../Style/keyframes";
import logoBg from "../../../assets/Footer/logo.png";
import leafLeft from "../../../assets/Footer/leaf-left.png";
import leafRight from "../../../assets/Footer/leaf-right.png";
import { ReactComponent as Cloud } from "../../../assets/Footer/cloud.svg";


export const FooterStyle = styled.div`
  position: relative;
  width: 100%;
  height: 843.3px;
  background-color: #413c85;
`;
export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  padding-top: 80px;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.4);
`;
export const BoxNo1 = styled.div`
  flex-basis: 40%;
`;
export const BoxNo2 = styled.div`
  flex-basis: 20%;
`;
export const BoxNo3 = styled.div`
  flex-basis: 20%;
`;
export const BoxNo4 = styled.div`
  flex-basis: 20%;
`;
export const ImageLogo = styled.img.attrs({
  src: `${logoBg}`,
  alt: "Hell Yeah",
})`
  width: 200px;
  height: 100px;
`;
export const Text = styled.p`
  padding-top: 30px;
`;
export const SpanText = styled.span`
  display: block;
  padding-top: 10px;
`;

export const Title = styled.h3`
  color: #fff;
  padding-top: 70px;
  padding-bottom: 40px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-top: 50px;
`;
export const Icon = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    background-color: #fff;
    color: #413c85;
    cursor: pointer;
  }
`;
export const IconStyle = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ul = styled.ul``;
export const List = styled.li`
  padding-bottom: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const LeaftL = styled.img.attrs({
  src: `${leafLeft}`,
})`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const LeaftR = styled.img.attrs({
  src: `${leafRight}`,
})`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const WallStyle = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #47437e;
`;

export const CloudStyle = styled(Cloud)`
  position: absolute;
  bottom: 20%;
  right: 15%;
  width: 200px;
  height: 160px;
  #Vector_10 {
    animation-name: ${cloudMove};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #Vector,
  #Vector_1,
  #Vector_2,
  #Vector_3,
  #Vector_4,
  #Vector_5,
  #Vector_6,
  #Vector_7,
  #Vector_8,
  #Vector_9 {
    animation-name: ${sunMove};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;