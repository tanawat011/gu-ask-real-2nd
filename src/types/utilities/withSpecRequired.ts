/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * * Continue to develop from
 * ! https://www.typescriptlang.org/play?#code/C4TwDgpgBAIhFgEoQI4FcCWAnCATAPACoA0UAClBAB7AQB2uAzlI8FhnQOYDaAugHxQAvFEKUa9JlAD2AIwBWEAMbAAUFCgB+KAAoA8gFsMwIqQCiNLAEMV+ANYQQ0gGajSZbgAYBggGTqNKGR0bDx8AMCoAG8IyKhuAGkoDigLNhsTBydXEnIvAV4ALigAOWk6ErQAGyqrWSqIcLi4uARgzBwCQkTeUgBlAAsMZ2AAVToMcvwE935+WMj55oBfWP4ASgDiwgBuVVVQSChB4ZMxaloGZis6ED5BER0dADpX4G314UEbkE+LyWYTwCzmwrGKP2IAVezxwYOSdGcECwQQgrFUnyE31umw02mQaI0xToEAAbki9gdwNATiNxpM6PgKP8ruQsNJIFhQAlHKRzhIWT97sJROJLlJBbwAtput5RQDyFpjkMRkRBETSUitlBiWSsBTDtALFYDGAGsKYhoDFYOMULYEwFZgANNMVWOwuLEAPq2hZQAbSAwQH3NDQOp0ulhsDicX2rZqYYMhsPO11Rj0hqDe6K+yIcMBoYARu0Z0OOlOR90xkuBLPF6tQWQF4DlRP1+1liNu6M5kNxtsNpvlADibLQYFb-eTnbTVf7fbbtBoADEMBAqrgJ22p6nKz2VnvAvPez2jxoj33VqtKUdWkhUB08EaTWaRLf2qECAEn6aIJCNNwACIrQ4ADSAAz1QKgAD-UDSCAOTADeCgAAfeIgOtOg4IgsCYIgOCEKQ1DAOAzCwOwqDMCwuC8wLfCy0QlC0JIqiwMosjqLofNgBYqDG2AZtSKggjVH4CklHKVhxGKN97w-b8X2zS0MInZNigAcgAejUv8a03P0AyDRSkzLdSNNwtTYx0yIEyM5pVKgTTMG0ntawPGj3lskt7McjANPc5y21c-sB34ltPK3EyHI0zA-M4gsNL4gSLOC5YrPrRLh1Hcdwvrbzot89yEsHOhkrnNLq0XYAVzXDccurPKYsKjKSoPSJT2Pat2rPWNYgvVRlgpahnhI55PWeXDnmTVQhpGsbMFG553MmstpqoYaMIW+axqWsbmuWp1VvWjhNowBadueSrqvXfaBn2cS6EYaQGmeKppE4HRqE2IA
 */

type Shift<T extends any[]> = ((...t: T) => any) extends (
  first: any,
  ...rest: infer Rest
) => any
  ? Rest
  : never

type ShiftUnion<P extends PropertyKey, T extends any[]> = T extends any[]
  ? T[0] extends P
    ? Shift<T>
    : never
  : never

export type WithSpecRequired<T, P extends string[]> = T extends object
  ? Omit<T, Extract<keyof T, P[0]>> &
      Required<{
        [K in Extract<keyof T, P[0]>]: NonNullable<
          WithSpecRequired<T[K], ShiftUnion<K, P>>
        >
      }>
  : T
