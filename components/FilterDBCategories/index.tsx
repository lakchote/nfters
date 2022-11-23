import Image from "next/image"

export default function FilterDBCategories() {
  return (
    <div className="lg:flex lg:space-x-96 block lg:pb-9">
      <div className="lg:flex justify-start space-y-2 lg:space-y-0 space-x-2 lg:space-x-0 lg:mt-[36px] ml-4 mt-2 lg:ml-[131px] lg:mr-[126px] font-dmSansRegular">
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          All Categories
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Art
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Celebrities
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Gaming
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Sport
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Music
        </button>
        <button className="btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
          Crypto
        </button>
      </div>
      <button className="flex mx-auto justify-start lg:justify-end font-dmSansRegular mb-4 mt-4 lg:mt-[36px] btn btn-sm hover:text-white normal-case text-secondary rounded-full border-none bg-discover-category">
        <Image src="/filter_results.png" alt="Filter Results" width={24} height={24} className="mr-[10px]" />
        All Filters
      </button>
    </div>
  )
}
