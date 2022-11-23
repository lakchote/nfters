import Image from "next/image"

export default function GalleryItem() {
  return (
    <div className="lg:h-[373px] lg:w-[270px] bg-white rounded-md lg:flex flex-col mb-4 pb-4 lg:mb-0 lg:pb-0">
      <Image
        src="/stacked_img_1.png"
        alt="NFT Image"
        width={248}
        height={223}
        className="pt-5   lg:pt-3 mx-auto max-h-[223px]"
      />
      <div className="mt-5 ml-5 font-dmSansBold text-xl">ArtCrypto</div>
      <div className="mt-3 ml-5 price-eth font-dmSansRegular text-xs">
        <Image src="/eth_price.png" width={9} height={15} alt="Ethereum logo" className="float-left mr-1" />
        0.25 ETH
      </div>
      <div className="mt-5 border-t border-t-[#F4F4F4] lg:mx-[24px]"></div>
      <div className="mx-5 flex flex-row mt-4 lg:mt-2 items-center justify-between">
        <div className="btn btn-sm text-primary text-xs normal-case font-dmSansRegular rounded-full border-none bg-discover-category">
          3h 50m 2s left
        </div>
        <div className="text-primary font-dmSansRegular text-sm">Place a bid</div>
      </div>
    </div>
  )
}
