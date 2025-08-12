# Core Rules: Creating a Character

## Ability Scores

Characters have 6 Ability Scores. These scores snapshot every creature's physical and mental characteristics:

- **Agility** – freedom of movement  
- **Strength** – physical power  
- **Constitution** – stamina  
- **Wisdom** – awareness and insight  
- **Knowledge** – memory and perception  
- **Influence** – impact of presence  

These scores affect the three main rolls of the game: ability checks, attack rolls, and counters.

## Ability Scores and Modifiers

All characters begin with **8 in every ability score**.

At creation, players get **27 points** to distribute among the six abilities.  
- No score may exceed **20** at character creation.  
- **Raising a score above 15 costs 2 points per increment.**

### Point Costs
- 8 → 15 = 1 point per increase  
- 16+ = 2 points per increase  

### Modifiers
- Every 2 points **below 10**: –1 modifier  
- Every 2 points **above 10**: +1 modifier  

---

### Example Stat Block

| Stat        | Score | Modifier |
|-------------|-------|----------|
| Agility     | 15    | +2       |
| Constitution| 14    | +2       |
| Strength    | 13    | +1       |
| Wisdom      | 12    | +1       |
| Knowledge   | 11    | +0       |
| Influence   | 10    | +0       |

---

## Ability Score Increase

- **Every even-numbered level** (including 20), gain **+1 ability point**.
- Scores may exceed 20 **after** creation, but:
  - Every point above 20 must be offset by lowering another score by 1.

> Example: If Knowledge is 20 and Influence is 13, raising Knowledge to 21 means lowering Influence to 12 (or any other stat by 1).

---

## Source Dice (SD)

All characters have a **Source Pool** of dice used to fuel abilities, attacks, and more.

### Source Pool by Level

| Level | Source Pool |
|-------|-------------|
| 1     | 6d6         |
| 5     | 8d8         |
| 9     | 10d10       |
| 13    | 12d12       |
| 17    | 20d20       |

---

## Replenishment

You can restore Source through endurance and focus.

- **Core Action:** DC = 30 − Constitution score  
- **In Combat:** This is a stressed check  
- **On Success:** Regain up to your **Proficiency** in Source Dice (still limited by your proficiency cap)  
- **Out of Combat:** Automatically regain Source Dice equal to your proficiency every unstressed, unstrained hour  

---

## Hit Points

- **Before level 17**:  
  `HP = Source Dice Size × Number of Source Dice`  
  _Example: 8d8 → 8 × 8 = 64 HP_

- **Level 17+**:  
  `HP = 20 × Constitution score` (not modifier)

---

## Renewal

Regain HP during downtime:

- Regain HP = **Proficiency Bonus + Constitution Modifier** per unstressed hour.  
> Example: +3 Proficiency, –1 Constitution → regain 2 HP/hour

---

## Conversions

| Conversion             | Rule                              |
|------------------------|-----------------------------------|
| 2 SD → 1 Core Action   | Spend 2 Source Dice for 1 CA      |
| 2 SD → 20ft Movement   | Spend 2 Source Dice for 20ft      |
| 20ft ⇄ 1 Core Action   | Exchange freely                   |

> **Note:** You **cannot** convert Core Actions or movement into SD.

---

## Core Actions (CA)

- Each turn, you gain **1 free Core Action**.
- Core Actions include attacks, spellcasting, and d20-based checks.
- Some actions cost **1 CA + additional SD**.
- Equivalencies:
  - 1 CA = 2 SD = 20ft movement = 10ft + 1 SD

---

## Turns

On your turn:
- You may spend **SD up to your proficiency bonus**.
- You may use **all your movement**.
- Your turn ends when you've used all resources or you choose to pass.

---

## Hold Action

You may **hold** an Action by specifying a **clear trigger** (e.g. "If a creature enters my range").

- You **do not** pre-commit Source Dice.
- When triggered, you resolve the action immediately.
- If resolving it would exceed your SD proficiency cap, it becomes a **stressed** task.
- If you do not have the resources when the trigger occurs, the Action is not triggered.
- If the trigger **never occurs**, you **lose nothing**.

---

## Stress & Strain

### Stress

- **All tasks in combat** are considered **stressed**.
- For every **missing SD**, add **+1 DC** to stressed actions.
- **Stressed DC** = +1 per missing SD **at the moment of the check**.

> Some spells are stressed by nature (even outside combat).

---

### Strain

If you **exceed your SD proficiency cap** in a round, your next check becomes a **strained** check.

- **Strained DC** = +1 per missing SD **at the moment of the check**.

> Example:  
> You have 6 SD total, already spent 2 this round, and have 4 SD remaining.  
> You commit 3 more SD (over cap) to counter a spell.  
> Since 2 SD are missing, DC is increased by +2.

| Missing SD | DC Increase |
|------------|-------------|
| 1          | +1          |
| 2          | +2          |
| 3          | +3          |
| ...        | ...         |

> **Ascended Play (Level 21+)**: Stress/Strain is reduced to +1 DC per **2 missing SD** (see *Ascended Resilience*).

---
