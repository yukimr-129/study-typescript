const anySample = () => {
  let name: any = 'Yuki'
  console.log('any sample 1:', typeof name, name)

  name = 28 // number型を再代入できる
  console.log('any sample 2:', typeof name, name)
}

export default anySample
