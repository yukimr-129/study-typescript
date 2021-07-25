//void
//アロー関数
export const logMessage = (message: string): void => {
  console.log('Function Basic Sample 1:', message)
}

//名前付関数
export function logMessageSecond(message: string): void {
  console.log('Function Basic Sample 2:', message)
}

//関数式
export const logMessageThird = function (message: string): void {
  console.log('Function Basic Sample 3:', message)
}

//never
// export const alwaysThrowError = (message: string): never => {
//     throw new Error(message)
// }
