import App from "next/app";
import React from "react";
import nextI18nextConfig from "../next-i18next.config";
import { appWithTranslation } from "next-i18next";

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(ReactApp, nextI18nextConfig);
