export enum SUPPORTED_DEVICE_TYPES {
  "DESKTOP" = "desktop",
  "MOBILE" = "mobile",
}

export type CustomConnectButtonProps = {
  device: SUPPORTED_DEVICE_TYPES
}
