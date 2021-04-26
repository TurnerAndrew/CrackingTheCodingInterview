//There are three types of edits that can be performed on strings: insert a char, remove a char, or replace a char.  Given two strings, write a function to check if they are one edit(or zero edits) away.

    //pale, ple = true
    //pales, pale = true
    //pale, bale = true
    //pale, bake = false

//check length of strings - if more than one character shorter or longer return false
//store the characters of each string in an object
//compare objects - if they have more than one character different, return false

const oneAway = (str1, str2) => {
    if (str1.length > str2.length + 1 || str1.length < str2.length - 1) {
        return false
    }

    let counter1 = {}
    let counter2 = {}

    for(let i = 0; i < str1.length; i++) {
        if(!counter1[str1[i]]) {
            counter1[str1[i]] = 1
        } counter1[str1[i]] + 1
    }

    for (let i = 0; i < str2.length; i++){
        if(!counter2[str2[i]]) {
            counter2[str2[i]] = 1
        } counter2[str2[i]] + 1
    }

    console.log(counter1, counter2)
}
