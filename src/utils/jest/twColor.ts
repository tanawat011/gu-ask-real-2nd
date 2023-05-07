import { hex2Rgb } from 'utils/color'

export const twColor = (hexColor: string, type?: 'bg' | 'border' | 'text') => {
  if (hexColor === 'transparent') {
    return 'transparent'
  }

  if (hexColor.length > 7) {
    return 'undefined'
  }

  const rgb = hex2Rgb(hexColor, { isArray: true }) as string[]

  if (!type) {
    type = 'bg'
  }

  return `rgb(${rgb.join(' ')} / var(--tw-${type}-opacity))`
}
