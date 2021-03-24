import React, { useState } from "react";
import {
  BrandStyle,
  Wrapper,
  LeftBox,
  Title,
  SpanTitle,
  Text,
  Button,
  RightBox,
  ShowField,
  WrapperLogo,
  ImageLogo1,
  ImageDisplay,
  ImageLogo2,
  ImageLogo3,
  ImageLogo4,
  ImageLogo5,
  ImageLogo6,
  ImageLogo7,
  ImageLogo8,
  ImageLogo9,
  ImageLogo10,
  ImageLogo11,
  ImageLogo12,
} from "../../Style/BrandSelection/brandSelection";

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
