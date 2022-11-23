import Image from "next/image"

export default function AmazeNFT() {
  return (
    <div className="mt-10 py-10 lg:mt-32 lg:py-32 bg-gray lg:flex justify-around h-[326px] lg:pr-[117px]">
      <h2 className="font-integralCFBold lg:w-[398px] uppercase text-lg lg:text-3xl text-secondary lg:ml-[121px] mx-4">
        The amazing Nft Art of the World here
      </h2>
      <div>
        <div>
          <Image src="/card_tick.png" alt="" width={36} height={36} className="ml-4 lg:ml-0 mr-4 float-left" />
          <div className="flex-col items-center mt-10 lg:mt-0">
            <h3 className="text-lg font-semibold text-secondary tracking-wider">Fast Transaction</h3>
            <div className="ml-[70px] lg:ml-[53px] w-[249px] font-dmSansRegular text-sm leading-6 text-[#696969]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src="/chart.png" alt="" width={36} height={36} className="ml-4 lg:ml-0 mr-4 float-left" />
          <div className="flex-col items-center mt-10 lg:mt-0 ">
            <h3 className="text-lg font-semibold text-secondary tracking-wider">Growth Transaction</h3>
            <div className="ml-[70px] lg:ml-[53px] lg:w-[311px] font-dmSansRegular text-sm leading-6 text-[#696969]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
