import { Head, ErrorComponent } from "blitz"
import { Suspense } from "react"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const statusCode = 404
  const title = "This page could not be found"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <Suspense fallback={<div>loading...</div>}>
        <ErrorComponent statusCode={statusCode} title={title} />
      </Suspense>
    </>
  )
}
