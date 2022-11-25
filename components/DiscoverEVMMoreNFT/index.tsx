import axios, { AxiosRequestConfig } from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import GalleryEVMItem from "../GalleryEVMItem"

export default function DiscoverEVMMoreNFT() {
  const [options, setOptions] = useState<AxiosRequestConfig>({
    method: "GET",
    url: process.env.NEXT_PUBLIC_MORALIS_NFT_ENDPOINT,
    params: {
      chain: "eth",
      format: "decimal",
      limit: process.env.NEXT_PUBLIC_DEFAULT_LIMIT_RESULTS,
      normalizeMetadata: "false",
    },
    headers: { accept: "application/json", "X-API-Key": `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}` },
  })

  const getNFTs = async () => {
    const { data } = await axios.request(options)
    return data
  }

  const { isLoading, error, data, refetch } = useQuery(["discoverEVMMoreNFT", options], getNFTs)

  return (
    <div className="bg-gray lg:h-[1195px]">
      <h2 className="uppercase font-integralCFBold lg:text-[34px] ml-4 lg:ml-[144px] text-lg pt-10 lg:pt-[64px] text-secondary">
        Discover more NFTs
      </h2>
      <div className="pt-14"></div>
      {isLoading ? (
        <div className="ml-4 lg:ml-[144px] mt-4">Loading...</div>
      ) : error ? (
        <div className="ml-4 lg:ml-[144px] mt-4">Error retrieving NFTs.</div>
      ) : (
        <div className="lg:inline-flex justify-between mx-3 lg:mx-32 lg:space-y-[40px] lg:space-x-2 lg:mb-10 flex-wrap items-center">
          {data?.result.map((nft: { metadata: string; token_id: string }) => {
            const parsedJson = JSON.parse(nft.metadata)
            return (
              <GalleryEVMItem
                key={nft.token_id}
                image={parsedJson.image}
                attributes={parsedJson.attributes}
                description={parsedJson.description}
                name={parsedJson.name}
              />
            )
          })}
        </div>
      )}
      {data?.result?.length === 8 && (
        <div className="mx-auto w-1/2 lg:flex justify-center pt-8 lg:pt-16 pb-11">
          <button
            className="w-full py-5 mx-0 lg:mx-10 border rounded-full lg:w-[179px] text-xl bg-transparent text-primary border-primary font-dmSansMedium normal-case lg:rounded-[50px]"
            onClick={() => {
              console.log(data.cursor)
              options.params.cursor = data.cursor
              setOptions(options)
              refetch()
            }}
          >
            More NFTs
          </button>
        </div>
      )}
    </div>
  )
}
