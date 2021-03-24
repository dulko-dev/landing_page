import styled from 'styled-components';
import { displayMenuElementRev } from "../../Style/keyframes";
import bg1 from "../../../assets/Brand/logo_01.png";
import bg2 from "../../../assets/Brand/logo_02.png";
import bg3 from "../../../assets/Brand/logo_03.png";
import bg4 from "../../../assets/Brand/logo_04.png";
import bg5 from "../../../assets/Brand/logo_05.png";
import bg6 from "../../../assets/Brand/logo_06.png";
import bg7 from "../../../assets/Brand/logo_07.png";
import bg8 from "../../../assets/Brand/logo_08.png";
import bg9 from "../../../assets/Brand/logo_09.png";
import bg10 from "../../../assets/Brand/logo_10.png";
import bg11 from "../../../assets/Brand/logo_11.png";
import bg12 from "../../../assets/Brand/logo_12.png";



export const BrandStyle = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 50px 0 100px 0;
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftBox = styled.div`
  flex-basis: 33%;
`;
export const Title = styled.h3`
  font-size: 2.5em;
`;
export const SpanTitle = styled.span`
  display: block;
  font-weight: 600;
  padding: 10px 0;
`;
export const Text = styled.p`
  padding: 10px 0 40px 0;
  width: 80%;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
`;
export const Button = styled.button`
  font-weight: 600;
  background-color: #4e78f4;
  display: inline-block;
  border-radius: 25px;
  padding: 10px 30px;
  color: #fff;
  border: 1px solid transparent;
  margin-top: 30px;
  &:hover {
    border-color: #4e78f4;
    color: #4e78f4;
    background-color: #fff;
    transition: 0.3s;
  }
`;
export const RightBox = styled.div`
  flex-basis: 66%;
`;
export const ShowField = styled.div`
  margin: 0px auto 20px auto;
  width: 60%;
  height: 130px;
  text-align: center;
  line-height: 150px;
`;
export const WrapperLogo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  row-gap: 40px;
  padding-bottom: 40px;
`;

export const ImageDisplay = styled.img`
  animation-name: ${displayMenuElementRev};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
export const ImageLogo1 = styled.img.attrs({
  src: `${bg1}`,
})`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
  }
`;
export const ImageLogo2 = styled(ImageLogo1).attrs({
  src: `${bg2}`,
})``;
export const ImageLogo3 = styled(ImageLogo1).attrs({
  src: `${bg3}`,
})``;
export const ImageLogo4 = styled(ImageLogo1).attrs({
  src: `${bg4}`,
})``;
export const ImageLogo5 = styled(ImageLogo1).attrs({
  src: `${bg5}`,
})``;
export const ImageLogo6 = styled(ImageLogo1).attrs({
  src: `${bg6}`,
})``;
export const ImageLogo7 = styled(ImageLogo1).attrs({
  src: `${bg7}`,
})``;
export const ImageLogo8 = styled(ImageLogo1).attrs({
  src: `${bg8}`,
})``;
export const ImageLogo9 = styled(ImageLogo1).attrs({
  src: `${bg9}`,
})``;
export const ImageLogo10 = styled(ImageLogo1).attrs({
  src: `${bg10}`,
})``;
export const ImageLogo11 = styled(ImageLogo1).attrs({
  src: `${bg11}`,
})``;
export const ImageLogo12 = styled(ImageLogo1).attrs({
  src: `${bg12}`,
})``;


