function findMultiples(integer, limit) {
  const arr = [];
  for (let i = 0; i <= limit; i+=integer) {
    arr.push(i)
  }
  arr.shift()
  return arr
}
console.log(findMultiples(10,50))

function removeEveryOther(arr){
  const newArray = arr.filter((element,index) => {
    if(index % 2 === 0) {
      return element
    }
  })
  return newArray
}
// function removeEveryOther(arr){
//   return arr.filter((e,i) => i % 2 === 0)
// }
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function removeEveryOther2(arr){
  const array = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if(i % 2 === 0) {
      array.push(arr[i])
    }
  }
  // arr.forEach((e,i) => {
  //   if(i % 2 === 0) array.push(e)
  // })
  return array
}
console.log(removeEveryOther2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function getAge(inputString){
  return Number(inputString[0])
  // return Number(inputString.charAt(0)) 
  // const palabras = inputString.split(' ')
  // return Number(palabras[0])
  // return inputString.substring(0,1)
}
console.log(getAge("4 years old"))









