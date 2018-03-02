//See this Kata here: https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
    var charArray = str.toLowerCase().split('');

    const ohs = charArray.filter(char => char == 'o');
    const exes = charArray.filter(char => char == 'x');

    if(ohs.length == exes.length){
        return true;
    }
    return false;
}