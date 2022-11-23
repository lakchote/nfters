import Image from "next/image"

export default function Footer() {
  return (
    <div className="pt-10 pb-10 lg:h-[343px] ml-4 lg:mx-[120px] lg:pt-[33px] lg:flex lg:space-x-24">
      <div className="flex-col justify-start">
        <h2 className="text-secondary font-integralCFBold text-2xl lg:ml-0">Nfters</h2>
        <div className="text-neutral text-sm lg:w-[333px] font-avertaRegular pt-7 lg:ml-0">
          The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy,
          sell, and discover exclusive digital items.
        </div>
        <div className="flex flex-row lg:ml-0 mt-4 lg:mt-8 space-x-3">
          <Image src="/socials/facebook.png" alt="Facebook logo" width={36} height={36} />
          <Image src="/socials/linkedin.png" alt="LinkedIn logo" width={36} height={36} />
          <Image src="/socials/twitter.png" alt="Twitter logo" width={36} height={36} />
        </div>
      </div>
      <div className="flex-col justify-center">
        <h3 className="text-lg normal-case font-dmSansBold tracking-wide pt-7 lg:pt-0">Market Place</h3>
        <div className="space-y-2 lg:space-y-3 lg:mt-6 text-sm font-dmSansRegular text-black-light">
          <div>All NFTs</div>
          <div>New</div>
          <div>Art</div>
          <div>Sports</div>
          <div>Utility</div>
          <div>Music Domain Name</div>
        </div>
      </div>
      <div className="flex-row justify-center">
        <h3 className="text-lg normal-case font-dmSansBold tracking-wide pt-7 lg:pt-0">My Account</h3>
        <div className="space-y-2 lg:space-y-3 lg:mt-6 text-sm font-dmSansRegular text-black-light">
          <div>Profile</div>
          <div>Favorite</div>
          <div>My Collections</div>
          <div>Settings</div>
        </div>
      </div>
      <div className="flex-row justify-center">
        <h3 className="text-lg normal-case font-dmSansBold tracking-wide pt-7 lg:pt-0">Stay In The Loop</h3>
        <div className="space-y-6 lg:mt-6 text-sm font-dmSansRegular text-black-light">
          <div className="text-sm text-[#363639] lg:w-[362px] pt-4 lg:pt-0">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
            for navigating NFTs.
          </div>
          <form className="relative">
            <input
              className="w-full p-4 mx-auto lg:w-[364px] lg:h-[60px] rounded-full lg:rounded-[46px] border-2 border-[#F1F1F1] pl-4 lg:pl-[26px] text-xs lg:text-sm"
              placeholder="Enter your email address"
            />
            <button className="absolute top-0 right-0 my-2 mr-2 bg-accent text-white p-2 px-[30px] rounded-full lg:rounded-[46px] lg:h-[46px]">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
