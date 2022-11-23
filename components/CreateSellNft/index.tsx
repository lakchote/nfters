import Image from "next/image"

export default function CreateSellNFT() {
  return (
    <div className="lg:px-[120px] mt-10 mx-4 lg:mx-0 lg:mt-[101px] lg:mb-[142px] lg:flex lg:justify-start lg:space-x-96">
      <div className="lg:flex-col relative">
        <div className="relative">
          <Image
            src="/nft_collections/featured/2_main.png"
            alt=""
            width={300}
            height={300}
            className="relative create-sell-nft-img-one"
          />
          <div className="absolute bottom-[-5px] right-[180px] lg:bottom-[-40px] lg:right-[-20px]">
            <Image src="/avatars/avatar_0.png" alt="" width={80} height={80} className="avatar" />
          </div>
        </div>
        <div className="relative top-7 left-[50px] lg:top-14 lg:left-[110px]">
          <Image
            src="/stacked_img_3.png"
            alt=""
            width={194}
            height={214}
            className="relative create-sell-nft-img-two"
          />
          <div className="absolute left-[75px] bottom-[-5px] lg:bottom-[-40px] lg:left-[150px]">
            <Image src="/avatars/avatar_1.png" alt="" width={80} height={80} className="avatar" />
          </div>
        </div>
        <div className="absolute top-20 right-[30px] lg:top-40 lg:right-[-310px]">
          <Image
            src="/stacked_img_2.png"
            alt=""
            width={241}
            height={265}
            className="relative create-sell-nft-img-three"
          />
          <div className="absolute bottom-[-5px] right-[-20px] lg:bottom-[-20px] lg:right-[-40px]">
            <Image src="/avatars/avatar_1.png" alt="" width={80} height={80} className="avatar" />
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-[160px] lg:flex-col">
        <h2 className="font-integralCFBold text-lg lg:text-[32px] text-secondary lg:w-[320px]">
          Create and sell your NFTs
        </h2>
        <div className="text-[#636363] lg:w-[517px] pt-4 lg:pt-[30px] font-dmSansRegular lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus
          sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut.
          Pellentesque eu sit blandit fringilla risus faucibus.
        </div>
        <button className="mt-4 lg:mt-8 py-2 lg:py-5 px-5 lg:px-10 flex-col bg-primary text-white rounded-[30px] lg:rounded-[60px] font-avertaRegular text-lg lg:text-xl">
          Sign up now
        </button>
      </div>
    </div>
  )
}
