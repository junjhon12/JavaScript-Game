docs(project): Create comprehensive README file

Here is a complete README.md file for your project, based on all the files and features you've built.

Persona Tensei: Downward Hellwhole

Persona Tensei: Downward Hellwhole is a turn-based, retro-style JRPG built with pure JavaScript, HTML, and CSS. Inspired by the Persona and Shin Megami Tensei series, this game challenges the player to choose a starting Persona and battle their way through multiple floors of a demon-filled abyss.

The game features a deep combat system with elemental affinities, a robust leveling and skill progression system, and a fully responsive UI designed to work on both desktop and mobile.

Key Features

Core Combat

    Turn-Based System: A classic JRPG combat flow where the player and enemy exchange actions.

    Elemental Affinities: A full-fledged weakness system. Attacking an enemy with an element they are 'weak' to deals bonus damage and grants the player "1 More!" turn. Enemies can also 'resist' or 'null' attacks.

    Critical Hits: Attacks have a chance to deal critical damage based on the player's Luck (LUK) stat, also granting an extra turn.

    Dodge Mechanics: Players can automatically evade enemy attacks based on their Agility (AGI) and Luck (LUK) stats.

    Passive Skills: Personas can have passive skills like Regenerate 1, which automatically restores HP at the start of a turn.

Progression & Customization

    Player Leveling: Gain EXP from every battle, level up to increase stats, and fully restore HP/SP. A visual EXP bar tracks progress.

    Choose Your Persona: Start the game with one of three unique Personas (Orpheus, Izanagi, or Arsene), each with different starting stats, skills, and affinities.

    Shuffle Time: After most battles, players are presented with "Shuffle Time," a card-based reward system offering stat boosts from a full 22-card Major Arcana set.

    Skill Evolution & Learning: After boss battles, players enter "Skill Time," where they can upgrade existing skills (e.g., Agi to Agilao) or learn entirely new skills and passives.

    Extensive Bestiary: Battle over 20 unique demons, 7 challenging mini-bosses, 5 powerful main bosses, and a final boss, each with their own stats, skills, and portraits.

UI & Experience

    Responsive Retro UI: A full-screen, responsive interface that adapts cleanly to both desktop and mobile layouts using modern CSS.

    Dynamic Backgrounds: The enemy's background panel changes dynamically as the player descends to new floors, using unique images for each 10-floor block.

    Real-Time Battle Log: A dedicated, scrollable log provides text feedback for every action, from damage and healing to status effects and rewards.

    On-Screen Feedback: Combat events are instantly communicated with visual text like "WEAK," "CRITICAL," and "EVADED".

    Sound Effects: Combat is brought to life with sound effects for hitting, criticals, healing, and menu selections.

    Save System: Players can save or load their progress at any time. Game data is stored locally in the browser's localStorage.

How to Play

    Host Locally:

        Download the project and ensure all files and folders (js/, bg-img/, sfx/) are kept in their original structure.

        Due to browser security restrictions on file:/// paths (which can block JavaScript modules and audio), it's recommended to run the project from a local server.

        If you have Node.js, you can use npx http-server in the root folder and open the provided http://localhost:8080 address.

    Web:

        Upload the entire project folder to any static web host (like GitHub Pages, Netlify, or your university server).

        Access the index.html file via the public URL.

Once the game loads:

    Click "New Game" to start.

    Choose one of the three starting Personas.

    Use your skills to defeat enemies, level up, and see how many floors you can clear!

Technologies Used

    HTML5

    CSS3 (Flexbox, CSS Grid, Media Queries, Border-Image)

    JavaScript (ES6+) (Modules, const/let, Arrow Functions, async/await)
