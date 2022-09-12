import Head from 'next/head';
import GlobalStyle from "../styles/globalStyle";
import { darkBg } from "../styles/props";

/** 
 * VERCEL URL: https://atafrica-robo-advisor.herokuapp.com 
 * GITHUB URL: https://github.com/christopheresivwekpe/atafrica-robo-advisor 
**/

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Meet the app that gives you the tools, inspiration, and support you need to become a better investor." />
        <title>RoboAdvisor - A smarter way to invest</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>

        <meta name="theme-color" content={darkBg} />
        <meta name="msapplication-navbutton-color" content={darkBg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={darkBg} />

        <meta name="title" content="RoboAdvisor"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://robo-advisor.herokuapp.com "/>
        <meta property="og:site_name" content="RoboAdvisor"/>
        <meta property="og:title" content="RoboAdvisor"/>
        <meta property="og:description" content="Meet the app that gives you the tools, inspiration, and support you need to become a better investor."/>
        <meta property="og:image" content=""/>

        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content="https://robo-advisor.herokuapp.com "/>
        <meta property="twitter:title" content="RoboAdvisor"/>
        <meta name="twitter:site" content="@RoboAdvisor"/>
        <meta name="twitter:creator" content="@RoboAdvisor"/>
        <meta property="twitter:description" content="Meet the app that gives you the tools, inspiration, and support you need to become a better investor."/>
        <meta property="twitter:image" content=""/>
        <meta property="twitter:image:alt" content="RoboAdvisor logo"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      {children}
    </>
  );
}
