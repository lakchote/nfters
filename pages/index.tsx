import Head from "next/head"
import AmazeNFT from "../components/AmazeNFT"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFTers</title>
        <meta name="description" content="Test assignment #1 for Ternoa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AmazeNFT />
      </main>
      <footer></footer>
    </div>
  )
}
