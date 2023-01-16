import { hex2rgb } from 'utils/color'

export const twColor = (hexColor: string, type?: 'bg' | 'border' | 'text') => {
  const rgb = hex2rgb(hexColor)

  if (!type) {
    type = 'bg'
  }

  return `rgb(${rgb} / var(--tw-${type}-opacity))`
}
