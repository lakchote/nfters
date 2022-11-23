import Head from "next/head"
import AmazeNFT from "../components/AmazeNFT"
import CreateSellNFT from "../components/CreateSellNFT"
import DiscoverMoreNFT from "../components/DiscoverMoreNFT"
import FeaturedCollection from "../components/FeaturedCollection"
import Hero from "../components/Hero"
import { DISCOVER_NFT_SOURCES } from "../components/DiscoverMoreNFT/types"
import Footer from "../components/Footer"

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
        <CreateSellNFT />
        <DiscoverMoreNFT source={DISCOVER_NFT_SOURCES.DB} showBidding={true} />
        <div className="pt-[46px] bg-gray"></div>
        <div className="divider-nft-categories"></div>
        <DiscoverMoreNFT source={DISCOVER_NFT_SOURCES.SMART_CONTRACT} showBidding={false} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
