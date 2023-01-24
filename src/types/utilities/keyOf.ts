export type KeyOf<T> = keyof Record<keyof T, string>

export type ObjectKeyOf<T, K> = { [key in KeyOf<T>]: K }
