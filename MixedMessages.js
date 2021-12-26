// Function to create a random string of 0's and 1's
const createRandomByte = () => {
    const byte = [];
    for (i=1; i<=8; i++) {
        let bit = Math.floor(Math.random()*2);
        byte.push(bit);
    }
    return(byte.join(''));
}


//Function to create a random message based on the byte handed as an argument
const createMessage = (byte) => {

}





console.log(createRandomByte());

