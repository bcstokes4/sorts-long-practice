function ageSort(users) {
//[30, 25, 32, 55]
  users.sort( (a, b) => {
    return a.age - b.age
  })
  return users
}
//if its odd, num goes on left side
//if its even, num goes on right side
//else
function oddEvenSort(arr) {

 return arr.sort( (a,b) => {
    if(a % 2 !== 0 && b % 2 === 0 )  return -1//if a is odd and b is even   a, b
    if(a % 2 === 0 && b % 2 !== 0) return 1  //if a is even and b is odd    b, a
    else return a-b
  })
}
//let s = "anagram";
// let t = "nagaram";
function validAnagrams(s, t) {
  let lettersS = s.split('')
  let lettersT = t.split('')

lettersS.sort()
lettersT.sort()
let newWordS = lettersS.join()
let newWordT = lettersT.join()

return newWordS === newWordT

}//a: 100  b: 101
//if Math.floor(a/10) === Math.floor(b/10)
function reverseBaseSort(arr) {

  return arr.sort( (a,b) => {
    // console.log()
    if(Math.floor(Math.log10(a)) === Math.floor(Math.log10(b))) return a - b
    if(Math.floor(Math.log10(a)) > Math.floor(Math.log10(b))) return -1
    // else return 0
  })
}

function frequencySort(arr) {

  const counts = {}; //{ '1': 2, '2': 3, '3': 1 }

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
return arr.sort( (a,b) => {

    if(counts[a] > counts[b]) return 1
    if(counts[b] >counts[a]) return -1
t 
    return b - a
  })
}



module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
