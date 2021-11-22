const fn = (v: boolean) => v ? 1 : 2

type A = typeof fn

const a: A = () => 1