// 1. Is Unique
    //Implement an algorithm to determine if a string has all unique characters.

    //Break it down
        //Ensure that there are no repeated characters in the given string
    //Examples
        //'abcdefg' = true
        //'aabbccddeeffgg' = false
    //Brute Force
        //Nested for loops
            //Iterate over the string
            //Iterate again for each subsequent letter comparing it to the first
            //O(n^2)
        
            const isUnique = (str) => {
                for(let i = 0; i < str.length; i++){
                    for(let j = i + 1; j < str.length; j ++){
                        if (str[i] === str[j]){
                            return false
                        }
                    }
                } return true
            }

    //Frequency Counter
            //create an empty object
            //loop over the string and check if the object contains that character as a key
            //if the key exists, return false the letter is already in the string
            //if the key doesn't exist add it to the object and move to the next character
            //O(n)

            const isUnique = (str) => {
                let counter = {}
                for(let i = 0; i < str.length; i++) {
                    if(counter[str[i]]) {
                        return false
                    } else {
                        counter[str[i]] = 1
                    }
                } return true
            }