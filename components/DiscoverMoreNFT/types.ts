export enum DISCOVER_NFT_SOURCES {
  "DB" = "db",
  "SMART_CONTRACT" = "smart_contract",
}

export type DiscoverNFTProps = {
  source: DISCOVER_NFT_SOURCES
  showBidding: boolean
}
