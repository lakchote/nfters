import { createContext, useContext } from "react"
import CTAMoreNFT from "../CTAMoreNFT"
import FilterDBCategories from "../FilterDBCategories"
import Gallery from "../Gallery"
import { DiscoverNFTProps, DISCOVER_NFT_SOURCES } from "./types"

const ShowBiddingContext = createContext<boolean>(false)

export default function DiscoverMoreNFT({ source, showBidding }: DiscoverNFTProps) {
  return (
    <div className="bg-gray lg:h-[1195px]">
      <h2 className="uppercase font-integralCFBold lg:text-[34px] ml-4 lg:ml-[144px] text-lg pt-10 lg:pt-[64px] text-secondary">
        Discover more NFTs
      </h2>
      {source === DISCOVER_NFT_SOURCES.DB ? <FilterDBCategories /> : <div className="pt-14"></div>}
      <ShowBiddingContext.Provider value={showBidding}>
        <Gallery />
        <Gallery /> {/*TODO: remove it when features implemented */}
      </ShowBiddingContext.Provider>
      <CTAMoreNFT />
    </div>
  )
}

export const useShowBiddingContext = () => useContext(ShowBiddingContext)
