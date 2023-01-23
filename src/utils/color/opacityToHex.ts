export const opacityToHex = (opacity: number) => {
  if (opacity < 0 || opacity > 100) {
    throw new Error('Opacity must be between 0 and 100')
  }

  let _tempOpacity = opacity

  if (_tempOpacity > 1) {
    _tempOpacity = opacity / 100
  }

  return Math.round(_tempOpacity * 255)
    .toString(16)
    .padStart(2, '0')
}
