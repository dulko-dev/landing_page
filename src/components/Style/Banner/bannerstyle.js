import styled from "styled-components";
import { animatedButton } from "../../Style/keyframes";

export const BannerPage = styled.div`
  position: relative;
  width: 100%;
  height: 562.2px;
  background-color: #0e044b;
`;

export const BgImageTop = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
export const BgImageBottom = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftBox = styled.div``;
export const Image = styled.img`
  margin-right: 100px;
`;
export const RightBox = styled.div`
  color: #ffffff;
  width: 50%;
`;

export const Button = styled.button`
  margin-bottom: 70px;
  position: relative;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    box-shadow: 0 1px 15px 1px rgb(255 255 255 / 50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${animatedButton};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
export const IStyle = styled.i`
  color: #4e78f4;
`;
export const Title = styled.h3`
  font-size: 2.2em;
  line-height: 1.2;
  font-weight: 600;
`;
export const Text = styled.p`
  line-height: 1.5;
  padding: 30px 0;
  color: rgba(255, 255, 255, 0.4);
`;
export const TextName = styled.div`
  color: rgba(255, 255, 255, 0.4);
`;
export const TextNameSpan = styled.span`
  font-size: 1.2em;
  display: block;
  padding-bottom: 1em;
  color: #ffffff;
`;
