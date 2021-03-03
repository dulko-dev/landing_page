import {keyframes} from 'styled-components';

export const homeImages = keyframes`
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