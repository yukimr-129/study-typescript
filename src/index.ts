import World from './world'
import { unknownSample, anySample } from './basic'
import { logMessage, logMessageSecond, logMessageThird } from './function/basicFunction'
import { isUserSignedIn, isUserSignedIn2, sumTaxInPrice, restParameters } from './function/parameters'
import objectSample from './object/object-type'
import typeAliasSample from './object/alias'

// const root = document.getElementById('root')
// const world = new World('Hello Yuki!!!')
// world.sayHello(root)
unknownSample()
anySample()
logMessage('Hello Typescript')
logMessageSecond('Hello Typescript')
logMessageThird('Hello Typescript')
// alwaysThrowError('エラーです')
isUserSignedIn('testuse', 'Yukimr')
isUserSignedIn('testuser')
isUserSignedIn2('testuser')
sumTaxInPrice(0.1, 1000, 2000, 3000, 4000, 5000, 6000)
const res = restParameters(100, 200, 300, 400, 500, 600, 700, 800)
console.log(res)

objectSample()
typeAliasSample()
