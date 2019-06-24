import App, { Container } from 'next/app'
import './index.scss'

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default NextApp
