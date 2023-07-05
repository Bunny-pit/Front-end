import { DefaultTheme } from "styled-components";

const colors = {
  background: "#FFFFFF", // 하얀색
  error: "#EB5757", // 붉은색
  text: "#191825", // 검은색
  pointcolor: "#865DFF", //진한보라색
  maincolor: "#E384FF", //진한분홍색
  subcolor: "#FFA3FD", //흐린분홍색
  logocolor: "#db7bf9", //헤더 로고 색상
  lightpurple: "#DC7BF9", //약간 라벤더?
  strongpurple: "#7954F8", //BTS색

  gray100: "#F7F8F9", // form 배경 색상
  gray200: "#EBEBEB", // 회색버튼 hover
  gray300: "#D8D8D8", // 회색버튼 default, 선 색상
  gray400: "#C7C7C7", // 회색버튼 click
  gray500: "#888888", // 회색 폰트색
  gray600: "#666666", // 회색 폰트색2
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
