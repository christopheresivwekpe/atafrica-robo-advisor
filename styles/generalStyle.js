import style, { css } from "styled-components";
import { 
    primaryBg, secondaryBg, darkBg, lightBg, 
    deco1Bg, deco2Bg, primaryColor, secondaryColor, 
    grayColor, darkColor, lightColor, mainColor,
    deco3Bg, deco4Bg, deco5Bg, deco6Bg, deco7Bg, deco8Bg,
    deco9Bg, deco10Bg,
} from "./props";
import { motion } from "framer-motion";
import Image from "next/image";



/** GENERAL STYLES { EASE OF DESIGNING COMPONENTS } */
const MainStyle = css`
vertical-align: ${({ middle }) => (
    middle ? "middle" : 
    "initial"
)};
box-shadow: ${({ shadow }) => (
    shadow ? "0px 1px 3px 1px rgba(0,0,0,0.3)" :
    "initial"
)};
flex-wrap: ${({ fWrap }) => (fWrap ? "wrap" : "nowrap")};
order: ${({ mOrder1, mOrder2}) => (
  mOrder1 ? "1" : 
  mOrder2 ? "2" : 
  "0"
)};
text-transform: ${({ firstCap, allCap }) => (
  firstCap ? "capitalize" : 
  allCap ? "uppercase" :
  "none"
)};
box-sizing: ${({ content }) => (content ? "content-box" : "border-box")};
opacity: ${({ noOpacity, opacity }) => (noOpacity ? "0" : opacity ? "1" : "initial")};
z-index: ${({ z10000, z100, z1000, z10 }) => (
  z10000 ? "10000" : 
  z1000 ? "1000" : 
  z100 ? "100" : 
  z10 ? "10" :
  "auto"
)};
position: ${({ fixed, relative, absolute }) => (
  fixed ? "fixed" : 
    relative ? "relative" :
    absolute ? "absolute" :
    "static"
)};
top: ${({ top0, top25 }) => (
    top25 ? "30px" :
    top0 ? "0" :
    "auto"
)};
bottom: ${({ bottom12, mBottom_192PX, mBottom_80PX }) => (
    mBottom_80PX ? "-80px" :
    mBottom_192PX ? "-192px" :
    bottom12 ? "12%" :
    "auto"
)};
right: ${({ right, right0 }) => (
    right ? "1" :
    right0 ? "0" :
    "auto"
)};
left: ${({ mLeft0, left0 }) => (
    mLeft0 ? "0" :
    left0 ? "0" :
    "auto"
)};
display: ${({ block, flex, inline, inlineflex, noShow, mNone, 
mBlock, mInline, mFlex, mInlineflex }) => (
    mNone ? "none" :
    mBlock ? "block" :
    mInlineflex ? "inline-flex" :
    mInline ? "inline-block" :
    mFlex ? "flex" :
    noShow ? "none" :
    block ? "block" :
    flex ? "flex" :
    inlineflex ? "inline-flex" :
    inline ? "inline-block" :
    "initial"
)};
flex: ${({ mFg1, mFg2, mFgAuto }) => (
    mFg1 ? "1 1" :
    mFg2 ? "2 1" :
    mFgAuto ? "1 1 auto" :
    "initial"
)};
flex-direction: ${({ column, rRow, rColumn, mColumn, mRRow, mRColumn }) => (
    mColumn ? "column" :
    mRColumn ? "column-reverse" :
    mRRow ? "row-reverse" :
    column ? "column" :
    rRow ? "row-reverse" :
    rColumn ? "column-reverse" :
    "initial"
)};
justify-content: ${({ jCenter, jBetween, jEnd, mJCenter, mJBetween, mJEnd }) => (
    mJCenter ? "center" :
    mJBetween ? "space-between" :
    mJEnd ? "flex-end" :
    jCenter ? "center" :
    jBetween ? "space-between" :
    jEnd ? "flex-end" :
    "initial"
)};
align-items: ${({ aCenter, aBetween, aEnd, mACenter, mABetween, mAEnd }) => (
    mACenter ? "center" :
    mABetween ? "space-between" :
    mAEnd ? "flex-end" :
    aCenter ? "center" :
    aBetween ? "space-between" :
    aEnd ? "flex-end" :
    "initial"
)};
align-self: ${({ sCenter, sBetween, sStart, sEnd, mSStart, mSCenter, mSBetween, mSEnd }) => (
    mSCenter ? "center" :
    mSBetween ? "space-between" :
    mSEnd ? "flex-end" :
    mSStart ? "flex-start" :
    sCenter ? "center" :
    sBetween ? "space-between" :
    sEnd ? "flex-end" :
    sStart ? "flex-start" :
    "initial"
)};
height: ${({ screenH, fullh, mScreenH, mFit, fit, mFullH, zeroH, image1H,
image3H, text2H, image5H, image6H, text5H, text7H, text10H, box6h }) => (
    mScreenH ? "100vh" :
    mFullH ? "100%" :
    mFit ? "fit-content" :
    zeroH ? "0px" : 
    fullh ? "100%" :
    fit ? "fit-content" :
    box6h ? "15px" :
    text10H ? "336px" :
    text7H ? "53px" :
    text5H ? "38px" :
    image6H ? "fit-content" :
    image5H ? "fit-content" :
    text2H ? "259px" :
    screenH ? "100vh" :
    image1H ? "383px" :
    image3H ? "208px" :
    "auto"
)};
width: ${({ screenW, fullw, halfW, mScreenW, mFullW, headingW, subHeadW, 
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    mScreenW ? "100vw" :
    mFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "100%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "179px" :
    text9W ? "137px" :
    text6W ? "152px" :
    text7W ? "53px" :
    text5W ? "224px" :
    text4W ? "100%" :
    image6W ? "97px" :
    image7W ? "114px" :
    image8W ? "115px" :
    image9W ? "72px" :
    text3W ? "100%" :
    image5W ? "100%" :
    box5w ? "100%" :
    text2W ? "226px" :
    text1W ? "100%" :
    headingW ? "100%" :
    subHeadW ? "100%" :
    image1W ? "293px" :
    image2W ? "162px" :
    image3W ? "35px" :
    "auto"
)};
border-radius: ${({ fiveRadius, tenRadius, twentyRadius, tRadius, bRadius, halfRadius,
  rRadius, lRadius , ttRadius}) => (
    fiveRadius ? "5px" :
    tRadius ? "5px 5px 0 0" :
    rRadius ? "5px 0 0 5px" :
    lRadius ? "0 5px 5px 0" :
    ttRadius ? "10px 10px 0 0" :
    bRadius ? "0 0 5px 5px" :
    tenRadius ? "10px" :
    twentyRadius ? "20px" : 
    halfRadius ? "50%" :
    "0"
)};
cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
background: ${({ primaryBG, secondaryBG, darkBG, lightbg, deco1BG, deco2BG, 
deco3BG, deco4BG, deco5BG, deco6BG, deco7BG, deco8BG, deco9BG, deco10BG }) => (
    primaryBG ? primaryBg :
    secondaryBG ? secondaryBg :
    darkBG ? darkBg :
    lightbg ? lightBg :
    deco1BG ? deco1Bg :
    deco2BG ? deco2Bg :
    deco3BG ? deco3Bg :
    deco4BG ? deco4Bg :
    deco5BG ? deco5Bg :
    deco6BG ? deco6Bg :
    deco7BG ? deco7Bg :
    deco8BG ? deco8Bg :
    deco9BG ? deco9Bg :
    deco10BG ? deco10Bg :
    "transparent"
)};
background-image: ${({ BgImage1, BgImage4 }) => (
    BgImage1 ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), 
    url('/tech-daily-R3KpH1W4Deo-unsplash (1) (1).jpg')` :
    BgImage4 ? "linear-gradient(to right, #222222 33%, rgba(255,255,255,0) 0%)" :
    "none"
)};
background-position: ${({ BgPos1, BgImage4 }) => (
    BgImage4 ? "bottom" :
    BgPos1 ? `bottom, center` :
    "initial"
)};
background-size: ${({ BgSz1, BgImage4 }) => (
    BgImage4 ? "21px 1px" :
    BgSz1 ? `100%, 100%` :
    "initial"
)};
background-repeat: ${({ BgRepeat1, BgImage4 }) => (
    BgImage4 ? "repeat-x" :
    BgRepeat1 ? `no-repeat, no-repeat` :
    "initial"
)};
object-fit: ${({ fit }) => (fit ? "cover" : "initial")};
white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "initial")};
overflow: ${({ hide, scroll, mHide, mScroll }) => (
    mHide ? "hidden" : 
    mScroll ? "scroll" :
    hide ? "hidden" : 
    scroll ? "scroll" : 
    "initial"
)};
overflow-x: ${({ hideX, scrollX }) => (hideX ? "hidden" : scrollX ? "scroll" : "initial")};
text-overflow: ${({ ellipsis }) => (ellipsis ? "ellipsis" : "initial")};
border-width: ${({ threeB, twoB }) => (threeB ? "3px" : (twoB ? "2px" : "1px"))};
transition: ${({ trans, trans2, trans3 }) => (
  trans ? "all 500ms" : 
  trans2 ? "all 0.4s ease" :
  trans3 ? "all 0.3s cubic-bezier(.1,.79,.35,1.04)" :
  "initial"
)};
border-style: ${({ fullB, bottomB, dashed, dashedTB, mFullB, mBottomB }) => (
    mFullB ? "solid" :
    mBottomB ? "none none solid none" :
    bottomB ? "none none solid none" :
    fullB ? "solid" :
    dashed ? "dashed" :
    dashedTB ? "dashed none dashed none" :
    "none"
)};
border-color: ${({ primaryB }) => (
    primaryB ? primaryColor :
    "inherit"
)};
color: ${({ secondaryFont, grayFont, darkFont, lightFont, mainFont }) => (
    secondaryFont ? secondaryColor :
    grayFont ? grayColor :
    darkFont ? darkColor :
    lightFont ? lightColor :
    mainFont ? mainColor :
        primaryColor
)};
line-height: ${({ lHeight0, lHeight1, lHeight2, lHeight3, lHeight4, lHeight5, lHeight6, 
lHeight7, lHeight53px, lHeight90px }) => (
    lHeight0 ? "1.1" :
    lHeight1 ? "1.2" :
    lHeight2 ? "1.3" :
    lHeight3 ? "1.4" :
    lHeight4 ? "1.5" :
    lHeight5 ? "1.6" :
    lHeight6 ? "1.7" :
    lHeight7 ? "1.8" :
    lHeight53px ? "53px" :
    lHeight90px ? "90px" :
    "initial"
)};
direction: ${({ rtl, mRtl }) => (
    mRtl ? "rtl" :
    rtl ? "rtl" :
    "initial"
)};
text-align: ${({ center, right, mCenter, mRight }) => (
    mCenter ? "center" :
    mRight ? "right" :
    center ? "center" :
    right ? "right" :
    "left"
)};
font-weight: ${({ bold, lighter, bold600, bold900, bold700, bold800 }) => (
  bold900 ? "900" :
  bold800 ? "800" : 
  bold700 ? "700" :
  bold600 ? "600" : 
  lighter ? "300" :
  bold ? "500" : 
  "initial"
)};
padding: ${({ mPd1, mPd15rl, mPd2875225, mPd28752, mPd0875125, mPd175rl,
mPd3515, mPd43PX, mPd30PX, mPd16PX, mPd40PX, mPd415, mPd3753, mPd50PX,
mPd315rlb, mPd0625rl, mPd05 }) => (
    mPd43PX ? "32px 20px 16px 20px" :
    mPd30PX ? "16px 20px 16px 20px" :
    mPd3753 ? "3.25rem 2rem 4.5rem 2rem" :
    mPd415 ? "4rem 1.5rem" :
    mPd16PX ? "16px 20px 32px 20px" :
    mPd3515 ? "3.5rem 1.5rem" :
    mPd1 ? "1rem" :
    mPd315rlb ? "0 1.5rem 3rem 1.5rem" :
    mPd40PX ? "40px 12px 0 29px" :
    mPd50PX ? "45px 35px 7px 42px" : 
    mPd15rl ? "0 1.5rem" :
    mPd175rl ? "0 1.75rem" :
    mPd0625rl ? "0 0.625rem" :
    mPd0875125 ? "0.875rem 1.25rem" :
    mPd2875225 ? "2.875rem 2.25rem" :
    mPd28752 ? "2.875rem 2rem" :
    mPd05 ? "0.5rem" :
    "0"
)};
margin: ${({ mM1b, mM3b, mM90PXtb, mM4b, mM2b, mM125rl, mM15b, mM17375t, 
mM11t, mM175b, mM1625rb, mM1625l, mM6t, mM05b, mM15l, mM15r, mM1_5b,
mM075l }) => (
    mM6t ? "6rem 0 0 0" :
    mM1b ? "0 0 1rem 0" :
    mM05b ? "0 0 0.5rem 0" :
    mM075l ? "0 0 0 0.75rem" :
    mM11t ? "11rem 0 0 0" : 
    mM17375t ? "17.375rem 0 0 0" :
    mM1625rb ? "0 1.625rem 1.125rem 0" :
    mM1625l ? "0 0 0 1.625rem" :
    mM90PXtb ? "90px 0" :
    mM2b ? "0 0 2rem 0" :
    mM15l ? "0 0 0 1.5rem" :
    mM15r ? "0 1.5rem 0 0" :
    mM175b ? "0 0 1.75rem 0" :
    mM3b ? "0 0 3rem 0" :
    mM4b ? "0 0 4rem 0" :
    mM15b ? "0 0 15rem 0" :
    mM1_5b ? "0 0 1.5rem 0" :
    mM125rl ? "0 1.25rem" :
    "0"
)};
text-decoration: ${({ underline }) => (underline ? "underline" : "initial")};
font-size: ${({ font0M, font1M, font2M, font3M, font4M, font5M, font6M,
font7M, font8M, font9M, font10M, font11M, font12M, font13M,
font14M, font15M, font16M, font17M, font18M, font19M, font20M, font21M,
font22M, font26M }) => (
    font0M ? "0.625rem" :
    font1M ? "0.6875rem" :
    font2M ? "0.75rem" :
    font3M ? "0.8125rem" :
    font4M ? "0.9375rem" :
    font5M ? "1rem" :
    font6M ? "1.0625rem" :
    font7M ? "1.125rem" :
    font8M ? "1.25rem" :
    font9M ? "1.375rem" :
    font10M ? "1.5rem" :
    font11M ? "1.625rem" :
    font12M ? "1.75rem" :
    font13M ? "1.875rem" :
    font14M ? "2rem" :
    font15M ? "2.125rem" :
    font16M ? "2.25rem" :
    font17M ? "2.375rem" :
    font18M ? "2.5rem" :
    font19M ? "2.625rem" :
    font20M ? "2.75rem" :
    font21M ? "2.875rem" :
    font22M ? "3rem" :
    font26M ? "3.4375rem" :
    "0.875rem"
)};







