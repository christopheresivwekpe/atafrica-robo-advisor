import style, { css } from "styled-components";
import { primaryColor } from "./props";

export const Menu = style.div`
  position: relative;
  width: 1.625rem;
  height: 1.125rem;
  transform: rotate(0deg);
  top: 0;
  transition: .5s ease-in-out;
  cursor: pointer;

  @media (min-width: 530px){
    width: 1.875rem;
    height: 1.25rem;
  }
`;
const Line = css`
  display: block;
  position: absolute;
  height: 0.125rem;
  width: 100%;
  background: ${primaryColor};
  border-radius: 50px;
  opacity: 1;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
`;

export const FirstLine = style.span`
${Line};
top: ${({ open }) => (open ? "10px" : "0px")};
width: ${({ open }) => (open ? "0%" : "100%")};
left: ${({ open }) => (open ? "50%" : "0")};
`;
export const SecondLine = style.span`
${Line};
top: 10px;
transform: ${({ open }) => (open ? "rotate(45deg)" : "initial")};
`;
export const ThirdLine = style.span`
${Line};
top: 10px;
transform: ${({ open }) => (open ? "rotate(-45deg)" : "initial")};
`;
export const FourthLine = style.span`
${Line};
top: ${({ open }) => (open ? "10px" : "20px")};
width: ${({ open }) => (open ? "0%" : "100%")};
left: ${({ open }) => (open ? "50%" : "0")};
`;