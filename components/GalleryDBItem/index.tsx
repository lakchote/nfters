import Image from "next/image"
import BidNFT from "../BidNFT"
import { Picture } from "../DiscoverDBMoreNFT/types"
import truncateStr from "../../utils/truncateStr"

export default function GalleryItem({ _id, title, image, starting_price, ending_date, bidder }: Picture) {
  const handleTimeDiff = (ending_date: string): string => {
    const endingDate = new Date(ending_date)
    const diff = +endingDate - +Date.now()
    if (diff > 0) {
      return `${Math.floor(diff / (1000 * 60 * 60))}h ${Math.floor((diff / 1000 / 60) % 60)}m ${Math.floor(
        (diff / 1000) % 60,
      )}s left`
    }

    return "No time left"
  }

  const showBidder = () => {
    if (bidder) return <div className="text-sm ml-5">Last bid by {truncateStr(bidder, 11)}</div>
  }

  return (
    <div className="lg:h-[373px] my-auto lg:min-w-[270px] bg-white rounded-md lg:flex flex-col mb-4 pb-4 lg:mb-0 lg:pb-0">
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}${image}`}
        alt="NFT Image"
        width={248}
        height={223}
        className="pt-5 lg:pt-3 mx-auto max-h-[223px] min-w[248px] min-h[223px]"
      />
      <div className="mt-5 ml-5 font-dmSansBold text-xl">{title}</div>
      <div className="mt-3 ml-5 price-eth font-dmSansRegular text-xs">
        <Image src="/eth_price.png" width={9} height={15} alt="Ethereum logo" className="float-left mr-1" />
        {starting_price} ETH
      </div>
      {bidder && showBidder()}
      <div className="mt-5 border-t border-t-[#F4F4F4] lg:mx-[24px]"></div>
      <div className="mx-5 flex flex-row mt-4 lg:mt-2 items-center justify-between">
        <div className="btn btn-sm text-primary text-xs normal-case font-dmSansRegular rounded-full border-none bg-discover-category">
          {handleTimeDiff(ending_date)}
        </div>
        {handleTimeDiff(ending_date) !== "No time left" && <BidNFT _id={_id} startingPrice={starting_price ?? 0} />}
      </div>
    </div>
  )
}
