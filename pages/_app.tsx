import "../styles/globals.css"
import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"
import { configureChains, chain } from "@wagmi/core"
import { infuraProvider } from "@wagmi/core/providers/infura"
import { publicProvider } from "@wagmi/core/providers/public"
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets"
import { WagmiConfig, createClient } from "wagmi"
import Header from "../components/Header"
import { RainbowKitProvider, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth"
import { SessionProvider } from "next-auth/react"

const { chains, provider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_PROVIDER_API_KEY ?? "" }), publicProvider()],
)

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [metaMaskWallet({ chains })],
  },
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <SessionProvider refetchInterval={0} session={pageProps.session}>
          <RainbowKitSiweNextAuthProvider>
            <RainbowKitProvider chains={chains}>
              <Header />
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </SessionProvider>
      </WagmiConfig>
      <Component {...pageProps} />
    </>
  )
}
