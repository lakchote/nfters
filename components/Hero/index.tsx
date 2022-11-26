import { useConnectModal } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"
import addressesJson from "../../constants/addresses.json"
import facadeAbi from "../../constants/abi.json"

export default function Hero() {
  const { openConnectModal } = useConnectModal()
  const { isDisconnected, address } = useAccount()
  const { config } = usePrepareContractWrite({
    address: addressesJson[5].address,
    abi: facadeAbi,
    functionName: "safeMint",
    args: [address],
    enabled: Boolean(address),
  })
  const { write, data, isError, error } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  const handleMint = () => {
    if (isDisconnected) openConnectModal?.()
    write?.()
  }

  useEffect(() => {
    isSuccess
      ? toast.success("NFT minted")
      : isLoading
      ? toast.info("Minting NFT...")
      : isError && toast.error(`${"Error : " + error?.message}`)
  }, [isError, error, isSuccess, isLoading])

  return (
    <div className="px-3 lg:pb-[122px] lg:h-[440px] lg:flex justify-between lg:ml-[115px]">
      <div className="relative w-1/2 mx-auto lg:hidden mt-12">
        <Image src="/stacked_img_3.png" alt="" width={155} height={170} className="relative mt-7" />
        <Image
          src="/stacked_img_2.png"
          alt=""
          width={178}
          height={196}
          className="absolute top-[-10px] right-10 z-10"
        />
        <Image
          src="/stacked_img_1.png"
          alt=""
          width={200}
          height={220}
          className="absolute top-[-15px] right-12 z-10"
        />
        <Image
          src="/eth_live_auction.png"
          alt=""
          width={70}
          height={70}
          className="absolute top-[70px] right-[195px] z-10 "
        />
        <div className="absolute z-10  top-0 right-4 min-w-[200px] tracking-tighter leading-9">
          <span className="text-white font-dmSansBold">Abstr Gradient NFT</span>
        </div>
        <div className="absolute top-8 right-[-20px] z-10 min-w-[237px] leading-6 inline-flex">
          <Image src="/user_gradient.png" alt="" width={22} height={22} className="mr-[14px]" />
          <span className="text-white font-dmSansMedium text-sm leading-7 tracking-wide">Arkhan17</span>
        </div>
        <div className="absolute top-[140px] right-16 min-w-[150px] bg-bid rounded-xl z-10 items-center text-white">
          <div className="flex justify-between font-dmSansRegular p-1">
            <div className="text-[8px] flex-col mr-2">
              Current Bid
              <div className="pt-1 text-[8px] font-dmSansMedium ">
                <Image
                  src="/ethereum.png"
                  alt="Ethereum Logo"
                  width={8}
                  height={8}
                  className="mr-1 inline-flex items-center"
                />
                0.25 ETH
              </div>
            </div>
            <div className="text-[8px] flex-col">
              Ends in
              <div className="pt-1 text-[8px] flex space-x-1">
                <span className="font-dmSansBold">12</span>h<span className="font-dmSansBold">43</span>m
                <span className="font-dmSansBold">42</span>s
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-2">
        <h1 className="lg:mt-[72px] lg:max-w-[612px] font-integralCFBold lg:text-[41px] text-xl mt-10 lg:text-left font-normal lg:leading-[48px] uppercase text-secondary">
          Discover, and collect Digital Art&nbsp; NFTs
        </h1>
        <div className="pt-[22px] text-neutral lg:text-xl text-md lg:leading-[32px] lg:max-w-[471px] font-dmSansRegular">
          Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive
          digital assets.
        </div>
        <button className="text-accent mt-2 font-avertaRegular cursor-pointer" onClick={handleMint}>
          Claim FREE NFT
        </button>
        <div className="relative mt-10">
          <Image src="/dots.png" alt="" width={196} height={154} className="relative right-[53px]" />
          <button className="absolute top-0 btn btn-primary lg:px-10 lg:w-[209px] rounded-[60px] normal-case text-white font-avertaRegular font-extrabold lg:text-xl text-md tracking-[0.06rem] lg:h-[65px]">
            Explore Now
          </button>
          <div className="absolute top-1 lg:top-10 mt-[70px] flex-col">
            <div className="text-lg lg:text-[40px] font-integralCFBold text-secondary">
              98<span className="font-integralCFRegular">K+</span>
            </div>
            <div className="text-neutral lg:mt-2 lg:text-xl text-md font-dmSansRegular">Artwork</div>
          </div>
          <div className="absolute top-1 lg:top-10 left-7 ml-[100px] mt-[70px] flex-col">
            <div className=" text-lg lg:text-[40px] font-integralCFBold text-secondary">
              12<span className="font-integralCFRegular">K+</span>
            </div>
            <div className="text-neutral lg:mt-2 lg:text-xl text-md font-dmSansRegular">Auction</div>
          </div>
          <div className="absolute top-1 lg:top-10 left-14 ml-[200px] mt-[70px] flex-col">
            <div className="text-lg lg:text-[40px] font-integralCFBold text-secondary">
              15<span className="font-integralCFRegular">K+</span>
            </div>
            <div className="text-neutral lg:mt-2 lg:text-xl text-md font-dmSansRegular">Artist</div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image src="/stacked_img_3.png" alt="" width={310} height={341} className="relative mt-[106.5px] mr-[143px]" />
        <Image
          src="/stacked_img_2.png"
          alt=""
          width={356}
          height={392}
          className="absolute top-[81.2px] right-8 mr-[143px] z-10"
        />
        <Image
          src="/stacked_img_1.png"
          alt=""
          width={400}
          height={440}
          className="absolute top-[57px] right-[67px] mr-[143px] z-10"
        />
        <Image
          src="/eth_live_auction.png"
          alt=""
          width={140}
          height={140}
          className="absolute top-[252px] right-[400px] mr-[143px] z-10 "
        />
        <div className="absolute top-[84px] right-[204px] mr-[143px] z-10 min-w-[237px] text-[28px] tracking-tighter leading-9">
          <span className="text-white font-dmSansBold">Abstr Gradient NFT</span>
        </div>
        <div className="absolute top-[130px] right-[204px] mr-[143px] z-10 min-w-[237px] text-[28px] leading-6 inline-flex">
          <Image src="/user_gradient.png" alt="" width={32} height={32} className="mr-[14px]" />{" "}
          <span className="text-white font-dmSansMedium text-xl leading-7 tracking-wide">Arkhan17</span>
        </div>
        <div className="absolute top-[400px] max-h-[74px] min-w-[348px] bg-bid rounded-xl right-[95px] mr-[143px] z-10 text-[28px] items-center text-white">
          <div className="flex justify-between py-4 px-6 font-dmSansRegular">
            <div className="text-xs flex-col">
              Current Bid
              <div className="pt-1 text-base font-dmSansMedium">
                <Image
                  src="/ethereum.png"
                  alt="Ethereum Logo"
                  width={13}
                  height={33}
                  className="mr-[10px] inline-flex items-center"
                />
                0.25 ETH
              </div>
            </div>
            <div className="text-xs flex-col">
              Ends in
              <div className="pt-1 text-base flex space-x-2">
                <span className="font-dmSansBold">12</span>h<span className="font-dmSansBold">43</span>m
                <span className="font-dmSansBold">42</span>s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
