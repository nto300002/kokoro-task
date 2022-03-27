import Footer from "app/core/layouts/Footer"
import Header from "app/core/layouts/Header"
import Layout from "app/core/layouts/Layout"
import "../core/layouts/styles/reset.scss"
import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import { RecoilRoot } from "recoil"
import NoSSR from "@mpth/react-no-ssr"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Layout>
        <Header />
        <NoSSR>
          <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
        </NoSSR>
      </Layout>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
