const typeAliasSample = () => {
  //型エリアス
  type Countory = {
    name: string
    age: number
    language: string
    birthday?: number
    readonly postrcode: number
  }

  const countory: Countory = {
    name: 'yukimr',
    age: 30,
    language: 'Japanese',
    postrcode: 1200001,
  }
  countory.birthday = 199930129
  console.log(countory)

  //合併型（union）, 交差型（intersection）
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  //合併型（union） Knight or Wizardの型を持つ
  type Adventurer = Knight | Wizard

  //交差型（intersection） Knight & Wizardの型を持つ
  type Paradin = Knight & Wizard

  //合併型（union）
  //※お互いのプロパティを持つことができてしまう
  const adventurerKnight: Adventurer = {
    hp: 100,
    sp: 30,
    mp: 50, //※ Wizardのプロパティ
    weapon: '大剣',
    swordSkill: '連続斬り',
  }

  const adventurerWizard: Adventurer = {
    hp: 100,
    mp: 50,
    sp: 30, //※ Knightのプロパティ
    weapon: '魔法の杖',
    magicSkill: 'ザオリク',
  }
  console.log(adventurerKnight)
  console.log(adventurerWizard)

  //交差型（intersection）
  //必ずお互いの型が持つプロパティを含む必要がある
  //どちらかの型のプロパティで?(オプショナル)使用していた場合は、あってもなくても良い
  const paradin: Paradin = {
    hp: 500,
    sp: 200,
    mp: 50,
    weapon: 'エクスカリバー',
    swordSkill: '連続斬り',
    magicSkill: 'ザラキ',
  }

  console.log(paradin)
}

export default typeAliasSample
