import { deco1Bg, deco2Bg, secondaryBg } from "../styles/props";

/** NAV MENU DATA */
export const navData = [
    {
        id:"1",        
        path: "/",
        title: "HOME"
    },
    {
        id:"2",
        path: "/invest",
        title: "INVEST"
    },
    {
        id:"3",
        path: "/cash",
        title: "CASH"
    },
    {
        id:"4",
        path: "/about",
        title: "ABOUT"
    },
    {
        id:"5",
        path: "/learn",
        title: "LEARN"
    }
];

/** REASONS DATA */
export const whyData = [
    {
        id: 1,
        title1: `Easy`,
        body1: `Get started with as little as $10 and use our 
        top-rated mobile app to invest on the go.`,
        title2: `Optimized`,
        body2: `We put the robots to work for you, with automated 
        tools and strategies that help unlock your money’s potential.`
    },
    {
        id: 2,
        title1: `Personalized`,
        body1: `Customize your account, either as hands on as 
        you want, or with our guidance along the way.`,
        title2: `Finances`,
        body2: `Track your finances. Connect all outside accounts and manage your 
        financial life in one place.`
    }
];


/** STEPS DATA */
export const stepData = [
    {
        id: 1,
        body: "Register and verify your email address",
        color: secondaryBg
    },
    {
        id: 2,
        body: "Complete your profile and assessment",
        color: deco1Bg
    },
    {
        id: 3,
        body: "Start investing",
        color: deco2Bg
    }
];

/** RISK TOLERANCE DATA */
export const riskScoreData = [
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];