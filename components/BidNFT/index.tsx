import axios from "axios"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useAccount, useConnect } from "wagmi"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"

export default function BidNFT({ _id, startingPrice }: { _id: string; startingPrice: number }) {
  const [isBidUpdateSuccess, setIsBidUpdateSuccess] = useState<boolean>(false)
  const [isBidUpdateError, setIsBidUpdateError] = useState<boolean>(false)
  const [price, setPrice] = useState<string>("0")
  const [uuid] = useState<string>(uuidv4())
  const { address } = useAccount()
  const { connect } = useConnect()

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!address) {
      await connect({ connector: new MetaMaskConnector() })
    } else {
      const formData = new URLSearchParams({
        price: price,
        bidder: address,
      })

      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_PICTURES_UPDATE_ENDPOINT}${_id}` ?? "undefined", formData)
        .then(() => {
          setIsBidUpdateSuccess(true)
          setIsBidUpdateError(false)
        })
        .catch(() => {
          setIsBidUpdateError(true)
          setIsBidUpdateSuccess(false)
        })
    }
  }

  return (
    <>
      <label htmlFor={uuid} className="text-primary font-dmSansRegular text-sm ml-2 cursor-pointer">
        Place a bid
      </label>
      <input type="checkbox" id={uuid} className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <label htmlFor={uuid} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-xl text-secondary">Bid on NFT</h3>
          {isBidUpdateSuccess && <p className="text-center text-accent mt-5">Bid successful.</p>}
          {isBidUpdateError && (
            <p className="text-center text-accent mt-5">Bid error, please contact support for fast resolution.</p>
          )}
          {!isBidUpdateSuccess && !isBidUpdateError && (
            <form
              className="form-control mt-6"
              onClick={() => handleSubmit}
              encType="application/x-www-form-urlencoded"
            >
              <input
                id={`nfters-update-price-${_id}`}
                className="input input-bordered w-full max-w-lg mb-5"
                placeholder={(startingPrice + 0.01).toFixed(2).toString()}
                onChange={(e) => {
                  if (parseInt(e.target.value) <= startingPrice) {
                    e.target.value = (startingPrice + 0.01).toString()
                  }
                  setPrice(e.target.value.toString())
                }}
                type="number"
              />
              <button className="btn btn-accent text-white" onClick={(e) => handleSubmit(e)} type="submit">
                Bid
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
