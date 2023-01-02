import { hex2rgb } from 'utils/color'

export const twColor = (hexColor: string) => {
  const rgb = hex2rgb(hexColor)

  return `rgb(${rgb} / var(--tw-bg-opacity))`
}
