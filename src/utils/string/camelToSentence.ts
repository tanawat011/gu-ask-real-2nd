export const camelToSentence = (str: string) => {
  const result = str.replace(/([A-Z])/g, ' $1')
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1)

  if (finalResult[0] === ' ') return finalResult.slice(1)

  return finalResult
}
