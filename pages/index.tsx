import Head from "next/head"
import AmazeNFT from "../components/AmazeNFT"
import CreateSellNft from "../components/CreateSellNft"
import DiscoverDBMoreNFT from "../components/DiscoverDBMoreNFT"
import FeaturedCollection from "../components/FeaturedCollection"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import DiscoverEVMMoreNFT from "../components/DiscoverEVMMoreNFT"

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
        <FeaturedCollection />
        <CreateSellNft />
        <DiscoverDBMoreNFT />
        <div className="pt-[46px] bg-gray"></div>
        <div className="divider-nft-categories"></div>
        <DiscoverEVMMoreNFT />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
