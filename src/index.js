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
    let length = expr.length;
    let i = 0;
    let decodedString = '';

    while (i < length) {
        let currentTen = expr.substr(i, 10);
        if (currentTen.startsWith('*')) {
            decodedString += ' ';
        } else {
            while(currentTen.indexOf(0) == '0') {
              currentTen = currentTen.substring(1);
              }
            let currentSymbol = '';
            let j = 0;
            while (j < currentTen.length) {
                if (currentTen.substr(j, 2) === '10') {
                    currentSymbol += '.';
                } else {
                    currentSymbol += '-';
                }
                j += 2;
                };
              decodedString += MORSE_TABLE[currentSymbol];
        };
        i += 10;
    };

    return decodedString;
}

module.exports = {
    decode
}