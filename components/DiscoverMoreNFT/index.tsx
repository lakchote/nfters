import CTAMoreNFT from "../CTAMoreNFT"
import FilterDBCategories from "../FilterDBCategories"
import Gallery from "../Gallery"
import { DiscoverNFTSource, DISCOVER_NFT_SOURCES } from "./types"

export default function DiscoverMoreNFT({ source }: DiscoverNFTSource) {
  return (
    <div className="bg-gray lg:h-[1195px]">
      <h2 className="uppercase font-integralCFBold lg:text-[34px] ml-4 lg:ml-[144px] text-lg pt-10 lg:pt-[64px] text-secondary">
        Discover more NFTs
      </h2>
      {source === DISCOVER_NFT_SOURCES.DB ? <FilterDBCategories /> : <div className="pt-14"></div>}
      <Gallery />
      <Gallery /> {/*TODO: remove it when features implemented */}
      <CTAMoreNFT />
    </div>
  )
}
