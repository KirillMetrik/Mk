const subZero = {
    name: 'Sub Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'snowball'],
    attack: () => {
        console.log(this.name + ' Fight...');
    }
}

const scorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'knife'],
    attack: () => {
        console.log(this.name + ' Fight...');
    }
}

function createPlayer(playerClass, playerName, life) {
    const el = document.createElement('div');
    el.className = playerClass;
    el.innerHTML = `
    <div class="progressbar">
        <div class="life" style="width: ${life}%"></div>
        <div class="name">${playerName}</div>
    </div>
    <div class="character">
        <img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />
    </div>
    `;
    return el;
}

const arenas = document.querySelector('div.arenas');
arenas.appendChild(createPlayer('player1', 'SCORPION', 50));
arenas.appendChild(createPlayer('player2', 'SUB-ZERO', 80));