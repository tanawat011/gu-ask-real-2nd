export const hexToOpacity = (hexOpacity: string) => {
  if (hexOpacity.length > 2) {
    throw new Error('Hex opacity must be between 00 and ff')
  }

  const opacity = parseInt(hexOpacity, 16)

  if (opacity < 0 || opacity > 255 || Number.isNaN(opacity)) {
    throw new Error('Opacity must be between 0 and 255')
  }

  return Math.round((opacity / 255) * 100)
}
