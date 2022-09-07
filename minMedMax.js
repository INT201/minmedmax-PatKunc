const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  // let num = [n1,n2,n3]
  // let sort = num.sort((a,b)=>a-b)
  // return sort
  // var obj = {min:n1,med:n2,max:n3}
  // let num = obj
  // switch(num){
  //   case n1 < n2 || n1 < n3 || n2 < n3: 
  //    obj = {min:n1,med:n2,max:n3}
  //         break
  //   case n1 < n2 || n1 < n3 || n3 < n2: 
  //    obj = {min:n1,med:n3,max:n2}
  //         break
  //   case n2 < n1 || n2 < n3 || n3 < n1: 
  //    obj = {min:n2,med:n3,max:n1}
  //         break
  //   case n2 < n1 || n2 < n3 || n1 < n3: 
  //    obj = {min:n2,med:n1,max:n3}
  //         break
  //   case n3 < n1 || n3 < n2 || n2 < n1: 
  //    obj = {min:n3,med:n2,max:n1}
  //         break
  //   case n3 < n1 || n3 < n2 || n1 < n2: 
  //    obj = {min:n3,med:n1,max:n2}
  // }
  // return obj
  if (n1 < n2 && n1 < n3 && n2 < n3) {
    return obj = {min:n1,mid:n2,max:n3}
  }else if(n1 < n2 && n1 < n3 && n3 < n2){
    return obj = {min:n1,mid:n3,max:n2}
  }else if(n2 < n1 && n2 < n3 && n3 < n1){
    return obj = {min:n2,mid:n3,max:n1}
  }else if(n2 < n1 && n2 < n3 && n1 < n3){
    return obj = {min:n2,mid:n1,max:n3}
  }else if(n3 < n1 && n3 < n2 && n2 < n1){
    return obj = {min:n3,mid:n2,max:n1}
  }else if(n3 < n1 && n3 < n2 && n1 < n2){
    return obj = {min:n3,mid:n1,max:n2}
  }
}
//
module.exports = minMedMax
