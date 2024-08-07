export function wait<T>(ms: number, value: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
