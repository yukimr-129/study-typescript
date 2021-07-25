//オプションパラメータの関数
export const isUserSignedIn = (userid: string, username?: string): boolean => {
  if (userid === 'testuser') {
    console.log('Function parameters Sample 1: user signed in username is', username)
    return true
  } else {
    console.log('Function parameters Sample 2: user not signed in')
    return false
  }
}

//デフォルトパラメータの関数
export const isUserSignedIn2 = (userid: string, username = 'No Name'): boolean => {
  if (userid === 'testuser') {
    console.log('Function parameters Sample 3: user signed in username is', username)
    return true
  } else {
    console.log('Function parameters Sample 4: user not signed in')
    return false
  }
}

//レストパラメーターの関数
export const sumTaxInPrice = (tax: number, ...prices: Array<number>): Array<number> => {
  const taxInPrice = prices.map((price) => {
    const taxIn = price + tax * price
    console.log(`￥${price}の税込価格は￥${taxIn}です`)
    return taxIn
  })
  return taxInPrice
}

//型シグネチャ → 関数の引数の数、引数のデータ型、戻り値の型を予め定義したもの
//完全な記法はオブジェクトの定義と同じ形
type logMessage = {
  (messsage: string): void
}
//省略記法はアロー関数と似た形
type isOver30 = (age: number) => boolean

type restParametersOfType = (...num: Array<number>) => Array<number>

const logMessage: logMessage = (messsage) => {
  console.log(messsage)
}
const isOver30: isOver30 = (age) => {
  return age >= 30 ? true : false
}

export const restParameters: restParametersOfType = (...num) => {
  console.log(num)
  return num
}
