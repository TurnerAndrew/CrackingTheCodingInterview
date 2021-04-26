//Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or phrase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  The palindrome does not need to be limited to dictionary words.  Ignore casing and non-letter characters.

//count the characters
    //palindromes can only have one character with an odd count

    const palindrome = (str) => {
        let charCount = {}
    
        for(let i = 0; i < str.length; i++){
            if(!charCount[str[i]]) {
                charCount[str[i]] = 1
            } else charCount[str[i]] ++
          }
    
        console.log(charCount)
    }
    
