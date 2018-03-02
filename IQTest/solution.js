//Challenge found at: https://www.codewars.com/kata/iq-test/train/javascript

function iqTest(numbers){
    const arrayOfInteger = numbers.split(" ").map( (number) => { return parseInt(number); });
    let odds, evens;
    arrayOfInteger.forEach(function (value, index) {
        if (value % 2 == 0){
            evens.push(value);
        }else{
            odds.push(value);
        }
    });
    return (evens.length > odds.length ? odds[0] : evens[0]);
}