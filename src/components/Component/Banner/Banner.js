import React from "react";
import case1 from "../../../assets/Banner/shap_one.png";
import case2 from "../../../assets/Banner/shap_two.png";
import container from "../../../assets/Banner/case.png";
import {
  BannerPage,
  Wrapper,
  BgImageTop,
  BgImageBottom,
  LeftBox,
  Image,
  RightBox,
  Button,
  IStyle,
  Title,
  Text,
  TextName,
  TextNameSpan,
} from "../../Style/Banner/bannerstyle";

function Banner(_, ref) {
  return (
    <BannerPage ref={ref}>
      <Wrapper>
        <BgImageTop src={case1} alt="first stain" />
        <BgImageBottom src={case2} alt="second stain" />
        <LeftBox>
          <Image src={container} alt="transparent container" />
        </LeftBox>
        <RightBox>
          <a
            href="https://www.youtube.com/watch?v=2qKMNAj6080"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <IStyle className="fas fa-play"></IStyle>
            </Button>
          </a>
          <Title>
            Luxer One powers their business analytics with SaasLand.
          </Title>
          <Text>
            So I said in my flat Elizabeth no biggie me old mucker smashing
            starkers spiffing wind up, cobblers chip shop pardon.
          </Text>
          <TextName>
            <TextNameSpan>Wisteria Ravenclaw</TextNameSpan> Director of
            Marketing & Communications
          </TextName>
        </RightBox>
      </Wrapper>
    </BannerPage>
  );
}

const bannerRef = React.forwardRef(Banner);

export default bannerRef;
