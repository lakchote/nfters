import { useState } from "react"
import { DeviceProps, SUPPORTED_DEVICE_TYPES } from "../../common/types/devices"
import { uploadCategories } from "../../constants/categories/categories"
import axios from "axios"

export default function UploadImage({ device }: DeviceProps) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState<string>("0")
  const [price, setStartingPrice] = useState<string>("0")
  const [endingDate, setEndingDate] = useState("")
  const [image, setImage] = useState<Blob | string>("")
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [isUploadSuccess, setIsUploadSuccess] = useState<boolean>(false)
  const [isUploadError, setIsUploadError] = useState<boolean>(false)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)
    formData.append("price", price)
    formData.append("endingDate", endingDate)
    formData.append("category", uploadCategories[parseInt(category)])

    setIsUploading(true)
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_UPLOAD_ENDPOINT ?? "undefined", formData)
      .then(() => {
        setIsUploadSuccess(true)
        setIsUploadError(false)
        setIsUploading(false)
      })
      .catch(() => {
        setIsUploadError(true)
        setIsUploadSuccess(false)
        setIsUploading(false)
      })
  }

  return (
    <>
      <label
        htmlFor={device}
        className={`${
          device === SUPPORTED_DEVICE_TYPES.DESKTOP
            ? "btn btn-primary text-white rounded-[66px] ml-20 px-10 normal-case text-[14px] font-dmSansBold tracking-wider"
            : "btn-primary btn btn-xs bg-primary text-white normal-case text-sm font-dmSansBold tracking-wider absolute left-0 ml-6"
        }`}
      >
        {device === SUPPORTED_DEVICE_TYPES.DESKTOP ? "Upload" : "Post"}
      </label>
      <input type="checkbox" id={device} className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <label htmlFor={device} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-xl text-secondary">Upload an Image</h3>
          {isUploadSuccess && <p className="text-center text-accent mt-5">Upload successful.</p>}
          {isUploadError && (
            <p className="text-center text-accent mt-5">Upload error, please contact support for fast resolution.</p>
          )}
          {!isUploadSuccess && !isUploadError && (
            <form className="form-control mt-6" onClick={() => handleSubmit}>
              <input
                type="file"
                className="mb-5 file-input file-input-bordered file-input-primary w-full max-w-xs"
                onChange={(e) => {
                  if (e.target?.files?.[0]) {
                    setImage(e.target.files[0])
                  }
                }}
                required={true}
              />
              <label htmlFor="nfters-create-title" className="label font-semibold">
                <span className="label-text text-neutral">Title</span>
              </label>
              <input
                id="nfters-create-title"
                className="mb-4 input input-bordered w-full max-w-lg "
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
              <label htmlFor="nfters-create-price" className="label font-semibold">
                <span className="label-text text-neutral">Starting Price (ETH)</span>
              </label>
              <input
                id="nfters-create-price"
                className="input input-bordered w-full max-w-lg mb-5"
                placeholder="0.25"
                onChange={(e) => {
                  setStartingPrice(e.target.value)
                }}
                type="number"
              />
              <label htmlFor="nfters-create-endingDate" className="label font-semibold">
                <span className="label-text text-neutral">Ending Date</span>
              </label>
              <input
                id="nfters-create-endingDate"
                className="input input-bordered w-full max-w-lg mb-5"
                placeholder="2023-01-01"
                required={true}
                onChange={(e) => {
                  setEndingDate(e.target.value)
                }}
                type="datetime-local"
              />
              <label htmlFor="nfters-create-category" className="label max-w-lg font-semibold">
                <span className="label-text text-neutral">Category</span>
              </label>
              <select
                id="nfters-create-category"
                className="mb-4 select select-bordered w-full max-w-lg"
                onChange={(e) => setCategory(e.target.value)}
                required={true}
              >
                {uploadCategories.map((category, index) => (
                  <option key={category} value={index}>
                    {category}
                  </option>
                ))}
              </select>
              <button className="btn btn-accent text-white" onClick={(e) => handleSubmit(e)} type="submit">
                {isUploading ? "Uploading..." : "Upload"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
