export const hex2Rgb = (
  hex: string,
  option?: { isArray?: boolean; opacity?: number },
) => {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  if (hex.length === 4) {
    const strR = hex.slice(1, 2)
    const strG = hex.slice(2, 3)
    const strB = hex.slice(3, 4)

    r = parseInt(strR + strR, 16)
    g = parseInt(strG + strG, 16)
    b = parseInt(strB + strB, 16)
  }

  let tempOpacity = ''

  if (hex.length > 7) {
    tempOpacity = `${(parseInt('0x' + hex.slice(7, 9)) / 255).toFixed(2)}`
  }

  const opacity = option?.opacity || tempOpacity
  const rgbOpacity = hex.length > 7 || option?.opacity ? [opacity] : []
  const rgbFormat = [`${r}`, `${g}`, `${b}`, ...rgbOpacity]

  if (option?.isArray) return rgbFormat

  if (opacity) return `rgba(${rgbFormat.join(', ')})`

  return `rgb(${rgbFormat.join(', ')})`
}
