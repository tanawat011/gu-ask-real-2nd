import { lowerAllKeys } from './lowerAllKeys'

describe('utils/object', () => {
  test('lowerAllKeys', () => {
    expect.assertions(1)
    expect(lowerAllKeys({ Key: 'xxx' })).toEqual({ key: 'xxx' })
  })
})
