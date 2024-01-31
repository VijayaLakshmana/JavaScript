const myMap=new Map()
myMap.set('name','vijay')
myMap.set('age',22)
console.log(myMap)
console.log(myMap.get('name'))
myMap.set('name','ram')
console.log(myMap)
myMap.set('dept','cse')
console.log(myMap)
myMap.delete('age')
console.log(myMap)
const obj={}
myMap.set(obj,'hello')
console.log(myMap)
console.log(myMap.get(obj))
myMap.set('object',{name:'krishna',age:23})
console.log(myMap.get('object').name)

const mySet=new Set()
mySet.add("vijay")
mySet.add("raj")
mySet.forEach(value=>console.log(value))


