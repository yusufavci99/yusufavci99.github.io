const inputFieldData = new Array(9);
const randomRGB = new Array(9);
const randomRGBColors = new Array(3);

window.addEventListener('load', () => {
    
    document.getElementById('miniGameButton').addEventListener('click', () => {
        document.getElementById('mg_minigame').hidden = false;
    })

    let mg_randomColor = document.getElementById('mg_randomColor');
    let inputField = document.getElementById('mg_inputField');

    for (let i = 0; i < 3; i++) {
        let curRGB = Math.floor(Math.random() * 256).toString();
        randomRGBColors[i] = curRGB;
        while (curRGB.length < 3) { curRGB = '0' + curRGB };
        for (let j = 0; j < 3; j++) {
            randomRGB[i * 3 + j] = curRGB[j];
        }
    }

    mg_randomColor.style.fill = `rgb(${randomRGBColors[0]},${randomRGBColors[1]},${randomRGBColors[2]})`;

    for (let i = 0; i < inputFieldData.length; i++) {

        let currentElement = document.createElement('input');
        currentElement.dataset.id = i;
        currentElement.className = 'mg_input'
        currentElement.type = 'text';

        inputFieldData[i] = {
            'element': currentElement,
            'correct': randomRGB[i],
            'next': i < inputFieldData.length - 1 ? i + 1 : null
        }

        currentElement.addEventListener('input', mg_inputListener);

        let helperText = document.createElement('span');
        if (i == 0) helperText.innerHTML = 'R';
        else if (i == 3) helperText.innerHTML = 'G';
        else if (i == 6) helperText.innerHTML = 'B';
        if (i == 0 || i == 3 || i == 6) inputField.appendChild(helperText);
        inputField.appendChild(currentElement);
    }


});

let mg_inputListener = (e) => {
    let guess = e.target.value[e.target.value.length - 1];
    if (guess) {
        let valid = Number.parseInt(guess) || guess == 0;
        guess = valid ? guess : '';
        e.target.value = guess;

        let nextId = inputFieldData[e.target.dataset.id].next;
        let correct = inputFieldData[e.target.dataset.id].correct === guess;

        if (correct) {
            e.target.style.backgroundColor = 'green';
            e.target.readOnly = true;

            if (checkWin()) win();
        }

        if (correct && nextId) {
            let currentElement = inputFieldData[nextId].element;
            while (!currentElement ||currentElement.readOnly == true) {
                nextId = inputFieldData[currentElement.dataset.id].next;
                currentElement = nextId ? inputFieldData[nextId].element : null;
            }
            if (nextId) inputFieldData[nextId].element.focus();
        }
    }

}

function checkWin() {
    for (let i = 0; i < inputFieldData.length; i++) {
        if (inputFieldData[i].element.readOnly == false) return false;
    }
    return true;
}

function win() {
    let appendText = document.createElement('p');
    appendText.innerText = 'You Win! Hidden Page Unlocked...';
    document.getElementById('mg_minigame').appendChild(appendText);
    document.getElementById('mg_hidden_link').hidden = false;
}