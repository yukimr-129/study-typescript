const genericType = () => {
  //ジェネリック型
  // type stringReduce<T> = {
  //     (initialValue: T, ...array: Array<T>): T
  // }
  type stringReduce<T> = (initialValue: T, ...array: Array<T>) => T

  const stringReduce: stringReduce<string> = (initialValue, ...array) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }

    return result
  }

  const res = stringReduce('Profile: ', 'My', ' name', ' is', ' Yuki', 'Tanaka')
  console.log(res)

  type Map<T, U> = (array: Array<T>, fn: (item: T) => U) => Array<U>

  const mapStringToNumber: Map<string, number> = (array, fn) => {
    const result = []
    for (const item of array) {
      result.push(fn(item))
    }

    return result
  }

  const numbers = mapStringToNumber(['12', '34', '56', '78'], (item) => parseInt(item))
  console.log(numbers)
}

export default genericType
