import Link from "next/link"
import CustomConnectButton from "../CustomConnectButton"
import { SUPPORTED_DEVICE_TYPES } from "../../common/types/devices"
import PolkadotConnectButton from "../PolkadotConnectButton"
import UploadImage from "../UploadImage"
import { useState } from "react"

export default function Header() {
  const [hideMetamask, setHideMetamask] = useState<boolean>(false)
  return (
    <div className="navbar lg:justify-around bg-base-100 pt-[31px] pb-[25px] border-b-[1px] border-gray-header">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost mr-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 font-dmSansMedium"
        >
          <li>
            <a>Marketplace</a>
          </li>
          <li>
            <a>Resource</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <div className="text-[#C0C0C0] flex justify-center relative py-4">
            <input
              className="border-2 border-gray-header rounded-[100px] pl-6 py-2 text-[16px] font-dmSansMedium"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute top-4 right-8 mt-2 mr-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#757575"
                />
                <path
                  d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                  fill="#757575"
                />
              </svg>
            </button>
          </div>
        </ul>
      </div>
      <div>
        <Link
          href="/"
          className="cursor-pointer text-primary text-2xl tracking-wider -mt-2 font-bold font-integralCFBold uppercase"
        >
          NFTERs
        </Link>
        <div className="lg:hidden flex justify-end min-w-full space-x-4 relative items-center">
          <UploadImage device={SUPPORTED_DEVICE_TYPES.MOBILE} />
          {!hideMetamask && <CustomConnectButton device={SUPPORTED_DEVICE_TYPES.MOBILE} />}
          <div onClick={() => setHideMetamask(!hideMetamask)} className="relative">
            <PolkadotConnectButton device={SUPPORTED_DEVICE_TYPES.MOBILE} />
          </div>
        </div>

        <span className="hidden lg:inline-flex vertical-spacer"></span>
        <ul className="hidden lg:menu lg:menu-horizontal space-x-3 tracking-wider font-dmSansMedium text-secondary">
          <li>
            <a>Marketplace</a>
          </li>
          <li>
            <a>Resource</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex space-x-5">
        <div className="text-[#C0C0C0] relative">
          <input
            className="border-2 border-gray-header rounded-[100px] w-[300px] pl-6 py-3 text-[16px] font-dmSansMedium"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#757575"
              />
              <path
                d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                fill="#757575"
              />
            </svg>
          </button>
        </div>
        <UploadImage device={SUPPORTED_DEVICE_TYPES.DESKTOP} />
        <CustomConnectButton device={SUPPORTED_DEVICE_TYPES.DESKTOP} />
        <PolkadotConnectButton device={SUPPORTED_DEVICE_TYPES.DESKTOP} />
      </div>
    </div>
  )
}
