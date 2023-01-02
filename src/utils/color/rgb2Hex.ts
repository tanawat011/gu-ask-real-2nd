const dec2Hex = (value: number) => {
  if (value > 255) {
    return 'ff'
  }

  if (value < 0) {
    return '00'
  }

  return value.toString(16).padStart(2, '0')
}

export const rgb2Hex = (r: number, g: number, b: number) => {
  return '#' + dec2Hex(r) + dec2Hex(g) + dec2Hex(b)
}
