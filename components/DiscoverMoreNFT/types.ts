export enum DISCOVER_NFT_SOURCES {
  "DB" = "db",
  "SMART_CONTRACT" = "smart_contract",
}

export type DiscoverNFTSource = {
  source: DISCOVER_NFT_SOURCES
}
