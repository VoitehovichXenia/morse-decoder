const MORSE_TABLE = {
    '.-':     'a', 
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let decoded = expr.split('**********');

    decoded = decoded.map( (word) => {
        let newWord = '';

        for (let i = 0; i < word.length; i = i + 10) {
            let morse = '';
            let letter = word.slice(i, i+10);

            for (let k = letter.length-1; k >= 0; k = k - 2) {
            
                if ((letter[k-1] + letter[k]) === '11') {
                    morse = '-' + morse;
                }
                if ((letter[k-1] + letter[k]) === '10') {
                    morse = '.' + morse;
                }      
            }

            newWord += MORSE_TABLE[morse];
        }
        
        return newWord;
    });
        
    return decoded.join(' ');
}

module.exports = {
    decode
}