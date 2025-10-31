import { state } from './state.js';
import { SKILLS, PASSIVE_SKILLS, FLOOR_BACKGROUNDS } from './data.js';
import { useAbility } from './combat.js';

export function updateBackground() {
    const enemyDisplayDiv = document.getElementById("enemy-display");
    if (enemyDisplayDiv) {
        const floorTier = Math.floor(state.totalKills / 10);
        const bgIndex = Math.min(floorTier, FLOOR_BACKGROUNDS.length - 1);
        const backgroundImage = FLOOR_BACKGROUNDS[bgIndex];
        enemyDisplayDiv.style.backgroundImage = `url('${backgroundImage}')`;
    }
}

export function render() {
    if (!state.persona) return;
    const playerStatsDiv = document.getElementById("player-stats");
    let p = state.persona;
    const hpPercent = (p.HP / p.maxHP) * 100;
    const spPercent = (p.SP / p.maxSP) * 100;
    const xpToLevel = state.level * 20;
    const xpPercent = (state.xp / xpToLevel) * 100;

    playerStatsDiv.innerHTML = `
        <div class="feedback-text" id="player-feedback"></div>
        <div class="stat-panel-container">
            <div class="stat-panel-left">
                <h3>${p.name} -- Lvl.${state.level}</h3>
                <img src='${p.img}' class='icon'>
            </div>
            <div class="stat-panel-right">
                <p>HP: ${p.HP} / ${p.maxHP}</p>
                <div class="stat-bar"><div class="hp-fill" style="width: ${hpPercent}%;"></div></div>
                <p>SP: ${p.SP} / ${p.maxSP}</p>
                <div class="stat-bar"><div class="sp-fill" style="width: ${spPercent}%;"></div></div>
                <p>EXP: ${state.xp} / ${xpToLevel}</p>
                <div class="stat-bar"><div class="xp-fill" style="width: ${xpPercent}%;"></div></div>
                <ul>
                    <li>STR: ${p.STATS.STR}</li><li>MAG: ${p.STATS.MAG}</li>
                    <li>END: ${p.STATS.END}</li><li>AGI: ${p.STATS.AGI}</li>
                    <li>LUK: ${p.STATS.LUK}</li>
                </ul>
            </div>
        </div>
    `;

    if (p.PASSIVES && p.PASSIVES.length > 0) {
        const passivesContainer = document.createElement('div');
        passivesContainer.className = 'passives-list';
        passivesContainer.innerHTML = `
            <strong>Passives:</strong>
            <ul>
                ${p.PASSIVES.map(pKey => `<li>${PASSIVE_SKILLS[pKey].name}</li>`).join('')}
            </ul>`;
        playerStatsDiv.querySelector('.stat-panel-right').appendChild(passivesContainer);
    }

    const enemyDisplayDiv = document.getElementById("enemy-display");
    if (state.enemy) {
        let e = state.enemy;
        const enemyHpPercent = (e.HP / e.maxHP) * 100;

        enemyDisplayDiv.innerHTML = `
            <div class="feedback-text" id="enemy-feedback"></div>
            <div class="stat-panel-container">
                <div class="stat-panel-left">
                    <h3>${e.name}</h3>
                    <img src='${e.img}' class='icon'>
                </div>
                <div class="stat-panel-right">
                    <p>HP: ${e.HP} / ${e.maxHP}</p>
                    <div class="stat-bar"><div class="hp-fill" style="width: ${enemyHpPercent}%;"></div></div>
                    <ul>
                        <li>STR: ${e.STATS.STR}</li><li>MAG: ${e.STATS.MAG}</li>
                        <li>END: ${e.STATS.END}</li><li>AGI: ${e.STATS.AGI}</li>
                        <li>LUK: ${e.STATS.LUK}</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    updateBackground();

    const actionsDiv = document.getElementById("actions");
    actionsDiv.classList.remove('reward-mode');
    actionsDiv.innerHTML = `
        <button id="attack-button" onclick="attack()">Attack</button>
        <div id="skill-grid"></div>
    `;

    const skillGridDiv = document.getElementById("skill-grid");
    const maxSlots = 6;

    for (let i = 0; i < maxSlots; i++) {
        const skillKey = p.ABILITY[i];
        if (skillKey && SKILLS[skillKey]) {
            const skill = SKILLS[skillKey];
            const skillButton = document.createElement("button");
            skillButton.className = 'skill-button';
            
            const cost = skill.cost.hp ? `${skill.cost.hp} HP` : `${skill.cost.sp} SP`;
            skillButton.innerHTML = `<span class="skill-name">${skill.name}</span><span class="skill-cost">${cost}</span>`;
            skillButton.onclick = () => useAbility(skillKey);

            const hasEnoughSp = !skill.cost.sp || p.SP >= skill.cost.sp;
            const hasEnoughHp = !skill.cost.hp || p.HP > skill.cost.hp;
            if (!hasEnoughSp || !hasEnoughHp) {
                skillButton.disabled = true;
                skillButton.classList.add('disabled');
            }
            skillGridDiv.appendChild(skillButton);
        } else {
            const emptySlotDiv = document.createElement("div");
            emptySlotDiv.className = 'skill-button empty';
            emptySlotDiv.innerHTML = `-------`;
            skillGridDiv.appendChild(emptySlotDiv);
        }
    }
    
    const floorCounterDiv = document.getElementById("floor-counter");
    if (state.enemy) {
        const currentFloor = Math.floor(state.totalKills / 10) + 1;
        
        floorCounterDiv.innerHTML = `
            Floor: ${currentFloor}<br>
            Kill Count: ${state.totalKills}
        `;
    }
}

export function showCombatText(target, text, className) {
    const feedbackDiv = (target === state.persona) ? document.getElementById('player-feedback') : document.getElementById('enemy-feedback');
    if (feedbackDiv) {
        feedbackDiv.textContent = text;
        feedbackDiv.className = `feedback-text ${className}`;
        feedbackDiv.classList.add('show');
        setTimeout(() => {
            feedbackDiv.classList.remove('show');
        }, 1000);
    }
}

export function showAffinityFeedback(target, affinity) {
    showCombatText(target, affinity.toUpperCase() + "!", affinity);
}

export function triggerScreenShake() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.classList.add('shake');
    setTimeout(() => gameContainer.classList.remove('shake'), 300);
}

export function logMessage(message, className) {
    const logBox = document.getElementById('game-log');
    if (logBox) {
        const p = document.createElement('p');
        p.textContent = message;
        if (className) {
            p.className = className;
        }
        logBox.appendChild(p);
        logBox.scrollTop = logBox.scrollHeight;
    }
}