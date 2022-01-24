/*
 * Derived from https://nextjs.org/docs/advanced-features/custom-document .
 * Necessary to add nx-html and nx-body classes
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="nx-html">
        <Head />
        <body className="nx-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