@media (min-width: 385px) {
width: ${({ screenW, fullw, halfW, mScreenW, mFullW, headingW, subHeadW, 
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    mScreenW ? "100vw" :
    mFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "100%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "179px" :
    text9W ? "137px" :
    text6W ? "152px" :
    text7W ? "53px" :
    text5W ? "239px" :
    text4W ? "325px" :
    image6W ? "97px" :
    image7W ? "114px" :
    image8W ? "115px" :
    image9W ? "72px" :
    text3W ? "100%" :
    image5W ? "100%" :
    box5w ? "100%" :
    text2W ? "259px" :
    text1W ? "100%" :
    headingW ? "100%" :
    subHeadW ? "100%" :
    image1W ? "293px" :
    image2W ? "162px" :
    image3W ? "117px" :
    "auto"
)};
}







@media (min-width: 530px){
top: ${({ top0, top25 }) => (
    top25 ? "30px" :
    top0 ? "0" :
    "auto"
)};
bottom: ${({ bottom12, mBottom_192PX, mmmBottom_60PX }) => (
    mmmBottom_60PX ? "-60px" :
    mBottom_192PX ? "-192px" :
    bottom12 ? "12%" :
    "auto"
)};
right: ${({ right, right0 }) => (
    right ? "1" :
    right0 ? "0" :
    "auto"
)};
left: ${({ mLeft0, left0 }) => (
    mLeft0 ? "0" :
    left0 ? "0" :
    "auto"
)};
padding: ${({ mPd1, mPd15rl, mPd2875225, mPd28752, mPd0875125, mPd175rl,
mPd3515, mmPd43PX, mmPd30PX, mmPd16PX, mPd40PX, mPd415, mmPd3753, 
mPd3753, mPd50PX, mPd315rlb, mPd0625rl, mPd05 }) => (
    mmPd43PX ? "26px 20px 13px 20px" :
    mmPd30PX ? "13px 20px 13px 20px" :
    mmPd16PX ? "13px 20px 26px 20px" :
    mmPd3753 ? "3.75rem 3rem 5.125rem 3rem" :
    mPd3753 ? "3.25rem 2rem 4.5rem 2rem" :
    mPd3515 ? "3.5rem 1.5rem" :
    mPd1 ? "1rem" :
    mPd315rlb ? "0 1.5rem 3rem 1.5rem" :
    mPd40PX ? "40px 12px 0 29px" :
    mPd50PX ? "45px 35px 7px 42px" : 
    mPd15rl ? "0 1.5rem" :
    mPd415 ? "4rem 1.5rem" :
    mPd175rl ? "0 1.75rem" :
    mPd0625rl ? "0 0.625rem" :
    mPd0875125 ? "0.875rem 1.25rem" :
    mPd2875225 ? "2.875rem 2.25rem" :
    mPd28752 ? "2.875rem 2rem" :
    mPd05 ? "0.5rem" :
    "0"
)};
margin: ${({ mM1b, mM3b, mM90PXtb, mM4b, mM2b, mM125rl, mM15b, mmM10b, 
mmM19t, mM17375t, mmM165b, mmM11t, mM11t, mM175b, mM1625rb, mM1625l, 
mmM8t, mM6t, mM05b, mM15l, mM15r, mmM4b, mmM3b, mM1_5b, mmM0875l,
mM075l, mmM15b }) => (
    mmM15b ? "0 0 1.5rem 0" :
    mmM165b ? "0 0 16.5rem 0" :
    mmM10b ? "0 0 10rem 0" :
    mmM4b ? "0 0 4rem 0" :
    mmM3b ? "0 0 3rem 0" :
    mmM19t ? "19rem 0 0 0" :
    mmM11t ? "11rem 0 0 0" :
    mmM0875l ? "0 0 0 0.875rem" :
    mmM8t ? "8rem 0 0 0" :
    mM17375t ? "17.375rem 0 0 0" :
    mM6t ? "6rem 0 0 0" :
    mM1_5b ? "0 0 1.5rem 0" :
    mM075l ? "0 0 0 0.75rem" :
    mM1625rb ? "0 1.625rem 1.125rem 0" :
    mM1625l ? "0 0 0 1.625rem" :
    mM1b ? "0 0 1rem 0" :
    mM05b ? "0 0 0.5rem 0" :
    mM11t ? "11rem 0 0 0" : 
    mM90PXtb ? "90px 0" :
    mM2b ? "0 0 2rem 0" :
    mM15l ? "0 0 0 1.5rem" :
    mM15r ? "0 1.5rem 0 0" :
    mM175b ? "0 0 1.75rem 0" :
    mM3b ? "0 0 3rem 0" :
    mM4b ? "0 0 4rem 0" :
    mM15b ? "0 0 15rem 0" :
    mM125rl ? "0 1.25rem" :
    "0"
)};
font-size: ${({ font0M, font1M, font2M, font3M, font4M, font5M, font6M,
font7M, font8M, font9M, font10M, font11M, font12M, font13M, font7MM,
font14M, font15M, font16M, font17M, font18M, font19M, font20M, font21M,
font22M, font15MM, font17MM, font6MM, font11MM, font8MM, fontMM, 
font5MM, font14MM, font10MM }) => (
    font6MM ? "1.0625rem" :
    font10MM ? "1.5rem" :
    font5MM ? "1rem" :
    font14MM ? "2rem" :
    font7MM ? "1.125rem" :
    fontMM ? "0.875rem" :
    font8MM ? "1.25rem" :
    font17MM ? "2.375rem" :
    font11MM ? "1.625rem" :
    font15MM ? "2.125rem" :
    font0M ? "0.625rem" :
    font1M ? "0.6875rem" :
    font2M ? "0.75rem" :
    font3M ? "0.8125rem" :
    font4M ? "0.9375rem" :
    font5M ? "1rem" :
    font6M ? "1.0625rem" :
    font7M ? "1.125rem" :
    font8M ? "1.25rem" :
    font9M ? "1.375rem" :
    font10M ? "1.5rem" :
    font11M ? "1.625rem" :
    font12M ? "1.75rem" :
    font13M ? "1.875rem" :
    font14M ? "2rem" :
    font15M ? "2.125rem" :
    font16M ? "2.25rem" :
    font17M ? "2.375rem" :
    font18M ? "2.5rem" : 
    font19M ? "2.625rem" :
    font20M ? "2.75rem" :
    font21M ? "2.875rem" :
    font22M ? "3rem" :
    "0.875rem"
)};
flex-direction: ${({ column, rRow, rColumn, mColumn, mRRow, mRColumn }) => (
    mColumn ? "column" :
    mRColumn ? "column-reverse" :
    mRRow ? "row-reverse" :
    column ? "column" :
    rRow ? "row-reverse" :
    rColumn ? "column-reverse" :
    "initial"
)};
order: ${({ mOrder1, mOrder2 }) => (
  mOrder1 ? "1" : 
  mOrder2 ? "2" : 
  "0"
)};
height: ${({ screenH, fullh, mScreenH, mFit, fit, mFullH, zeroH, image1H,
image3H, text2H, image5H, image6H, text5H, text7H, text10H, box6h }) => (
    mScreenH ? "100vh" :
    mFullH ? "100%" :
    mFit ? "fit-content" :
    zeroH ? "0px" : 
    fullh ? "100%" :
    fit ? "fit-content" :
    box6h ? "15px" :
    text10H ? "336px" :
    text7H ? "53px" :
    text5H ? "45px" :
    image6H ? "fit-content" :
    image5H ? "fit-content" :
    text2H ? "259px" :
    screenH ? "100vh" :
    image1H ? "412px" :
    image3H ? "208px" :
    "auto"
)};
width: ${({ screenW, fullw, halfW, mScreenW, mFullW, headingW, subHeadW,
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    mScreenW ? "100vw" :
    mFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    headingW ? "100%" :
    screenW ? "100vw" :
    box9w ? "100%" :
    box6w ? "15px" :
    text10W ? "296px" :
    text8W ? "179px" :
    text9W ? "126px" :
    text6W ? "152px" :
    text7W ? "53px" :
    text5W ? "275px" :
    text4W ? "425px" :
    image6W ? "109px" :
    image7W ? "128px" :
    image8W ? "129px" :
    image9W ? "81px" :
    text3W ? "100%" :
    image5W ? "100%" :
    box5w ? "100%" :
    text2W ? "226px" :
    text1W ? "450px" :
    subHeadW ? "100%" :
    image1W ? "380px" :
    image2W ? "175px" :
    image3W ? "293px" :
    "auto"
)};
flex: ${({ mFg1, mFg2, mFgAuto }) => (
    mFg1 ? "1 1" :
    mFg2 ? "2 1" :
    mFgAuto ? "1 1 auto" :
    "initial"
)};
display: ${({ block, flex, inline, noShow, mmNone, mmBlock, mmInline, 
mmFlex, inlineflex, mmInlineflex }) => (
    mmNone ? "none" :
    mmBlock ? "block" :
    mmInline ? "inline-block" :
    mmFlex ? "flex" :
    mmInlineflex ? "inline-flex" :
    noShow ? "none" :
    block ? "block" :
    flex ? "flex" :
    inlineflex ? "inline-flex" :
    inline ? "inline-block" :
    "initial"
)};
}






@media(min-width: 768px) {
top: ${({ top0, top25 }) => (
    top25 ? "30px" :
    top0 ? "0" :
    "auto"
)};
bottom: ${({ bottom12, mBottom_192PX, mmBottom_150PX, mmBottom_80PX }) => (
    mmBottom_150PX ? "-150px" :
    mBottom_192PX ? "-192px" :
    mmBottom_80PX ? "-80px" :
    bottom12 ? "12%" :
    "auto"
)};
right: ${({ right, right0 }) => (
    right ? "1" :
    right0 ? "0" :
    "auto"
)};
left: ${({ mLeft0, mmLeft450PX, left0, mmLeft15 }) => (
    mmLeft15 ? "1.5rem" :
    mmLeft450PX ? "450px" :
    mLeft0 ? "0" :
    left0 ? "0" :
    "auto"
)};
display: ${({ block, flex, inline, noShow, dNone, dBlock, 
dInline, dFlex, inlineflex, dInlineflex }) => (
    dNone ? "none" :
    dBlock ? "block" :
    dInline ? "inline-block" :
    dInlineflex ? "inline-flex" :
    dFlex ? "flex" :
    noShow ? "none" :
    block ? "block" :
    inlineflex ? "inline-flex" :
    flex ? "flex" :
    inline ? "inline-block" :
    "initial"
)};
flex: ${({ dFg1, dFg2, dFgAuto }) => (
    dFg1 ? "1 1" :
    dFg2 ? "2 1" :
    dFgAuto ? "1 1 auto" :
    "initial"
)};
flex-direction: ${({ column, rRow, rColumn, dColumn, dRRow, dRColumn }) => (
    dColumn ? "column" :
    dRColumn ? "column-reverse" :
    dRRow ? "row-reverse" :
    column ? "column" :
    rRow ? "row-reverse" :
    rColumn ? "column-reverse" :
    "initial"
)};
justify-content: ${({ jCenter, jBetween, jEnd, dJCenter, dJBetween, dJEnd }) => (
    dJCenter ? "center" :
    dJBetween ? "space-between" :
    dJEnd ? "flex-end" :
    jCenter ? "center" :
    jBetween ? "space-between" :
    jEnd ? "flex-end" :
    "initial"
)};
align-items: ${({ aCenter, aBetween, aEnd, dACenter, dABetween, dAEnd }) => (
    dACenter ? "center" :
    dABetween ? "space-between" :
    dAEnd ? "flex-end" :
    aCenter ? "center" :
    aBetween ? "space-between" :
    aEnd ? "flex-end" :
    "initial"
)};
align-self: ${({ sCenter, sBetween, sStart, sEnd, dSStart, dSCenter, dSBetween, dSEnd }) => (
    dSCenter ? "center" :
    dSBetween ? "space-between" :
    dSEnd ? "flex-end" :
    dSStart ? "flex-start" :
    sCenter ? "center" :
    sBetween ? "space-between" :
    sEnd ? "flex-end" :
    sStart ? "flex-start" :
    "initial"
)};
padding: ${({ dPd1375rl, dPd12525, dPd125, dPd6l, dPd32625, dPd05075, 
dPd225rl, dPd4l, dPd4, dPd43PX, dPd16PX, dPd30PX, dPd40PX, dPd4r,
dPd46885313, dPd944, dPd3753, dPd50PX, dPd54rlb, dPd075lr, dPd075 }) => (
    dPd43PX ? "32px 24px 16px 24px" :
    dPd30PX ? "16px 24px 16px 24px" :
    dPd4r ? "0 4rem 0 0" :
    dPd16PX ? "16px 24px 32px 24px" :
    dPd4 ? "4rem" :
    dPd50PX ? "30px 22px 10px 30px" :
    dPd944 ? "9rem 4rem 4rem" :
    dPd54rlb ? "0 5rem 4rem 5rem" :
    dPd46885313 ? "4.688rem 5.313rem 6.25rem 5.313rem" :
    dPd3753 ? "3.5rem 2rem 5rem 2rem" :
    dPd40PX ? "40px 12px 0 29px" : 
    dPd1375rl ? "0 1.375rem" :
    dPd12525 ? "1.25rem 2.5rem" :
    dPd225rl ? "0 2.25rem" :
    dPd125 ? "1rem 2.5rem" :
    dPd6l ? "0 0 0 6rem" :
    dPd05075 ? "0.5rem 0.75rem" :
    dPd075lr ? "0 0.75rem" :
    dPd4l ? "0 0 0 4rem" :
    dPd32625 ? "3rem 2.625rem" :
    dPd075 ? "0.75rem" :
    "0"
)};
margin: ${({ dM0875r, dM1125b, dM118PXtb, dM3b, dM4b, dM1875rl, dM25r, 
dM254br, dM15625t, dM65b, dM12b, dM12t, dM19t, dM225b, dM1875b, dM1625rb, 
dM1625l, dM5b, dM10t, dM915tb, dM41tb, dM2l, dM2r, dM2b, dM075l,
dM15b, dM1l, dM4l, dM0625b, dM05b }) => (
    dM65b ? "0 0 6.5rem 0" :
    dM075l ? "0 0 0 0.75rem" :
    dM15b ? "0 0 1.5rem 0" :
    dM05b ? "0 0 0.5rem 0" :
    dM0625b ? "0 0 0.625rem 0" :
    dM19t ? "19rem 0 0 0" :
    dM1l ? "0 0 0 1rem" :
    dM41tb ? "4rem 0 1rem 0" :
    dM10t ? "10rem 0 0 0" :
    dM1625rb ? "0 1.625rem 1.625rem 0" :
    dM1625l ? "0 0 0 1.625rem" :
    dM12b ? "0 0 12rem 0" :
    dM2l ? "0 0 0 2rem" :
    dM4l ? "0 0 0 4rem" :
    dM2r ? "0 2rem 0 0" :
    dM915tb ? "9rem 0 1.5rem 0" :
    dM15625t ? "15.625rem 0 0 0" :
    dM12t ? "12rem 0 0 0" :
    dM0875r ? "0 0.875rem 0 0" :
    dM25r ? "0 2.5rem 0 0" :
    dM1125b ? "0 0 1.125rem 0" :
    dM118PXtb ? "118px 0" :
    dM3b ? "0 0 3rem 0" :
    dM1875b ? "0 0 1.875rem 0" :
    dM225b ? "0 0 2.25rem 0" :
    dM4b ? "0 0 4rem 0" :
    dM5b ? "0 0 5rem 0" :
    dM2b ? "0 0 2rem 0" :
    dM1875rl ? "0 1.875rem" :
    dM254br ? "0 2.5rem 4rem 0" :
    "0"
)};
height: ${({ screenH, fullh, dScreenH, dFit, fit, dFullH, zeroH, image1H,
image3H, text2H, image5H, image6H, text5H, text7H, text10H, box6h }) => (
    dScreenH ? "100vh" :
    dFullH ? "100%" :
    dFit ? "fit-content" :
    zeroH ? "0px" : 
    fullh ? "100%" :
    fit ? "fit-content" :
    box6h ? "15px" :
    text10H ? "336px" :
    text7H ? "50px" :
    text5H ? "48px" :
    image6H ? "453px" :
    image5H ? "400px" :
    text2H ? "259px" :
    screenH ? "100vh" :
    image1H ? "412px" :
    image3H ? "277px" :
    "auto"
)};
width: ${({ screenW, fullw, halfW, dScreenW, dFullW, headingW, subHeadW,
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    dScreenW ? "100vw" :
    dFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "49%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "143px" :
    text9W ? "104px" :
    text6W ? "126px" :
    text7W ? "50px" :
    text5W ? "321px" :
    image6W ? "134px" :
    image7W ? "158px" :
    image8W ? "159px" :
    image9W ? "99px" :
    text3W ? "242px" :
    image5W ? "600px" :
    box5w ? "530px" :
    text2W ? "259px" :
    text1W ? "500px" :
    headingW ? "730px" :
    subHeadW ? "350px" :
    image1W ? "320px" :
    image2W ? "175px" :
    image3W ? "469px" :
    text4W ? "502px" :
    "auto"
)};
border-style: ${({ fullB, bottomB, dashed, dashedTB, dFullB, dBottomB }) => (
    dFullB ? "solid" :
    dBottomB ? "none none solid none" :
    bottomB ? "none none solid none" :
    fullB ? "solid" :
    dashed ? "dashed" :
    dashedTB ? "dashed none dashed none" :
    "none"
)};
direction: ${({ rtl, dRtl }) => (
    dRtl ? "rtl" :
    rtl ? "rtl" :
    "initial"
)};
text-align: ${({ center, right, dCenter, dRight }) => (
    dCenter ? "center" :
    dRight ? "right" :
    center ? "center" :
    right ? "right" :
    "left"
)};
font-size: ${({ font0D, font1D, font2D, font3D, font4D, font5D, font6D,
font7D, font8D, font9D, font10D, font11D, font12D, font13D,
font14D, font15D, font16D, font17D, font19D, font20D, font21D,
font22D, font23D, font24D, font25D, font26D, font18D, font30D, font36D }) => (
    font0D ? "0.6875rem" :
    font1D ? "0.75rem" :
    font2D ? "0.8125rem" :
    font3D ? "0.875rem" :
    font4D ? "1rem" :
    font5D ? "1.0625rem" :
    font6D ? "1.125rem" :
    font7D ? "1.25rem" :
    font8D ? "1.375rem" :
    font9D ? "1.5rem" :
    font10D ? "1.625rem" :
    font11D ? "1.75rem" :
    font12D ? "1.875rem" :
    font13D ? "2rem" :
    font14D ? "2.125rem" :
    font15D ? "2.25rem" :
    font16D ? "2.375rem" :
    font17D ? "2.5rem" :
    font18D ? "2.625rem" :
    font19D ? "2.75rem" :
    font20D ? "2.875rem" :
    font21D ? "3rem" : 
    font22D ? "3.125rem" :
    font23D ? "3.25rem" :
    font24D ? "3.375rem" :
    font25D ? "3.4375rem" :
    font26D ? "3.5rem" :
    font30D ? "4rem" :
    font36D ? "4.25rem" :
    "0.9375rem"
)};
}






@media(min-width: 830px) {
left: ${({ mLeft0, mmLeft450PX, left0 }) => (
    mmLeft450PX ? "450px" :
    mLeft0 ? "0" :
    left0 ? "0" :
    "auto"
)};
}





@media(min-width: 900px) {
width: ${({ screenW, fullw, halfW, dScreenW, dFullW, headingW, subHeadW,
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    dScreenW ? "100vw" :
    dFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "49%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "179px" :
    text9W ? "126px" :
    text6W ? "152px" :
    text7W ? "50px" :
    text5W ? "321px" :
    image6W ? "134px" :
    image7W ? "158px" :
    image8W ? "159px" :
    image9W ? "99px" :
    text3W ? "242px" :
    image5W ? "600px" :
    box5w ? "530px" :
    text2W ? "259px" :
    text1W ? "500px" :
    headingW ? "730px" :
    subHeadW ? "350px" :
    image1W ? "360px" :
    image2W ? "175px" :
    image3W ? "469px" :
    text4W ? "502px" :
    "auto"
)};
display: ${({ block, flex, inline, noShow, ddNone, ddBlock, ddInline, ddFlex,
inlineflex, ddInlineflex}) => (
    ddNone ? "none" :
    ddBlock ? "block" :
    ddInline ? "inline-block" :
    ddFlex ? "flex" :
    ddInlineflex ? "inline-flex" :
    noShow ? "none" :
    block ? "block" :
    flex ? "flex" :
    inlineflex ? "inline-flex" :
    inline ? "inline-block" :
    "initial"
)};
}






@media(min-width: 1024px) {
top: ${({ top0, top25 }) => (
    top25 ? "30px" :
    top0 ? "0" :
    "auto"
)};
bottom: ${({ bottom12, ddBottom_255PX, ddBottom_110PX }) => (
    ddBottom_255PX ? "-255px" :
    ddBottom_110PX ? "-110px" :
    bottom12 ? "12%" :
    "auto"
)};
right: ${({ right, right0 }) => (
    right ? "1" :
    right0 ? "0" :
    "auto"
)};
left: ${({ ddLeft500PX, left0 }) => (
    ddLeft500PX ? "500px" :
    left0 ? "0" :
    "auto"
)};
overflow: ${({ hide, scroll, dHide, dScroll }) => (
    dHide ? "hidden" : 
    dScroll ? "scroll" :
    hide ? "hidden" : 
    scroll ? "scroll" : 
    "initial"
)};
height: ${({ screenH, fullh, dScreenH, dFit, fit, dFullH, zeroH, image1H,
image3H, text2H, image5H, image6H, text5H, text7H, text10H, box6h }) => (
    dScreenH ? "100vh" :
    dFullH ? "100%" :
    dFit ? "fit-content" :
    zeroH ? "0px" : 
    fullh ? "100%" :
    fit ? "fit-content" :
    box6h ? "15px" :
    text10H ? "336px" :
    text7H ? "54px" :
    text5H ? "58px" :
    image6H ? "523px" :
    image5H ? "480px" :
    text2H ? "259px" :
    screenH ? "100vh" :
    image1H ? "536px" :
    image3H ? "346px" :
    "auto"
)};
width: ${({ screenW, fullw, halfW, dScreenW, dFullW, headingW, subHeadW,
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    dScreenW ? "100vw" :
    dFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "49%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "195px" :
    text9W ? "150px" :
    text6W ? "166px" :
    text7W ? "54px" :
    text5W ? "358px" :
    text4W ? "552px" :
    image6W ? "174px" :
    image7W ? "205px" :
    image8W ? "207px" :
    image9W ? "129px" :
    text3W ? "314px" :
    image5W ? "692px" :
    box5w ? "620px" :
    text2W ? "259px" :
    text1W ? "500px" :
    headingW ? "970px" :
    subHeadW ? "350px" :
    image1W ? "510px" :
    image2W ? "227px" :
    image3W ? "586px" :
    "auto"
)};
margin: ${({ dM0875r, dM1125b, dM118PXtb, dM3b, dM4b, dM1875rl, dM25r, 
dM254br, ddM2425t, dM15625t, ddM15b, dM65b, dM12b, ddM32t, dM19t,
ddM17t, dM12t, dM225b, dM1875b, dM1625rb, dM1625l, dM5b, ddM11t, dM10t, 
dM915tb, ddM0875r, ddM615tb, dM41tb, dM2l, dM2r, dM2b, ddM075l, 
dM075l, dM15b, ddM125l, dM1l, dM4l, dM0625b, dM05b }) => (
    ddM15b ? "0 0 15rem 0" :
    ddM075l ? "0 0 0 0.75rem" :
    ddM11t ? "11rem 0 0 0" :
    ddM125l ? "0 0 0 1.25rem" :
    ddM615tb ? "6rem 0 1.5rem 0" :
    ddM32t ? "32rem 0 0 0" :
    ddM0875r ? "0 0.875rem 0 0" :
    ddM2425t ? "24.25rem 0 0 0" :
    ddM17t ? "17rem 0 0 0" :
    dM15625t ? "15.625rem 0 0 0" :
    dM10t ? "10rem 0 0 0" :
    dM075l ? "0 0 0 0.75rem" :
    dM15b ? "0 0 1.5rem 0" :
    dM05b ? "0 0 0.5rem 0" :
    dM0625b ? "0 0 0.625rem 0" :
    dM1l ? "0 0 0 1rem" :
    dM12t ? "12rem 0 0 0" :
    dM19t ? "19rem 0 0 0" :
    dM41tb ? "4rem 0 1rem 0" :
    dM1625rb ? "0 1.625rem 1.625rem 0" :
    dM1625l ? "0 0 0 1.625rem" :
    dM12b ? "0 0 12rem 0" :
    dM2l ? "0 0 0 2rem" :
    dM4l ? "0 0 0 4rem" :
    dM2r ? "0 2rem 0 0" :
    dM915tb ? "9rem 0 1.5rem 0" :
    dM65b ? "0 0 6.5rem 0" :
    dM0875r ? "0 0.875rem 0 0" :
    dM25r ? "0 2.5rem 0 0" :
    dM1125b ? "0 0 1.125rem 0" :
    dM118PXtb ? "118px 0" :
    dM3b ? "0 0 3rem 0" :
    dM1875b ? "0 0 1.875rem 0" :
    dM225b ? "0 0 2.25rem 0" :
    dM4b ? "0 0 4rem 0" :
    dM5b ? "0 0 5rem 0" :
    dM2b ? "0 0 2rem 0" :
    dM1875rl ? "0 1.875rem" :
    dM254br ? "0 2.5rem 4rem 0" :
    "0"
)};
padding: ${({ dPd1375rl, dPd12525, dPd125, dPd6l, dPd32625, dPd05075, ddPd27PX,
dPd225rl, dPd4l, ddPd5l, dPd4, ddPd45, ddPd72PX, ddPd51PX, dPd43PX, 
dPd30PX, dPd40PX, dPd16PX, dM1875b, dPd4r, ddPd5r, dM2b, ddPd1058, 
dPd46885313, dPd944, ddPd3753, dPd3753, dPd50PX, ddPd54rlb, dPd54rlb, dPd075lr, dPd075,
ddPd50PX }) => (
    ddPd5l ? "0 0 0 5rem" :
    ddPd45 ? "4rem 5rem" :
    ddPd1058 ? "10rem 5rem 8rem" :
    ddPd54rlb ? "0 5rem 4rem 5rem" :
    ddPd50PX ? "50px 40px 10px 47px" :
    ddPd3753 ? "3.75rem 3rem 5.125rem 3rem" :
    ddPd5r ? "0 5rem 0 0" :
    ddPd72PX ? "65px 51px 27px 51px" :
    ddPd27PX ? "27px 51px 27px 51px" :
    ddPd51PX ? "27px 51px 65px 51px" :
    dPd43PX ? "35px 24px 16px 24px" :
    dPd30PX ? "16px 24px 16px 24px" :
    dPd16PX ? "16px 24px 35px 24px" :
    dPd3753 ? "3.5rem 2rem 5rem 2rem" :
    dPd4 ? "4rem" :
    dPd50PX ? "30px 22px 10px 30px" :
    dPd944 ? "9rem 4rem 4rem" :
    dPd54rlb ? "0 5rem 4rem 5rem" :
    dPd46885313 ? "4.688rem 5.313rem 6.25rem 5.313rem" :
    dPd4r ? "0 4rem 0 0" :
    dPd40PX ? "40px 12px 0 29px" : 
    dPd1375rl ? "0 1.375rem" :
    dPd12525 ? "1.25rem 2.5rem" :
    dPd225rl ? "0 2.25rem" :
    dPd125 ? "1rem 2.5rem" :
    dPd6l ? "0 0 0 6rem" :
    dPd05075 ? "0.5rem 0.75rem" :
    dPd075lr ? "0 0.75rem" :
    dPd4l ? "0 0 0 4rem" :
    dPd32625 ? "3rem 2.625rem" :
    dPd075 ? "0.75rem" :
    "0"
)};
font-size: ${({ font0D, font1D, font2D, font3D, font4D, font5D, font6D,
font7D, font8D, font9D, font10D, font11D, font12D, font13D, font6DD,
font14D, font15D, font16D, font17D, font19D, font20D, font21D, font4DD,
font22D, font23D, font24D, font25D, font26D, font18D, font30D, font98DD,
font22DD, font11DD, font2DD, font30DD, font3DD, font12DD, font24DD, 
font8DD, font13DD, font17DD, font9DD }) => (
    font11DD ? "1.75rem" :
    font98DD ? "5.75rem" :
    font17DD ? "2.5rem" :
    font8DD ? "1.375rem" :
    font9DD ? "1.5rem" :
    font6DD ? "1.125rem" :
    font13DD ? "2rem" :
    font4DD ? "1rem" :
    font12DD ? "1.875rem" :
    font30DD ? "4rem" :
    font3DD ? "0.875rem" :
    font2DD ? "0.8125rem" :
    font22DD ? "3.125rem" :
    font24DD ? "3.375rem" :
    font0D ? "0.6875rem" :
    font1D ? "0.75rem" :
    font2D ? "0.8125rem" :
    font3D ? "0.875rem" :
    font4D ? "1rem" :
    font5D ? "1.0625rem" :
    font6D ? "1.125rem" :
    font7D ? "1.25rem" :
    font8D ? "1.375rem" :
    font9D ? "1.5rem" :
    font10D ? "1.625rem" :
    font11D ? "1.75rem" :
    font12D ? "1.875rem" :
    font13D ? "2rem" :
    font14D ? "2.125rem" :
    font15D ? "2.25rem" :
    font16D ? "2.375rem" :
    font17D ? "2.5rem" :
    font18D ? "2.625rem" :
    font19D ? "2.75rem" :
    font20D ? "2.875rem" :
    font21D ? "3rem" : 
    font22D ? "3.125rem" :
    font23D ? "3.25rem" :
    font24D ? "3.375rem" :
    font25D ? "3.4375rem" :
    font26D ? "3.5rem" :
    font30D ? "4rem" :
    "0.9375rem"
)};
}





@media(min-width: 1250px) {
font-size: ${({ font0D, font1D, font2D, font3D, font4D, font5D, font6D,
font7D, font8D, font9D, font10D, font11D, font12D, font13D,
font14D, font15D, font16D, font17D, font19D, font20D, font21D, font9DD,
font22D, font23D, font24D, font25D, font26D, font18D, font30D, font100DDD,
font22DD, font11DD, font2DD, font30DD, font3DD, font12DD, font24DD, font98DD,
font6DDD, font4DD, font6DD, font8DD, font13DD, font17DD, font13DDD }) => (
    font100DDD ? "6rem" :
    font6DDD ? "1.125rem" :
    font17DD ? "2.5rem" :
    font13DDD ? "2rem" :
    font98DD ? "5.75rem" :
    font13DD ? "2rem" :
    font11DD ? "1.75rem" :
    font8DD ? "1.375rem" :
    font9DD ? "1.5rem" :
    font6DD ? "1.125rem" :
    font12DD ? "1.875rem" :
    font30DD ? "4rem" :
    font3DD ? "0.875rem" :
    font4DD ? "1rem" :
    font2DD ? "0.8125rem" :
    font22DD ? "3.125rem" :
    font24DD ? "3.375rem" :
    font0D ? "0.6875rem" :
    font1D ? "0.75rem" :
    font2D ? "0.8125rem" :
    font3D ? "0.875rem" :
    font4D ? "1rem" :
    font5D ? "1.0625rem" :
    font6D ? "1.125rem" :
    font7D ? "1.25rem" :
    font8D ? "1.375rem" :
    font9D ? "1.5rem" :
    font10D ? "1.625rem" :
    font11D ? "1.75rem" :
    font12D ? "1.875rem" :
    font13D ? "2rem" :
    font14D ? "2.125rem" :
    font15D ? "2.25rem" :
    font16D ? "2.375rem" :
    font17D ? "2.5rem" :
    font18D ? "2.625rem" :
    font19D ? "2.75rem" :
    font20D ? "2.875rem" :
    font21D ? "3rem" : 
    font22D ? "3.125rem" :
    font23D ? "3.25rem" :
    font24D ? "3.375rem" :
    font25D ? "3.4375rem" :
    font26D ? "3.5rem" :
    font30D ? "4rem" :
    "0.9375rem"
)};
padding: ${({ dPd1375rl, dPd12525, dPd125, dPd6l, dPd32625, dPd05075, dPd16PX, dddPd8r, 
dPd225rl, dPd4l, ddPd5l, dPd4, ddPd45, dddPd8l, dPd43PX, dPd30PX, dPd40PX,
dddPd684, dddPd87PX, dddPd32PX, dddPd61PX, ddPd72PX, ddPd27PX, ddPd51PX, 
ddPd5r, dPd4r, ddPd1058, dPd46885313, dddPd16810, dPd944, dddPd46885313,
ddPd3753, dPd3753, dddPd86rlb, dPd50PX, ddPd54rlb, dPd54rlb, dPd075lr, dPd075, ddPd50PX }) => (
    dddPd8l ? "0 0 0 8rem" :
    dddPd16810 ? "16rem 8rem 10rem" :
    dddPd86rlb ? "0 8rem 6rem 8rem" :
    dddPd46885313 ? "4.688rem 5.313rem 6.25rem 5.313rem" :
    dddPd8r ? "0 8rem 0 0" :
    dddPd684 ? "6rem 4rem 6rem 8rem" :
    dddPd87PX ? "79px 61px 32px 61px" :
    dddPd32PX ? "32px 61px 32px 61px" :
    dddPd61PX ? "32px 61px 79px 61px" :
    ddPd54rlb ? "0 5rem 4rem 5rem" :
    ddPd72PX ? "65px 27px 27px 51px" :
    ddPd27PX ? "27px 51px 27px 51px" :
    ddPd50PX ? "50px 40px 10px 47px" :
    ddPd3753 ? "3.75rem 3rem 5.125rem 3rem" :
    ddPd5r ? "0 5rem 0 0" :
    ddPd1058 ? "10rem 5rem 8rem" :
    ddPd51PX ? "27px 51px 65px 51px" :
    dPd43PX ? "32px 24px 16px 24px" :
    dPd3753 ? "3.5rem 2rem 5rem 2rem" :
    dPd30PX ? "16px 24px 16px 24px" :
    dPd4r ? "0 4rem 0 0" :
    dPd16PX ? "16px 24px 32px 24px" :
    ddPd5l ? "0 0 0 5rem" :
    ddPd45 ? "4rem 5rem" :
    dPd4 ? "4rem" :
    dPd50PX ? "30px 22px 10px 30px" :
    dPd944 ? "9rem 4rem 4rem" :
    dPd54rlb ? "0 5rem 4rem 5rem" :
    dPd46885313 ? "4.688rem 5.313rem 6.25rem 5.313rem" :
    dPd40PX ? "40px 12px 0 29px" : 
    dPd1375rl ? "0 1.375rem" :
    dPd12525 ? "1.25rem 2.5rem" :
    dPd225rl ? "0 2.25rem" :
    dPd125 ? "1rem 2.5rem" :
    dPd6l ? "0 0 0 6rem" :
    dPd05075 ? "0.5rem 0.75rem" :
    dPd075lr ? "0 0.75rem" :
    dPd4l ? "0 0 0 4rem" :
    dPd32625 ? "3rem 2.625rem" :
    dPd075 ? "0.75rem" :
    "0"
)};
margin: ${({ dM0875r, dM1125b, dM118PXtb, dM3b, dM4b, dM1875rl, dM25r, dM15b,
dM254br, ddM2425t, dM15625t, dddM19b, ddM15b, dM65b, dM12b, ddM32t, dM915tb, dM41tb,
dM19t, ddM17t, dM12t, dM225b, dM1875b, dM1625rb, dM1625l, dM5b, ddM11t, dM0625b, dM05b,
ddM0875r, dddM0, ddM615tb, dddM915tb, dM2l, dM2r, dM2b, ddM075l, dM075l,
ddM125l, dM1l, dM4l, dddM1125l }) => (
    dddM0 ? "0" :
    dddM1125l ? "0 0 0 1.125rem" :
    dddM915tb ? "9rem 0 1.5rem 0" :
    dddM19b ? "0 0 19rem 0" :
    ddM32t ? "32rem 0 0 0" :
    ddM125l ? "0 0 0 1.25rem" :
    ddM075l ? "0 0 0 0.75rem" :
    ddM0875r ? "0 0.875rem 0 0" :
    ddM11t ? "11rem 0 0 0" :
    ddM615tb ? "6rem 0 1.5rem 0" :
    ddM15b ? "0 0 15rem 0" :
    ddM2425t ? "24.25rem 0 0 0" :
    ddM17t ? "17rem 0 0 0" :
    dM65b ? "0 0 6.5rem 0" :
    dM075l ? "0 0 0 0.75rem" :
    dM1l ? "0 0 0 1rem" :
    dM15b ? "0 0 1.5rem 0" :
    dM05b ? "0 0 0.5rem 0" :
    dM0625b ? "0 0 0.625rem 0" :
    dM19t ? "19rem 0 0 0" :
    dM41tb ? "4rem 0 1rem 0" :
    dM1625rb ? "0 1.625rem 1.625rem 0" :
    dM1625l ? "0 0 0 1.625rem" :
    dM12b ? "0 0 12rem 0" :
    dM2l ? "0 0 0 2rem" :
    dM4l ? "0 0 0 4rem" :
    dM2r ? "0 2rem 0 0" :
    dM915tb ? "9rem 0 1.5rem 0" :
    dM15625t ? "15.625rem 0 0 0" :
    dM12t ? "12rem 0 0 0" :
    dM0875r ? "0 0.875rem 0 0" :
    dM25r ? "0 2.5rem 0 0" :
    dM1125b ? "0 0 1.125rem 0" :
    dM118PXtb ? "118px 0" :
    dM3b ? "0 0 3rem 0" :
    dM1875b ? "0 0 1.875rem 0" :
    dM225b ? "0 0 2.25rem 0" :
    dM4b ? "0 0 4rem 0" :
    dM5b ? "0 0 5rem 0" :
    dM2b ? "0 0 2rem 0" :
    dM1875rl ? "0 1.875rem" :
    dM254br ? "0 2.5rem 4rem 0" :
    "0"
)};
height: ${({ screenH, fullh, dScreenH, dFit, fit, dFullH, zeroH, image1H,
image3H, text2H, image5H, image6H, text5H, text7H, text10H, box6h }) => (
    dScreenH ? "100vh" :
    dFullH ? "100%" :
    dFit ? "fit-content" :
    zeroH ? "0px" : 
    fullh ? "100%" :
    fit ? "fit-content" :
    box6h ? "15px" :
    text10H ? "336px" :
    text7H ? "65px" :
    text5H ? "58px" :
    image6H ? "680px" :
    image5H ? "580px" :
    text2H ? "259px" :
    screenH ? "100vh" :
    image1H ? "536px" :
    image3H ? "416px" :
    "auto"
)};
width: ${({ screenW, fullw, halfW, dScreenW, dFullW, headingW, subHeadW,
image1W, image2W, image3W, text1W, text2W, image5W, text3W, image6W, image7W,  
image8W, image9W, text4W, text5W, text6W, text7W, text8W, text9W, text10W,
box5w, box6w, box9w }) => (
    dScreenW ? "100vw" :
    dFullW ? "100%" :
    fullw ? "100%" :
    halfW ? "50%" :
    screenW ? "100vw" :
    box9w ? "49%" :
    box6w ? "15px" :
    text10W ? "540px" :
    text8W ? "215px" :
    text9W ? "165px" :
    text6W ? "183px" :
    text7W ? "65px" :
    text5W ? "358px" :
    text4W ? "552px" :
    image6W ? "174px" :
    image7W ? "205px" :
    image8W ? "207px" :
    image9W ? "129px" :
    text3W ? "314px" :
    image5W ? "900px" :
    box5w ? "830px" :
    text2W ? "259px" :
    text1W ? "500px" :
    headingW ? "970px" :
    subHeadW ? "350px" :
    image1W ? "650px" :
    image2W ? "227px" :
    image3W ? "704px" :
    "auto"
)};
}
`;




/***** Components Start Here *****/
export const Section = style.section`
${MainStyle};
`;
export const Container = style.div`
${MainStyle};

@media (max-width: 1024px){
    ::-webkit-scrollbar{
      display: none;
    }
  }
`;
export const Span = style.span`
${MainStyle};
`;
export const H1 = style.h1`
${MainStyle};
`;
export const Header = style.header`
${MainStyle};
`;
export const Footer = style.footer`
${MainStyle};
`;
export const Main = style.main`
${MainStyle};
`;
export const Nav = style.nav`
${MainStyle};
`;
export const Aside = style.aside`
${MainStyle};
`;
export const H2 = style.h2`
${MainStyle};
`;
export const H3 = style.h3`
${MainStyle};
`;
export const Paragraph = style.p`
${MainStyle};
`;
export const Anchor = style.a`
${MainStyle};
`;
export const Img = style.img`
${MainStyle};
object-fit: cover;
`;

/**** Motion Components *****/
export const SectionMotion = style(motion.section)`
${MainStyle};
`;
export const ContainerMotion = style(motion.div)`
${MainStyle};
`;
export const AsideMotion = style(motion.aside)`
${MainStyle};
`;

/***** Next Images *****/
export const NextImage = style(Image)`
object-fit: cover;
display: ${({ block, flex, inline, inlineflex, noShow }) => (
    noShow ? "none" :
    block ? "block" :
    flex ? "flex" :
    inlineflex ? "inline-flex" :
    inline ? "inline-block" :
    "initial"
)};
`;