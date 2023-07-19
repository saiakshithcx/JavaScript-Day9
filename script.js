function zeroesToEnd(arr) {
    let nextNonZeroIndex = 0;
    
    for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
      if (arr[currentIndex] !== 0) {
        [arr[currentIndex], arr[nextNonZeroIndex]] = [arr[nextNonZeroIndex], arr[currentIndex]];
        nextNonZeroIndex++;
      }
    }
    
    return arr;
  }
  
  // Test cases
  console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); 
  console.log(zeroesToEnd([0, 0, 2, 0, 5]));    
  console.log(zeroesToEnd([4, 4, 5]));          
  console.log(zeroesToEnd([0, 0]));             
  