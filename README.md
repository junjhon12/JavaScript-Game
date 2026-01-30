# 🃏 Persona Tensei: Downward Hellwhole

![JavaScript](https://img.shields.io/badge/Language-JavaScript_ES6+-f7df1e?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/Style-CSS3-1572B6?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/Structure-HTML5-E34F26?logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Playable-brightgreen)

**Persona Tensei: Downward Hellwhole** is a turn-based, retro-style JRPG built entirely with **Vanilla JavaScript**. Inspired by the *Persona* and *Shin Megami Tensei* series, this game challenges players to descend into a demon-filled abyss using elemental weaknesses and strategic skill management.

## Images
<img width="914" height="917" alt="image" src="https://github.com/user-attachments/assets/847a1e4a-79a8-4a9d-8069-59b8e7d78698" />
<img width="624" height="372" alt="image" src="https://github.com/user-attachments/assets/982dee49-e285-4d47-bc91-0cb339ab870b" />
<img width="891" height="906" alt="image" src="https://github.com/user-attachments/assets/a556f4a9-7312-429b-ae5c-33013b8d6ae9" />
<img width="892" height="900" alt="image" src="https://github.com/user-attachments/assets/6c136243-548b-4da6-a099-3d9eb10c5aa2" />

---

## 🔥 Core Combat Features

* **1-More! System:** Exploit elemental affinities (Weak, Resist, Null) to gain extra turns—a hallmark of the Megaten series.
* **Critical & Evasion Logic:** Combat math driven by Agility (AGI) and Luck (LUK) stats for dynamic, unpredictable battles.
* **Passive Recovery:** Strategic passives like "Regenerate" to sustain long dungeon crawls.
* **Tactical UI:** A real-time, scrollable battle log that tracks every status effect, crit, and damage value.

## 📈 Progression & Customization

### **Choose Your Persona**
Start your journey with one of three iconic archetypes:
* **Orpheus** | **Izanagi** | **Arsene**

### **Evolution Systems**
* **Shuffle Time:** A rewards system featuring the full 22-card **Major Arcana** set for stat boosts.
* **Skill Mutation:** Upgrade your arsenal (e.g., *Agi* ➔ *Agilao*) or learn entirely new passives after boss encounters.
* **Bestiary:** Features over **20+ unique demons**, 7 mini-bosses, and 6 high-stakes boss fights.

---

## 🛠️ Technical Implementation

This project is a deep dive into **Vanilla JS game development**, avoiding external engines (like Phaser or Unity) to master core programming concepts:

* **State Management:** Complex handling of player/enemy stats, turns, and game progression.
* **DOM Manipulation:** Dynamic rendering of combat effects, health bars, and backgrounds.
* **Local Persistence:** A fully functional Save/Load system using `localStorage`.
* **Modular Architecture:** Organized JS modules for clean, maintainable game logic.

## 🎮 How to Play

### **Direct Play**
Access the live version via GitHub Pages:  
👉 **(https://junjhon12.github.io/Downward-Hellwhole-Retro-JRPG/)**

### **Local Setup**
Because the game uses JS Modules and local audio assets, it requires a local server to run correctly:

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/junjhon12/JavaScript-Game.git](https://github.com/junjhon12/JavaScript-Game.git)
    ```
2.  **Start a Local Server:**
    If you have Python: `python -m http.server`  
    If you have Node: `npx http-server`
3.  Open `localhost:8080` in your browser.

---

## 👥 Credits
Developed with ❤️ by **junjhon12** and contributors.  
*Inspired by the works of ATLUS.*
