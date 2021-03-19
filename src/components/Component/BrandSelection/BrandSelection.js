import React, { useState } from "react";
import styled from "styled-components";
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
import { displayMenuElementRev } from "../../Style/keyframes";

const BrandStyle = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items:center;
`;
const LeftBox = styled.div`
  flex-basis: 33%;
`;
const Title = styled.h3`
  font-size: 2.5em;
`;
const SpanTitle = styled.span`
  display: block;
  font-weight: 600;
  padding: 10px 0;
`;
const Text = styled.p`
  padding: 10px 0 40px 0;
  width: 80%;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
`;
const Button = styled.button`
  font-weight: 600;
  background-color: #4e78f4;
  display: inline-block;
  border-radius: 25px;
  padding: 10px 30px;
  color: #fff;
  border: 1px solid transparent;
  margin-top:30px;
  &:hover {
    border-color: #4e78f4;
    color: #4e78f4;
    background-color: #fff;
    transition: 0.3s;
  }
`;
const RightBox = styled.div`
  flex-basis: 66%;
`;
const ShowField = styled.div`
  margin: 0px auto 20px auto;
  width: 60%;
  height: 130px;
  text-align: center;
  line-height: 150px;
`;
const WrapperLogo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  row-gap: 40px;
  padding-bottom:40px;
`;

const ImageDisplay = styled.img`
  animation-name: ${displayMenuElementRev};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
const ImageLogo1 = styled.img.attrs({
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
const ImageLogo2 = styled(ImageLogo1).attrs({
  src: `${bg2}`,
})``;
const ImageLogo3 = styled(ImageLogo1).attrs({
  src: `${bg3}`,
})``;
const ImageLogo4 = styled(ImageLogo1).attrs({
  src: `${bg4}`,
})``;
const ImageLogo5 = styled(ImageLogo1).attrs({
  src: `${bg5}`,
})``;
const ImageLogo6 = styled(ImageLogo1).attrs({
  src: `${bg6}`,
})``;
const ImageLogo7 = styled(ImageLogo1).attrs({
  src: `${bg7}`,
})``;
const ImageLogo8 = styled(ImageLogo1).attrs({
  src: `${bg8}`,
})``;
const ImageLogo9 = styled(ImageLogo1).attrs({
  src: `${bg9}`,
})``;
const ImageLogo10 = styled(ImageLogo1).attrs({
  src: `${bg10}`,
})``;
const ImageLogo11 = styled(ImageLogo1).attrs({
  src: `${bg11}`,
})``;
const ImageLogo12 = styled(ImageLogo1).attrs({
  src: `${bg12}`,
})``;

function BrandSelection() {
  const [hidden, setHidden] = useState(false);
  const [imgValue, setImgValue] = useState("");

  const showImg = (e) => {
    setImgValue(e.target.src);
    setHidden(true);
  };

  return (
    <BrandStyle>
      <Wrapper>
        <LeftBox>
          <Title>
            Trusted by
            <SpanTitle>great brands</SpanTitle>
          </Title>
          <Text>
            The full monty the wireless bog-standard bevvy lurgy David, mufty
            Oxford blatant A bit of how’s your father.
          </Text>
          <Button>More Customers</Button>
        </LeftBox>
        <RightBox>
          <ShowField>
            {hidden && <ImageDisplay src={imgValue} alt="brand logo" />}
          </ShowField>
          <WrapperLogo>
            <ImageLogo1
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo2
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo3
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo4
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo5
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo6
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo7
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo8
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo9
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo10
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo11
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
            <ImageLogo12
              onMouseEnter={showImg}
              onMouseLeave={() => setHidden(false)}
            />
          </WrapperLogo>
        </RightBox>
      </Wrapper>
    </BrandStyle>
  );
}

export default BrandSelection;
