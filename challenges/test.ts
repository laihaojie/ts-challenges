

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

const obj = {
  a: "zhang",
  b: 1
}
const obj1 = {
  a: 1,
  b: 1
}


getProperty(obj, "a")
