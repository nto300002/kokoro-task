import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"
import { Suspense } from "react"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Html lang="en">
          <DocumentHead />
          <body>
            <Main />
            <BlitzScript />
          </body>
        </Html>
      </Suspense>
    )
  }
}

export default MyDocument
