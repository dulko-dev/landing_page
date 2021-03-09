import { keyframes } from "styled-components";

export const displayListElement = keyframes`
from{
  transform: translateY(50%);
  opacity: 0
}
to{
  transform:translateX(0%);
  opacity:1
}
`;

export const displayImage = keyframes`
from{
  transform: translateY(30%);
  opacity:0;
}

to{
  transform: translateY(0%);
  opacity:1;
}
`;
export const displayMenuElement = keyframes`
from{
  transform: translateX(10%);
  opacity:0;
}

to{
  transform: translateX(0%),
  opacity:1;
}
`;

export const moveZoom = keyframes`
0%{
  transform: translateY(150%);
}

20%{
  transform: translateX(0%) scale(1);
}

40%{ 
  transform: scale(0.4);

}
100%{
  transform: scale(50);
}
`;

export const searchInput = keyframes`
from{
  opacity: 0;
}
to{
opacity:1;
}
`;
