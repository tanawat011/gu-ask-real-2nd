import { opacity2Hex } from './opacity2Hex'

const dec2Hex = (value: number) => {
  if (value >= 255) {
    return 'ff'
  }

  if (value <= 0) {
    return '00'
  }

  return value.toString(16).padStart(2, '0')
}

export const rgb2Hex = (
  rgb: string,
  option?: { isArray?: boolean; opacity?: number },
) => {
  let rgbNum = rgb
    .slice(4, -1)
    .split(',')
    .map((num) => parseFloat(num))

  if (rgb.includes('rgba')) {
    rgbNum = rgb
      .slice(5, -1)
      .split(',')
      .map((num) => parseFloat(num))
  }

  const [r, g, b, o] = rgbNum

  const tempOpacity = o || 0

  const opacity = option?.opacity || tempOpacity
  const hexOpacity = o || option?.opacity ? [opacity2Hex(opacity)] : []
  const hexFormat = [dec2Hex(r), dec2Hex(g), dec2Hex(b), ...hexOpacity]

  if (option?.isArray) return hexFormat

  if (opacity) return `#${hexFormat.join('')}`

  return `#${hexFormat.join('')}`
}
