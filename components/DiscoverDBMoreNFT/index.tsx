import { useQuery } from "react-query"
import { Picture } from "./types"
import GalleryItem from "../GalleryDBItem"
import { useState } from "react"
import Image from "next/image"

export default function DiscoverDBMoreNFT() {
  const [endpoint, setEndpoint] = useState<string>(process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT ?? "undefined")
  const [page, setPage] = useState<number>(0)
  const [category, setCategory] = useState<string | null>(null)

  const { isLoading, error, data } = useQuery(
    ["discoverDBMoreNFT", endpoint],
    async () => fetch(endpoint).then((res) => res.json()),
    {
      refetchInterval: 2000,
    },
  )

  return (
    <div className="bg-gray lg:h-[1195px]">
      <h2 className="uppercase font-integralCFBold lg:text-[34px] ml-4 lg:ml-[144px] text-lg pt-10 lg:pt-[64px] text-secondary">
        Discover more NFTs
      </h2>

      {isLoading ? (
        <div className="ml-4 lg:ml-[144px] mt-4">Loading...</div>
      ) : error ? (
        <div className="ml-4 lg:ml-[144px] mt-4">Error retrieving NFTs.</div>
      ) : (
        <>
          <div className="lg:flex lg:space-x-96 block lg:pb-9">
            <div className="lg:flex justify-start space-y-2 lg:space-y-0 space-x-2 lg:space-x-0 lg:mt-[36px] ml-4 mt-2 lg:ml-[131px] lg:mr-[126px] font-dmSansRegular">
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory(null)
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}`)
                }}
              >
                All Categories
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Art")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Art`)
                }}
              >
                Art
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Celebrities")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Celebrities`)
                }}
              >
                Celebrities
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Gaming")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Gaming`)
                }}
              >
                Gaming
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Sport")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Sport`)
                }}
              >
                Sport
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Music")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Music`)
                }}
              >
                Music
              </button>
              <button
                className="btn-filter-category"
                onClick={() => {
                  setCategory("Crypto>")
                  setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=Crypto`)
                }}
              >
                Crypto
              </button>
            </div>
            <button
              className="flex mx-auto justify-start lg:justify-end font-dmSansRegular mb-4 mt-4 lg:mt-[36px] btn-filter-category"
              onClick={() => {
                setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}`)
              }}
            >
              <Image src="/filter_results.png" alt="Filter Results" width={24} height={24} className="mr-[10px]" />
              All Filters
            </button>
          </div>
          {data?.pictures?.length === 0 ? (
            <div className="ml-4 lg:ml-[144px] mt-4">No NFTs available for this category right now.</div>
          ) : (
            <div className="lg:inline-flex justify-between mx-3 lg:mx-32 lg:space-y-[40px] lg:space-x-2 lg:mb-10 flex-wrap items-center">
              {data?.pictures?.map((picture: Picture) => {
                return (
                  <GalleryItem
                    key={picture._id}
                    _id={picture._id}
                    category={picture.category}
                    ending_date={picture.ending_date}
                    title={picture.title}
                    starting_price={picture.starting_price}
                    image={picture.image}
                    bidder={picture.bidder}
                  />
                )
              })}
            </div>
          )}

          {data?.pictures?.length === 8 && (
            <div className="mx-auto w-1/2 lg:flex justify-center pt-8 lg:pt-16 pb-11">
              <button
                className="w-full py-5 mx-0 lg:mx-10 border rounded-full lg:w-[179px] text-xl bg-transparent text-primary border-primary font-dmSansMedium normal-case lg:rounded-[50px]"
                onClick={() => {
                  setPage(page + 1)
                  category
                    ? setEndpoint(
                        `${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?category=${category}&page=${page}`,
                      )
                    : setEndpoint(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_ENDPOINT}?page=${page}`)
                }}
              >
                More NFTs
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
