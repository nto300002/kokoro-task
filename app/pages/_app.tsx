import Footer from "app/core/layouts/Footer"
import Header from "app/core/layouts/Header"
import Layout from "app/core/layouts/Layout"
import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Layout>
        <Header />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </Layout>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
