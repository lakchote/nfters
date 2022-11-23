import Image from "next/image"

export default function FeaturedCollection() {
  return (
    <div className="pt-16 bg-gray lg:min-h-[620px]">
      <h2 className="uppercase font-integralCFBold text-lg mb-4 lg:mb-0 mx-4 lg:mx-0 lg:text-[28px] text-secondary lg:ml-[144px]">
        Collection featured NFTs
      </h2>
      <div className="lg:inline-flex lg:ml-[144px] lg:space-x-8">
        <div className="flex flex-col ml-4 lg:ml-0">
          <div className="lg:pt-14 flex">
            <Image
              src="/nft_collections/featured/1_main.png"
              alt=""
              width={266}
              height={272}
              className="float-left mr-[10px]"
            />
            <div className="lg:space-y-2">
              <Image src="/nft_collections/featured/1_y_0.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_1.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_2.png" alt="" width={103} height={85} />
            </div>
          </div>
          <div className="flex-col">
            <div className="font-dmSansBold tracking-wide text-xl pt-7">Amazing collection</div>
            <div className="flex flex-row items-center -mt-8 justify-between lg:w-[379px]">
              <div className="items-center inline-flex">
                <Image src="/user_gradient.png" alt="" width={32} height={32} className="mr-[14px]" />
                <span className="text-secondary text-sm font-dmSansRegular">by Arkhan</span>
              </div>
              <div className="mr-1 lg:mr-0">
                <button className="my-10 border-2 border-accent text-[11px] text-accent font-dmSansBold rounded-[60px] py-1 px-2">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-4 lg:ml-0">
          <div className="lg:pt-14 flex">
            <Image
              src="/nft_collections/featured/1_main.png"
              alt=""
              width={266}
              height={272}
              className="float-left mr-[10px]"
            />
            <div className="space-y-2">
              <Image src="/nft_collections/featured/1_y_0.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_1.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_2.png" alt="" width={103} height={85} />
            </div>
          </div>
          <div className="flex-col">
            <div className="font-dmSansBold tracking-wide text-xl pt-7">Amazing collection</div>
            <div className="flex flex-row items-center -mt-8 justify-between lg:w-[379px]">
              <div className="items-center inline-flex">
                <Image src="/user_gradient.png" alt="" width={32} height={32} className="mr-[14px]" />
                <span className="text-secondary text-sm font-dmSansRegular">by Arkhan</span>
              </div>
              <div className="mr-1 lg:mr-0">
                <button className="my-10 border-2 border-accent text-[11px] text-accent font-dmSansBold rounded-[60px] py-1 px-2">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-4 lg:ml-0">
          <div className="lg:pt-14 flex">
            <Image
              src="/nft_collections/featured/1_main.png"
              alt=""
              width={266}
              height={272}
              className="float-left mr-[10px]"
            />
            <div className="space-y-2">
              <Image src="/nft_collections/featured/1_y_0.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_1.png" alt="" width={103} height={85} />
              <Image src="/nft_collections/featured/1_y_2.png" alt="" width={103} height={85} />
            </div>
          </div>
          <div className="flex-col">
            <div className="font-dmSansBold tracking-wide text-xl pt-7">Amazing collection</div>
            <div className="flex flex-row items-center -mt-8 justify-between lg:w-[379px]">
              <div className="items-center inline-flex">
                <Image src="/user_gradient.png" alt="" width={32} height={32} className="mr-[14px]" />
                <span className="text-secondary text-sm font-dmSansRegular">by Arkhan</span>
              </div>
              <div className="mr-1 lg:mr-0">
                <button className="my-10 border-2 border-accent text-[11px] text-accent font-dmSansBold rounded-[60px] py-1 px-2">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
