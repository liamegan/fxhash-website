import Head from "next/head"
import { PropsWithChildren } from "react"
import { Header } from "./Header"

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Example App</title>
      </Head>

      <Header></Header>

      <main>
        {children}
      </main>
    </>
  )
}