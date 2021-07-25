const objectSample = () => {
  // let cuntory: {
  //     name: string
  //     age: number
  //     language: string
  // } = {
  //     name: 'Yukimr',
  //     age: 30,
  //     language: 'Japanese'
  // }

  //型エイリアス
  type cuntory = {
    name: string
    age: number
    language: string
  }

  const cuntory: cuntory = {
    name: 'Yukimr',
    age: 30,
    language: 'Japanese',
  }
  console.log(cuntory.name)
  console.log(cuntory.language)

  //特別なプロパティ
  //readonly → 読み込み専用 プロパティ値の更新は不可
  //? → オプショナル あってもなくてもいいプロパティ
  const yukimr: {
    name: string
    age: number
    gender: string
    birthday?: number
    readonly postrcode: number
  } = {
    name: 'yuki',
    age: 30,
    gender: 'Men',
    postrcode: 1000001,
  }

  yukimr.birthday = 19940101
  // yukimr.postrcode = 19940101 ← エラーになる
  console.log(yukimr)

  //インデックスシグネチャ
  //[Key: T]: U
  //[プロパティ: プロパティのデータ型（string OR numbeのみ）]: プロパティ値のデータ型
  const capitals: {
    [propName: string]: string
  } = {
    Japan: 'Tokyo',
    America: 'New York',
    Canada: 'Ottawa',
    England: 'London',
  }

  console.log(capitals)

  //型エイリアス
}

export default objectSample
