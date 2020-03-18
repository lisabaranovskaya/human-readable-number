module.exports = function toReadable(number) {
    let words = [
        [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ]

    return hundreds(number).trim();

    function hundreds(number) {
        if (number === 0) {
            return 'zero';
        } else if (number >= 100) {
            return words[0][Math.floor(number / 100)] + ' hundred' + " " + dozens(Math.floor(number % 100));
        }
        else {
            return dozens(number);
        }
    }

    function dozens(number) {
        if (number < 10) {
            return words[0][number]
        } else if (number <= 99 && number >= 20) {
            return words[2][Math.floor(number / 10)] + unit(number);
        } else {
            return words[1][number - 10];
        }
    }

    function unit(number) {
        if (!number % 10) {
            return;
        } else {
            return ' ' + words[0][number % 10];
        }
    }

}

