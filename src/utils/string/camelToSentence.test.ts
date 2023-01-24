import { camelToSentence } from './camelToSentence'

describe('utils/string', () => {
  test('camelToSentence', () => {
    expect.assertions(4)

    expect(camelToSentence('camelToSentence')).toBe('Camel To Sentence')
    expect(camelToSentence('camel')).toBe('Camel')
    expect(camelToSentence('sentence')).toBe('Sentence')
    expect(camelToSentence('Sentence')).toBe('Sentence')
  })
})
