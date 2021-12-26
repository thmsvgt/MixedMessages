const adjectives = {
    big: ['huge', 'vast', 'out of this world', 'big', 'humungous', 'enormous', 'massive'],
    small: ['tiny', 'minuscule', 'minute', 'sweet', 'cute', 'Lilliputian', 'pathetic', 'insignificant'],
    normal: ['tasty', 'medium-sized', 'not bad', 'average', 'amazing', 'just right', 'uninteresting']
}

// Function to create a random string of 0's and 1's
const createRandomByte = () => {
    const byte = [];
    for (i=1; i<=8; i++) {
        let bit = Math.floor(Math.random()*2);
        byte.push(bit);
    }
    return(byte.join(''));
}

//Function to create a random message based on the arry of bits handed as an argument
const createMessage = (byte) => {
    let comment = '';
    if (byte === '00101010') {
        comment = 'the answer to the ultimate question of life, the universe, and everything';
    } else if (byte === '00000000') {
        comment = 'nada';    
    } else if (byte === '11111111') {
        comment = 'really lucky - you have won the Jackpot';    
    } else if (byte.slice(0,2) === '11') {
        comment = adjectives.big[Math.floor(Math.random()*adjectives.big.length)];
    } else if (byte.slice(0,3) === '000') {
        comment = adjectives.small[Math.floor(Math.random()*adjectives.small.length)];    
    } else {
        comment = adjectives.normal[Math.floor(Math.random()*adjectives.normal.length)];
    }
    return `Your byte of choice is ${byte}, which is ${comment}!`;
}

//Call the createMessage function, using createRandomByte as a callback function
console.log(createMessage(createRandomByte()));