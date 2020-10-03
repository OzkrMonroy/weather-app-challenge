import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root{
            --dark-background-color: #100E1D;
            --light-background-color: #1E213A;
            --primary-text-color: #E7E7EB;
            --secondary-text-color: #A09FB1;
            --secondary-text-color-dark: #88869D;
          }
          *, *::after, *::before{
            box-sizing: border-box;
          }
          body{
            font-family: 'Raleway', sans-serif;
            margin: 0;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Head>
        <title>Weather App</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>{props.children}</main>
    </>
  );
}
 
export default Layout;