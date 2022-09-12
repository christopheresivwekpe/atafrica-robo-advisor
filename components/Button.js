import style, { css } from "styled-components";
import { lightColor, mainColor, secondaryBg, primaryBg, lightBg } from "../styles/props";

/** GENERAL STYLES FOR BUTTONS { Ease of building components } */
const MainStyle = css`
outline: none;
display: ${({ block, noShow, inline, flex }) => (
    noShow ? "none" :
    block ? "block" :
    flex ? "flex" :
    inline ? "inline-block" :
    "initial"
    )};
line-height: ${({ lHeight1, lHeight2, lHeight3, lHeight4, lHeight5 }) => (
    lHeight1 ? "1.2" :
    lHeight2 ? "1.3" :
    lHeight3 ? "1.4" :
    lHeight4 ? "1.5" :
    lHeight5 ? "1.6" :
    "initial"
    )};
font-size: ${({ xxsFontM, xsFontM, sFontM, lFontM, xlFontM, xxlFontM }) => (
    xxsFontM ? "0.6875rem" :
    xsFontM ? "0.75rem" :
    sFontM ? "0.8125rem" :
    lFontM ? "0.9375rem" :
    xlFontM ? "1rem" :
    xxlFontM ? "1.0625rem" :
    "0.875rem"
    )};
font-weight: ${({ normal, bold }) => (
    normal ? "400" : 
    bold ? "700" :
    "600"
    )};
text-align: ${({ left, right }) => (
    left ? "left" :
    right ? "right" :
    "center"
    )};
border-radius: 5px;
transition: all 500ms;
cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
padding: ${({ pd1, pd2 }) => (
    pd2 ? "0.875rem 2.125rem" :
    pd1 ? "0.625rem 1.375rem" :
    "0.875rem 2.875rem"
    )};
justify-content: ${({ jCenter, jBetween, jEnd }) => (
    jCenter ? "center" :
    jBetween ? "space-between" :
    jEnd ? "flex-end" :
    "initial"
    )};
align-items: ${({ aCenter, aBetween, aEnd }) => (
    aCenter ? "center" :
    aBetween ? "space-between" :
    aEnd ? "flex-end" :
    "initial"
    )};
width: ${({ fullw, mFullW }) => (
    mFullW ? "100%" :
    fullw ? "100%" :
    "fit-content"
    )};
color: ${({ mainFont }) => (mainFont ? mainColor : lightColor)};
background: ${({ whiteBg, grayBg }) => (
    whiteBg ? lightBg :
    grayBg ? primaryBg :
        secondaryBg
    )};
border: ${({ whiteBd }) => (
    whiteBd ? `1px solid ${lightBg}` :
        `1px solid ${secondaryBg}`
    )};
height: ${({ fullh, mFullH }) => (
    mFullH ? "100%" :
    fullh ? "100%"  :
    "fit-content"
    )};





@media (min-width: 530px){
  width: ${({ fullw, dFullW }) => (
    dFullW ? "100%" :
    fullw ? "100%" :
    "fit-content"
    )};
  height: ${({ fullh, dFullH }) => (
    dFullH ? "100%" :
    fullh ? "100%" :
    "fit-content"
    )};
  font-size: ${({ xxsFontD, xsFontD, sFontD, lFontD, xlFontD, xxlFontD }) => (
    xxsFontD ? "0.75rem" :
    xsFontD ? "0.8125rem" :
    sFontD ? "0.875rem" :
    lFontD ? "1rem" :
    xlFontD ? "1.0625rem" :
    xxlFontD ? "1.125rem" :
    "0.9375rem"
    )};
}





@media (min-width: 768px){
    padding: ${({ pd1, pd2 }) => (
    pd2 ? "0.875rem 1rem" :
    pd1 ? "0.625rem 1.375rem" :
    "0.875rem 2.875rem"
    )};
}





@media (min-width: 1024px) {
    padding: ${({ pd1, pd2 }) => (
    pd2 ? "0.875rem 2.875rem" :
    pd1 ? "0.625rem 1.375rem" :
    "0.875rem 2.875rem"
    )};
}`;



/***** COMPONENTS STARTS HERE *****/
export const Button = style.button`
${MainStyle};
}
`;
export const ButtonLink = style.a`
${MainStyle};
`;