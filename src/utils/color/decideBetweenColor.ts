import { hex2rgb } from './hex2Rgb'

export const decideBetweenColor = (
  hexColor: string,
  colorOption?: [string, string],
) => {
  const [red, green, blue] = hex2rgb(hexColor).split(' ')
  const [whiteColor = '#fff', blackColor = '#000'] = colorOption || []

  if (+red * 0.299 + +green * 0.587 + +blue * 0.114 > 186) {
    return blackColor
  }

  return whiteColor
}
