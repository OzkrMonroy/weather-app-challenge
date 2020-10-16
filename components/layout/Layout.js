import React from "react";
import Head from "next/head";
import { Global, css } from "@emotion/core";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          html::-webkit-scrollbar {
            width: 8px;
          }
          html::-webkit-scrollbar-thumb {
            background: #1e213a;
            border-radius: 4px;
          }
          html::-webkit-scrollbar-track {
            background: #100e1d;
            border-radius: 4px;
          }
          body {
            font-family: "Raleway", sans-serif;
            margin: 0;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          #__next {
            overflow-x: hidden;
          }
        `}
      />
      <Head>
        <title>Weather App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
