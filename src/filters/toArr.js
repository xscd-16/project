export const  toArr =function(obj){
    let arr=[]
    for(let key in obj){
        arr.push(arr[key])
    }
    console.log(arr)
    return arr
}