export type KeyOf<T> = keyof Record<keyof T, string>

export type ObjectKeyOf<T, K = unknown> = { [key in KeyOf<T>]: K }
