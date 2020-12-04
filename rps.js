let userWin = 0;
let comWin = 0;
let moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    select = moves[Math.floor(Math.random() * 3)];

    return select;
}

function lowerCase(str) {
    return String(str).toLowerCase();
}

function roundPlay(pS, cS) {
    let user = lowerCase(pS);
    let com = lowerCase(cS);

    if ((user == 'rock' && com == 'scissors') || (user == 'paper' && com == 'rock') || (user == 'scissors' && com == 'paper')) {
        userWin += 1;
        return `You Win! ${user} beats ${com}`;
    } else if (user == com) {
        return 'Tie!';
    } else {
        comWin += 1;
        return `You Lose! ${com} beats ${user}`;
    }
}

function whoWins(x, y) {
    if (x > y) {
        return `Player: ${userWin}, Computer: ${comWin}`;
    } else if (x < y) {
        return `Player: ${userWin}, Computer: ${comWin}`;
    } else {
        return `Player: ${userWin}, Computer: ${comWin}`;
    }
}

function reset() {
    let userWin = 0;
    let comWin = 0;
}

const head = document.createElement('div')
head.classList.add('heads');
const header1 = document.createElement('h2');
head.appendChild(header1);
header1.textContent = 'Let\'s Play Rock, Paper, Scissors!';
const header2 = document.createElement('h4');
head.appendChild(header2);
header2.textContent = 'Please pick an option:';

const buttons = document.querySelectorAll('button');
const results = document.querySelector('div.results');
const para = document.createElement('p');
let message;

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        roundPlay(button.textContent, computerPlay());
        results.appendChild(para);
        if (userWin < 5 && comWin < 5 && userWin != comWin) {
            para.textContent = `Score - Player: ${userWin} | Computer: ${comWin}`;
        } else if (userWin == 5 && comWin < 5) {
            para.textContent = `You Won! Player: ${userWin} | Computer: ${comWin}`;
        } else if (userWin < 5 && comWin == 5) {
            para.textContent = `You Lost! Player: ${userWin} | Computer: ${comWin}`;
        } else if (roundPlay() == 'Tie!') {
            para.textContent = `Draw! Player: ${userWin} | Computer: ${comWin}`;
        } else if (userWin >= 5 && comWin >= 5) {
            reset();
        } else return;
    })
})