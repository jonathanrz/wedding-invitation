import { createGlobalStyle } from "styled-components";
import Darleston from "./fonts/Darleston.otf";
import AphroditeSlimPro from "./fonts/AphroditeSlimPro.otf";
import AlexBrush from "./fonts/AlexBrush.ttf";
import Freebooter from "./fonts/Freebooter.ttf";
import YaquoteScript from "./fonts/YaquoteScript.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Darleston';
  src: url(${Darleston});
}

@font-face {
  font-family: 'AphroditeSlimPro';
  src: url(${AphroditeSlimPro});
}

@font-face {
  font-family: 'AlexBrush';
  src: url(${AlexBrush});
}

@font-face {
  font-family: 'Freebooter';
  src: url(${Freebooter});
}

@font-face {
  font-family: 'YaquoteScript';
  src: url(${YaquoteScript});
}
`;

export default FontStyles;
