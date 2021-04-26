//Given two strings write a method to determine if one is a permutation of the other

    //Check if one string has the same characters in any order as another string
    //'abcdefg', 'gfedcba' = true
    //'abcdefg', 'abc' = false

    
    //Frequency Counter
    const checkPermuatation = (str1, str2) => {
        if (str1.length !== str2.length) {
            return false
        }
        
        let counter1 = {}
        let counter2 = {}

        for(let i = 0; i < str1.length; i ++) {
            if (!counter1[str1[i]]){
                counter1[str1[i]] = 1
            } counter1[str1[i]] + 1 
        }

        for(let i = 0; i < str2.length; i++) {
          console.log(counter1, counter2)
            if (!counter2[str2[i]]) {
                counter2[str2[i]] = 1
            } counter2[str2[i]] + 1
         }

         for(let key in counter1) { 
           if (counter1[key] !== counter2[key]){
            return false
           }
        return true
         }
    }

    //Sorting
        //convert strings to arrays, sort the array, rejoin and compare
    const checkPermutation = (str1, str2) => {
        if (str1.length !== str2.length) {
          return false
        }

        let sort1 = str1.split('').sort().join(',')
        let sort2 = str2.split('').sort().join(',')
        
        console.log(sort1, sort2)

        return sort1 === sort2
    }
