const arraySample = () => {
  //配列の型定義
  const colors: Array<string> = ['red', 'white', 'black']
  colors.push('yellow')
  console.log(colors)

  //合併型
  const even: (string | number)[] = [1, 'one', 2, 'two', 3, 'three']
  even.push(4)
  even.push('four')
  console.log(even)

  //配列の型推論
  const generateArray = () => {
    const createArray = []
    createArray.push(true)
    createArray.push('OK')

    return createArray
  }

  const res = generateArray()
  // res.push(10)
  console.log(res)

  //タプル
  const responce: [number, string] = [200, 'OK']

  const code: [number, ...Array<string>] = [100, 'tokyo', 'chiba', 'yokohama']

  //イミュータブルな配列
  const imutableArray1: readonly number[] = [1, 2, 3, 4]
  const imutableArray2: Readonly<number[]> = [1, 2, 3, 4]
  const imutableArray3: ReadonlyArray<number> = [1, 2, 3, 4]
}

export default arraySample
