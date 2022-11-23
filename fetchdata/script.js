let squareList = document.querySelectorAll('.square');
let resultLine = document.querySelector('h3');
let matrix = [['','',''], ['','',''], ['','','']];
let signX = 'X';
let signO = 'O';
let countX = 0;
let countO = 0;
let flag = 1; // 1 = X; 0 = Y

function checkWin(m) {
    for (let i = 0; i < m.length; i++) {
        let str = '';
        str = m[i].join('');
        if (str === 'xxx') 
            return 'x';
        if (str === 'ooo')
            return 'o';
    }

    let count = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i === j) {
                ++count;
                if (count === m.length) {
                    count = 0;
                    return matrix[0][0];
                } 
            }
        }
    }

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i - 1 === j) {
                ++count;
                if (count === m.length) {
                    count = 0;
                    return matrix[0][j];
                } 
            }
        }
    }



}

squareList.forEach((square, index) => {
    square.addEventListener('click', e => {
        e.stopPropagation();
        if (flag === 1 && !square.classList.contains('actived')) {
            flag = 0;
            square.innerText = signX;
            square.classList.add('actived');
            if (index < 3) 
                matrix[0][index] = 'x'; 
            else if (index < 6) 
                matrix[1][index % 3] = 'x'; 
            else if (index < 9) 
                matrix[2][index % 3] = 'x'; 
            if (checkWin(matrix) === 'x') {
                resultLine.innerText = 'X win';
            } 
            
        } else if (!square.classList.contains('actived')) {
            flag = 1;
            square.innerText = signO;
            square.classList.add('actived');
            if (index < 3) 
                matrix[0][index] = 'o'; 
            else if (index < 6) 
                matrix[1][index % 3] = 'o'; 
            else if (index < 9) 
                matrix[2][index % 3] = 'o';
            if (checkWin(matrix) === 'o') {
                resultLine.innerText = 'O win';
                
            } 
        }

    });
});
