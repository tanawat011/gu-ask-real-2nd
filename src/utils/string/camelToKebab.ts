export const camelToKebab = (str: string) => {
  if (str !== str.toLowerCase()) {
    str = str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
  }

  return str
}
