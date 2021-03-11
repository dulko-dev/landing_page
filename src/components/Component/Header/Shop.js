import React from "react";
import { UlStyle, LiStyle, LiI, LiH, LiP } from "../../Style/Header/shopstyle";

function Shop() {
  return (
    <UlStyle>
      <LiStyle>
        <LiI className="fas fa-th fa-3x"></LiI>
        <LiH>Product Grid</LiH>
        <LiP>Product grid layout view</LiP>
      </LiStyle>
      <LiStyle>
        <LiI className="fas fa-address-book fa-3x"></LiI>
        <LiH>Product Grid</LiH>
        <LiP>Product grid layout view</LiP>
      </LiStyle>
      <LiStyle>
        <LiI className="fas fa-shopping-cart fa-3x"></LiI>
        <LiH>Product Grid</LiH>
        <LiP>Product grid layout view</LiP>
      </LiStyle>
      <LiStyle>
        <LiI className="fab fa-cc-visa fa-3x"></LiI>
        <LiH>Product Grid</LiH>
        <LiP>Product grid layout view</LiP>
      </LiStyle>
      <LiStyle>
        <LiI className="fas fa-list-ol fa-3x"></LiI>
        <LiH>Product Grid</LiH>
        <LiP>Product grid layout view</LiP>
      </LiStyle>
    </UlStyle>
  );
}

export default Shop;
