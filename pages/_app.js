import App, { Container } from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#8c4ef8",
    text: "#eee",
    textLight: "#eeeeee88",
    bleuish: "#0070f3",
    bg: "#1d1c23",
    bgl: "#073175",
    bgm: "#062659",
    bgd: "#041a3e",
    bgdl: "#4c5f7e",
    sidePanel: "#07317544",
    sideBar: "#052456",
    radius: "8px"
  }
}
const theme0 = {
  colors: {
    primary: "#8c4ef8",
    text: "#333",
    textLight: "#33333388",
    bleuish: "#0070f3",
    bg: "#1d1c23",
    bgl: "#eee",
    bgm: "#ddd",
    bgd: "#ccc",
    bgdl: "#c0c0c044",
    sidePanel: "#07317544",
    sideBar: "#ffffff88"
  }
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
