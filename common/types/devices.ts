export enum SUPPORTED_DEVICE_TYPES {
  "DESKTOP" = "desktop",
  "MOBILE" = "mobile",
}

export type DeviceProps = {
  device: SUPPORTED_DEVICE_TYPES
}
