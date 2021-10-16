const player1 = {
    name: 'Sub Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'snowball'],
    player: 1,
    attack: () => {
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'knife'],
    player: 2,
    attack: () => {
        console.log(this.name + ' Fight...');
    }
}

function createPlayer(player) {
    const life = player.hp > 0 ? player.hp : 0;
    const el = document.createElement('div');
    el.className = 'player' + player.player;
    el.innerHTML = `
    <div class="progressbar">
        <div class="life" style="width: ${life}%"></div>
        <div class="name">${player.name}</div>
    </div>
    <div class="character">
        <img src="${player.img}" />
    </div>
    `;
    return el;
}

const arenas = document.querySelector('div.arenas');
const randomBtn = document.querySelector('.button');

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

function playerWins(name) {
    const winTitle = document.createElement('div');
    winTitle.className = 'loseTitle';
    winTitle.innerText = name + ' wins!';
    randomBtn.disabled = true;
    return winTitle;
}

function changeHP(player, enemy) {
    const playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= Math.floor(Math.random() * 20) + 1;
    playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        arenas.appendChild(playerWins(enemy.name));
    }
}

randomBtn.addEventListener('click', () => {
    changeHP(player1, player2);
    changeHP(player2, player1);
});