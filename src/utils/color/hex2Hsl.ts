export const hex2Hsl = (
  hex: string,
  option?: { isArray?: boolean; opacity?: number },
) => {
  let r = 0
  let g = 0
  let b = 0

  let rStr = `0x${hex[1]}${hex[1]}`
  let gStr = `0x${hex[2]}${hex[2]}`
  let bStr = `0x${hex[3]}${hex[3]}`

  if (hex.length >= 7) {
    rStr = '0x' + hex.slice(1, 3)
    gStr = '0x' + hex.slice(3, 5)
    bStr = '0x' + hex.slice(5, 7)
  }

  // Then to HSL
  r = +rStr / 255
  g = +gStr / 255
  b = +bStr / 255

  let tempOpacity = ''

  if (hex.length > 7) {
    tempOpacity = `${(parseInt('0x' + hex.slice(7, 9)) / 255).toFixed(2)}`
  }

  const cMin = Math.min(r, g, b)
  const cMax = Math.max(r, g, b)
  const delta = cMax - cMin

  let h = 0
  let s = 0
  let l = 0

  if (delta === 0) h = 0
  else if (cMax === r) h = ((g - b) / delta) % 6
  else if (cMax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cMax + cMin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  const opacity = option?.opacity || tempOpacity
  const hslOpacity = hex.length > 7 || option?.opacity ? [opacity] : []
  const hslFormat = [`${h}`, `${s}%`, `${l}%`, ...hslOpacity]

  if (option?.isArray) return hslFormat

  if (opacity) return `hsla(${hslFormat.join(', ')})`

  return `hsl(${hslFormat.join(', ')})`
}
