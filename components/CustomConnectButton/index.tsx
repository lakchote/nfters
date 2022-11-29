import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount, useConnect, useDisconnect, useSwitchNetwork, useSignMessage } from "wagmi"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"
import Image from "next/image"
import { getCsrfToken, signIn, useSession } from "next-auth/react"
import { SiweMessage } from "siwe"
import { useEffect, useState } from "react"
import { DeviceProps, SUPPORTED_DEVICE_TYPES } from "../../common/types/devices"

export default function CustomConnectButton({ device }: DeviceProps) {
  const { switchNetwork } = useSwitchNetwork()
  const { disconnect } = useDisconnect()
  const { connect } = useConnect()
  const { signMessageAsync } = useSignMessage()
  const { address, isConnected } = useAccount()
  const { data: session } = useSession()
  const [isSigninNeeded, setIsSigninNeeded] = useState<boolean>(false)
  const fallbackChainId = "5"

  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected"
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in to my NFTers app made with love for Ternoa.",
        uri: window.location.origin,
        version: "1",
        chainId: process.env.NEXT_PUBLIC_CHAIN_ID
          ? parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)
          : parseInt(fallbackChainId),
        nonce: await getCsrfToken(),
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      await signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isConnected && !session && isSigninNeeded) {
      handleLogin()
      setIsSigninNeeded(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected])

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
                    onClick={async () => {
                      !isConnected ? await connect({ connector: new MetaMaskConnector() }) : await handleLogin()
                    }}
                  >
                    {device === SUPPORTED_DEVICE_TYPES.DESKTOP ? (
                      "Connect Wallet"
                    ) : (
                      <Image src="/metamask.svg" alt="Connect With Metamask" width={24} height={24} />
                    )}
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={() => switchNetwork?.(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? fallbackChainId))}
                    type="button"
                    className={`${
                      device === SUPPORTED_DEVICE_TYPES.DESKTOP ? "wallet-connect-btn" : "xs-wallet-connect-btn"
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
                      : "xs-wallet-connect-btn ml-[-50px] items-center mt-0.5"
                  }`}
                  onClick={async () => {
                    await disconnect()
                    setIsSigninNeeded(true)
                  }}
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
