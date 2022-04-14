function reverseWords(phrase){
    const words = phrase.split(' ');
    let reversePhrase = [];
    for (let i = words.length-1; i >= 0; i--) {
        reversePhrase.push(words[i]);
    }
    return reversePhrase;
}

let array = reverseWords("the sky is blue");
console.log(array);