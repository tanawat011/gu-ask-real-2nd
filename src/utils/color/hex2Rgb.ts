const fullHex = (hex: string) => {
  const strR = hex.slice(1, 2)
  const strG = hex.slice(2, 3)
  const strB = hex.slice(3, 4)

  const r = parseInt(strR + strR, 16)
  const g = parseInt(strG + strG, 16)
  const b = parseInt(strB + strB, 16)

  return `${r} ${g} ${b}`
}

export const hex2rgb = (hex: string) => {
  if (hex.length === 4) {
    return fullHex(hex)
  }

  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `${r} ${g} ${b}`
}
