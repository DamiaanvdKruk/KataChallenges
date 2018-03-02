//https://www.codewars.com/kata/magic-the-gathering-number-2-mana
//THIS CODE IS NOT WORKING: It almost perfectly works except it does not convert the Colourless int into value properly
//Will be fixed later
//Error description: If colorless int is 20, it'll add 2 and 0 rather than 20.

var manaArr = [['B', 0],['G', 0],['R', 0],['U', 0],['W', 0],['C', 0]];
var myManaMap = new Map(manaArr);

function canCast(myMana, ...reqManaArray) {
    myManaMap = new Map(manaArr);
    var reqMana = reqManaArray.join('');
    console.log(myManaMap.get('C'));
    console.log("My mana:" + myMana + ", required mana: " + reqMana);
    if(myMana == ''){
        return false;
    }
    setMaps(myMana, myManaMap);
    return compare(myManaMap, reqMana);
}

function setMaps(mana, map){
    var currentMana = '';
    for (i = 0; i < mana.length ; i++){
        currentMana = mana.charAt(i);
        if(map.has(currentMana)){
            map.set(currentMana, map.get(currentMana) + 1);
            console.log("Current mana: " + currentMana + " and it's value is " + map.get(currentMana));
        } else
        {
            map.set('C', parseInt(currentMana));
            console.log(map.get('C') + " is how much colorless mana you have rn");
        }
    }
}

function compare(myManaMap, reqMana) {
    var currentMana = '';
    var colorless = 0;

    var match = /\d+/.exec(reqMana);
    console.log("REGEX: " + match);

    for (i = 0; i < reqMana.length; i++){
        currentMana = reqMana.charAt(i);

        if (myManaMap.has(currentMana)){
            myManaMap.set(currentMana, myManaMap.get(currentMana) - 1);
        }else {
            colorless += parseInt(currentMana);
        }
    }
    console.log(colorless + " is the required colorless mana");
    compareColorless(myManaMap, colorless);

    return noNegatives(myManaMap);
}

function compareColorless(myManaMap, colorless) {
    var add = 0;

    myManaMap.forEach(function (item, key) {
        add += item;
    });

    console.log(myManaMap.get('C') + " is my colorless mana in the end");
    myManaMap.set('C', add - colorless);
}

function noNegatives(myManaMap) {
    var result = true;
    myManaMap.forEach(function (item) {
//         console.log(item);
        if (item < 0){
            result = false;
        }
    });

    return result;
}