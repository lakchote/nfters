import { ApiPromise, WsProvider } from "@polkadot/api"
import Image from "next/image"
import { useEffect, useState } from "react"
import { DeviceProps, SUPPORTED_DEVICE_TYPES } from "../../common/types/devices"
import truncateStr from "../../utils/truncateStr"
import { PolkadotAccount } from "./types"

export default function PolkadotConnectButton({ device }: DeviceProps) {
  const [account, setAccount] = useState<PolkadotAccount | false>(false)

  const disconnect = () => {
    setAccount(false)
    window.localStorage.removeItem("polkadot_address")
    window.localStorage.removeItem("polkadot_balance")
  }

  const connect = async () => {
    const provider = new WsProvider(process.env.NEXT_PUBLIC_POLKADOT_WSS)
    const api = await ApiPromise.create({ provider })
    const { web3Accounts, web3Enable } = await import("@polkadot/extension-dapp")
    const extensions = await web3Enable("NFTers")
    if (extensions.length === 0) {
      console.error("You need to install the Polkadot.js extension")
    }

    const allAccounts = await web3Accounts()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await api.query.system.account(allAccounts[0].address, (balance: any) => {
      setAccount({ address: allAccounts[0].address, balance: balance.data.free.toHuman() })
    })
  }

  useEffect(() => {
    if (
      window.localStorage.getItem("polkadot_address") !== "undefined" &&
      window.localStorage.getItem("polkadot_balance") !== "undefined"
    ) {
      setAccount({
        address: window.localStorage.getItem("polkadot_address") ?? "undefined",
        balance: window.localStorage.getItem("polkadot_balance") ?? "undefined",
      })
    }
  }, [])

  useEffect(() => {
    if (account) {
      window.localStorage.setItem("polkadot_address", account.address)
      window.localStorage.setItem("polkadot_balance", account.balance)
    }
  }, [account])

  return (
    <div>
      {!account || account?.address === "undefined" ? (
        <button onClick={() => connect()}>
          <Image
            src="/polkadot.svg"
            alt="Connect With Polkadot"
            width={25}
            height={25}
            className={`${device === SUPPORTED_DEVICE_TYPES.MOBILE ? "w-[18px] h-[18px] mt-1" : ""}`}
          />
        </button>
      ) : (
        <div className={`${device === SUPPORTED_DEVICE_TYPES.MOBILE ? "text-xs ml-[-50px] w-0" : "text-sm"}`}>
          {truncateStr(account.address, 8)} - {account.balance} DOT{" "}
          <a className="cursor-pointer text-accent" onClick={() => disconnect()}>
            Disconnect
          </a>
        </div>
      )}
    </div>
  )
}
