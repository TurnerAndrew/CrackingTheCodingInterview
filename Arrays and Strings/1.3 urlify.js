//Write a method to convert all spaces in a string to %20
    //Mr John Smith = Mr%20John%20Smith

    const urlify = (str) => {
        let url = []
        let strArr = str.split('')
        for(let i = 0; i < strArr.length; i++) {
            if (strArr[i] === ' ') {
                url.push('%20')
            } else url.push(str[i])
        } return url.join('')
    }
    
    urlify('Mr John Smith')
