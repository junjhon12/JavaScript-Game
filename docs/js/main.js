import { state } from './state.js';
import { PERSONAS } from './data.js';
import { render, logMessage, updateBackground } from './ui.js';
import { attack, useAbility } from './combat.js';
import { spawnEnemy, handleStartOfTurnPassives } from './flow.js';

function mainMenu() {
    const div = document.getElementById("start-screen");
    div.innerHTML = `<h1 class="game-title">Persona Tensei: Downward Hellwhole</h1>`;
    let newButton = document.createElement("button");
    newButton.textContent = "New Game";
    newButton.onclick = () => personaSelect();
    div.appendChild(newButton);
    let loadButton = document.createElement("button");
    loadButton.textContent = "Load Save";
    loadButton.onclick = () => loadGame();
    div.appendChild(loadButton);
}
function personaSelect() {
    localStorage.removeItem('personaSaveFile');
    const div = document.getElementById("start-screen");
    div.innerHTML = `
        <h4>Choose your Persona</h4>
        <div id="persona-select-container"></div>
    `;
    const container = document.getElementById('persona-select-container');

    Object.keys(PERSONAS).forEach (c => {
        let btn = document.createElement("button");
        btn.innerHTML=`<img src='${PERSONAS[c].img}' class='icon'> ${c}`;
        btn.onclick = () => startGame(c);
        container.appendChild(btn);
    })
}
function startGame(personaName) {
    const base = PERSONAS[personaName];
    state.persona = JSON.parse(JSON.stringify(base));
    state.persona.name = personaName;
    state.persona.maxHP = base.HP;
    state.persona.maxSP = base.SP;
    document.getElementById("start-screen").style.display = 'none';
    document.getElementById("game-screen").style.display = 'grid';
    spawnEnemy();
    handleStartOfTurnPassives();
    render();
    updateBackground();
    const exitContainer = document.getElementById("exit-container");
    exitContainer.style.display = 'block';
    exitContainer.innerHTML = '';
    const exitButton = document.createElement("button");
    exitButton.textContent = "Exit to Menu";
    exitButton.onclick = () => {
        if (confirm("Are you sure you want to exit? Unsaved progress will be lost.")) {
            document.location.reload();
        }
    };
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Game";
    saveButton.onclick = () => saveGame();
    exitContainer.innerHTML = '';
    exitContainer.appendChild(exitButton);
    exitContainer.appendChild(saveButton);
}
function saveGame() {
    const saveFile = JSON.stringify(state);
    localStorage.setItem('personaSaveFile', saveFile);
    alert("Game Saved!");
    logMessage("Game state saved.", "log-system");
}
function loadGame() {
    const savedState = localStorage.getItem('personaSaveFile');
    if (savedState) {
        Object.assign(state, JSON.parse(savedState));

        document.getElementById("start-screen").style.display = 'none';
        document.getElementById("game-screen").style.display = 'grid';
        document.getElementById('game-log').innerHTML = '';
        logMessage("Save file loaded successfully.", "log-system");
        render();
        updateBackground();
        alert("Game Loaded!");
    } else {
        alert("No save file found!");
    }
}

window.attack = attack;
window.useAbility = useAbility;

mainMenu();