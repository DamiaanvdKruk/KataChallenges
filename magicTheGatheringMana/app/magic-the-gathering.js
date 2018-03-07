//https://www.codewars.com/kata/magic-the-gathering-number-2-mana/javascript
function canCast(manaPool, ...spellCosts) {
    const manaPoolMap = toMap(manaPool);
    const spellCostsMap = toMap(spellCosts.join(''));
    return canCastSpells(manaPoolMap, spellCostsMap);
}

function canCastSpells(manaPoolMap, spellCostsMap) {
    for (let [mana, cost] of spellCostsMap) {
        if (mana !== COLOURLESS) {
            const newManaValue = manaPoolMap.get(mana) - cost;
            if (newManaValue < 0) {
                return false;
            } else {
                manaPoolMap.set(mana, newManaValue);
            }
        }
    }
    return getSpendableColourlessManaCost(manaPoolMap) >= spellCostsMap.get(COLOURLESS);
}

function getSpendableColourlessManaCost(manaPoolMap) {
    let availableManaAmount = 0;
    for (let availableMana of manaPoolMap.values()) {
        availableManaAmount = availableManaAmount + availableMana;
    }
    return availableManaAmount;
}

function toMap(manaPool) {
    const map = initMap();
    for (let i = 0; i < manaPool.length; i++) {
        const mana = manaPool.charAt(i);
        if (isInt(mana)) {
            let colourlessMana = mana;
            for(let j = i+1; j < manaPool.length; j++) {
                const nextChar = manaPool.charAt(j);
                if(isInt(nextChar)) {
                    colourlessMana = colourlessMana.concat(nextChar);
                } else {
                    i = j-1;
                    break;
                }
            }
            map.set(COLOURLESS, map.get(COLOURLESS) + parseInt(colourlessMana));
        } else {
            map.set(mana, map.get(mana) + 1);
        }
    }
    return map;
}

function initMap() {
    return new Map([['B', 0], ['G', 0], ['R', 0], ['U', 0], ['W', 0], [COLOURLESS, 0]]);
}

const COLOURLESS = 'C';

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

if(exports) {
    exports.canCast = canCast;
}