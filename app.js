// NPM conatins a lot of modules/packages/dependcies that u can use in your project 
// NPM (Package JSON) for sharing the code / project with other devlopers  
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItem=_.flattenDeep(items)
console.log(newItem)