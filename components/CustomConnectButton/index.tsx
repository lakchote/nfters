import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useConnect, useDisconnect, useSwitchNetwork } from "wagmi"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"
import { CustomConnectButtonProps, SUPPORTED_DEVICE_TYPES } from "./types"
import Image from "next/image"

export default function CustomConnectButton({ device }: CustomConnectButtonProps) {
  const { switchNetwork } = useSwitchNetwork()
  const { disconnect } = useDisconnect()
  const { connect } = useConnect()
  const fallbackChainId = "5"

  return (
    <ConnectButton.Custom>
      {({ account, chain, mounted, authenticationStatus }) => {
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated")

        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className={`${
                      device === SUPPORTED_DEVICE_TYPES.DESKTOP ? "wallet-connect-btn" : "xs-wallet-connect-btn"
                    }`}
                    onClick={async () => await connect({ connector: new MetaMaskConnector() })}
                  >
                    {device === SUPPORTED_DEVICE_TYPES.DESKTOP ? (
                      "Connect Wallet"
                    ) : (
                      <Image src="/metamask.svg" alt="Connect With Metamask" width={24} height={24} />
                    )}
                  </button>
                )
              }

              if (chain?.unsupported) {
                return (
                  <button
                    onClick={() => switchNetwork?.(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? fallbackChainId))}
                    type="button"
                    className={`${
                      device === SUPPORTED_DEVICE_TYPES.DESKTOP
                        ? "wallet-connect-btn"
                        : "xs-wallet-connect-btn ml-[-85px]"
                    }`}
                  >
                    Switch Network
                  </button>
                )
              }

              return (
                <button
                  className={`${
                    device === SUPPORTED_DEVICE_TYPES.DESKTOP
                      ? "wallet-connect-btn"
                      : "xs-wallet-connect-btn ml-[-50px]"
                  }`}
                  onClick={async () => await disconnect()}
                >
                  {account?.displayBalance}
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
