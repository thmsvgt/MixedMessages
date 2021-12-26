const mixedMessage = {
    _big: ['huge', 'vast', 'out of this world', 'big', 'humungous', 'enormous', 'massive'],
    _small: ['tiny', 'minuscule', 'minute', 'sweet', 'cute', 'Lilliputian', 'pathetic', 'insignificant'],
    _normal: ['tasty', 'medium-sized', 'not bad', 'average', 'amazing', 'just right', 'uninteresting'],
    get big() {
        return this._big;
    }, 
    set big(string) {
        this._big.push(string);
    }, 
    get small() {
        return this._small;
    }, 
    set small(string) {
        this._small.push(string);
    }, 
    get normal() {
        return this._normal;
    },
    set normal(string) {
        this._normal.push(string);
    }, 
    createMessage (byte) { 
        //Function to create a random message based on a string of bits handed as an argument
        let comment = '';
        if (typeof byte !== 'string' || byte.length !== 8) {
            comment = 'is not the string of 8 bits we were hoping to see';
        } else if (byte === '00101010') {
            comment = 'the answer to the ultimate question of life, the universe, and everything';
        } else if (byte === '00000000') {
            comment = 'nada';    
        } else if (byte === '11111111') {
            comment = 'really lucky - you have won the Jackpot';    
        } else if (byte.slice(0,2) === '11') {
            comment = this._big[Math.floor(Math.random()*this._big.length)];
        } else if (byte.slice(0,3) === '000') {
            comment = this._small[Math.floor(Math.random()*this._small.length)];    
        } else {
            comment = this._normal[Math.floor(Math.random()*this._normal.length)];
        }
        return `Your byte of choice is ${byte}, which is ${comment}!`;
    }
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

//Call the createMessage function, using createRandomByte as a callback function
console.log(mixedMessage.createMessage(createRandomByte()));