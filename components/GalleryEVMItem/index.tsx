import Image from "next/image"
import { NFTMetadata } from "./types"

export default function GalleryEVMItem({ image, attributes, description, name }: NFTMetadata) {
  return (
    <>
      <div className="lg:h-[335px] my-auto lg:min-w-[270px] bg-white rounded-md lg:flex flex-col mb-4 pb-4 lg:mb-0 lg:pb-0">
        <Image
          src={image}
          alt="NFT Image"
          width={248}
          height={223}
          className="pt-5 lg:pt-3 mx-auto max-h-[223px] min-w[248px] min-h[223px]"
        />
        <label
          htmlFor={name}
          className="cursor-pointer block text-center pb-4 lg:pb-0 lg:text-left mt-5 lg:ml-5 font-dmSansBold text-xl"
        >
          {name}
        </label>
        <div className="mb-4 lg:mb-[-120px] lg:mt-5 border-t border-t-[#F4F4F4] lg:mx-[24px]"></div>
      </div>

      <input type="checkbox" id={name} className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <label htmlFor={name} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-xl font-bold   text-secondary pb-3">NFT Metadata</h3>
          <p className="py-1">
            <strong>Name:</strong> {name}
          </p>
          <p className="py-1">
            <strong>Attributes:</strong> {attributes.join(", ")}
          </p>
          <p className="py-1">
            <strong>Description:</strong> {description}
          </p>
        </div>
      </div>
    </>
  )
}
