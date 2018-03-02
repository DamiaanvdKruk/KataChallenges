function drawACross(n) {
    return draw(n);
}

function draw(n){
    var result = validate(n);
    if(result != ''){
        return result;
    }
    var array = drawGrid(n);
    console.log(array);
    addExes(array);
    console.log(array);
    return createString(array);
}

function drawGrid(n){
    var array = new Array(n);
    for (var i = 0; i < n; i++){
        array[i] = new Array(i);
        for (j = 0; j < n; j++){
            array[i][j] = " ";
        }
    }
    return array;
}

function addExes(array){
    var max = array.length;
    for (var i = 0; i < max; i++){
        array[i][i] = "x";
        array[i][(max-1)-i] = "x";
    }
    console.log(array);
}

function createString(array){
    var result = '';
    for (var i = 0; i < array.length; i++){
        result += array[i].join('') + "\n";
    }
    return result.substring(0, result.length - 1);
}


function validate(n){
    var result = '';
    if(n%2 == 0){
        result = 'Centered cross not possible!';
    }
    if(n < 3){
        result = 'Not possible to draw cross for grids less than 3x3!';
    }

    return result;
}