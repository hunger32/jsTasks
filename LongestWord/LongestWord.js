/*Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"*/


function LongestWord(sen) {
    
    if (typeof sen !== "string") return "Wrong type";
    let senSplit = sen.split(" ");
    
    for (let i in senSplit){
        senSplit[i] = senSplit[i].replace(/\W/g, '');
    }
    
    let longest = 0;
    let longWord = "";
    for (let k in senSplit){
        if (senSplit[k].length > longest){
            longest = senSplit[k].length;
            longWord = senSplit[k];
        }
    }
    
    return longWord; 
}
   
// keep this function call here 
console.log(LongestWord(readline()));