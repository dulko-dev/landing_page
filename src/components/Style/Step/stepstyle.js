import styled,{css} from 'styled-components';
import { section2Comment, sectionChart } from "../../Style/keyframes";
import firstImg from "../../../assets/Step/setup_img1.png";
import secondImg from "../../../assets/Step/setup_img2.png";
import thirdImg from "../../../assets/Step/setup_img3.png";

export const StepStyle = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
`;
export const Title = styled.h3`
  text-align: center;
  padding-top: 150px;
  padding-bottom: 30px;
  font-size: 2.3em;
  line-height: 1.3;
`;

export const SpanTitle = styled.span`
  display: block;
  font-weight: 600;
`;

export const SpanText = styled(SpanTitle)`
  font-size: 1.3em;
  line-height: 1.2;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 1);
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  margin: 0 auto;
  text-align: center;
  width: 550px;
`;
export const Content = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const FirstImage = styled.img.attrs({
  src: `${firstImg}`,
})`
  grid-column: 1/2;
  grid-row: 1/2;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;

export const FirstNumber = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
  width: 75px;
  height: 75px;
  border: none;
  border-radius: 50%;
  background-color: #e8ebed;
  box-shadow: 0 10px 30px 0 rgb(1 1 64 / 8%);
  &::after {
    content: "01";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    color: #4e78f4;
  }
  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed rgba(0, 0, 0, 0.5);
    height: 225px;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const FirstTextInside = styled.p`
  grid-column: 3/4;
  grid-row: 1/2;
  visibility: hidden;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.4;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
export const SecondImage = styled.img.attrs({
  src: `${secondImg}`,
})`
  grid-column: 3/4;
  grid-row: 2/3;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
export const SecondNumber = styled(FirstNumber)`
  grid-column: 2/3;
  grid-row: 2/3;
  &::after {
    content: "02";
  }
`;
export const SecondTextInside = styled(FirstTextInside)`
  grid-column: 1/2;
  grid-row: 2/3;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
    `}
`;
export const ThirdImage = styled.img.attrs({
  src: `${thirdImg}`,
})`
  grid-column: 1/2;
  grid-row: 3/4;
  visibility: hidden;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${section2Comment};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
`;
export const ThirdNumber = styled(FirstNumber)`
  grid-column: 2/3;
  grid-row: 3/4;
  &::after {
    content: "03";
  }
  &::before {
    height: 0;
  }
`;
export const ThirdTextInside = styled(FirstTextInside)`
  grid-column: 3/4;
  grid-row: 3/3;
  ${({ visible }) =>
    visible &&
    css`
      animation-name: ${sectionChart};
    `}
`;