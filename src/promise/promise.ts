const promiseSample = () => {
  type FetchPromise = () => Promise<Array<string> | null>

  const url = 'https://api.github.com/users/yukimr-129'

  const asyncFunctionSample: FetchPromise = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          const array: Array<string> = []
          array.push(data.login)
          array.push(data.id)
          array.push(data.url)

          console.log(data)
          resolve(array)
        })
        .catch((e) => {
          console.log('error')

          reject(null)
        })
    })
  }

  asyncFunctionSample()
    .then((result) => {
      console.log(result)
    })
    .catch((e) => {
      console.log(e)
    })
}

export default promiseSample
