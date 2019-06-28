import App, { Container } from 'next/app'
import { default as React } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import withApollo from '../lib/withApollo'

const theme = {
  colors: {
    primary: '#8c4ef8',
    text: '#eee',
    textLight: '#eeeeee88',
    textLightBlue: '#536A91',
    bleuish: '#0070f3',
    bg: '#1d1c23',
    bgl: '#073175',
    bgm: '#062659',
    bgd: '#041a3e',
    bgdl: '#4c5f7e',
    sidePanel: '#07317544',
    sideBar: '#052456',
    radius: '8px'
  },
  size: {
    s: '14px',
    radius: '8px'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  }
}
const theme0 = {
  colors: {
    primary: '#8c4ef8',
    text: '#333',
    textLight: '#33333388',
    bleuish: '#0070f3',
    bg: '#1d1c23',
    bgl: '#eee',
    bgm: '#ddd',
    bgd: '#ccc',
    bgdl: '#c0c0c044',
    sidePanel: '#07317544',
    sideBar: '#ffffff88'
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
