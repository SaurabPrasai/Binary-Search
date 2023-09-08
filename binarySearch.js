const array=[20,25,38,42,49,57,64,79,86,93] //array must be sorted for binary search

const BinarySearch=(arr,n,key)=>{
let l=0,r=n-1;
while(l<r){   
    let mid=Math.floor((l+r)/2);
    if(key===arr[mid]){
        return mid;
    }
    else if(key<arr[mid]){
        r=mid-1;
    }
    else{
        l=mid+1;
    }
}
return -1;
}

const index=BinarySearch(array,array.length,79);
if(index==-1){
    console.log("Element not found!")
}else{
    console.log(`${array[index]} is found at position ${index}`)
}

//The complexity of binary search is O(logn) in worst case.