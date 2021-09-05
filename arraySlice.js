
arraySlice = (arr,start, end ) =>{
        
    if(start && end && arr){
        if(end < 0 ){
            end = end + arr.length
        }
        var output = []
        for(var i = start; i < end; i++){
            
            output.push(arr[i])
        }
        return output
    }else{
        if(start < 0){
            start = arr.length + start
        }
        var output = []
        for(var i = start; i < arr.length; i++){
            
            output.push(arr[i])
        }
        return output
    }

}

var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(arraySlice(arr,0, -3));