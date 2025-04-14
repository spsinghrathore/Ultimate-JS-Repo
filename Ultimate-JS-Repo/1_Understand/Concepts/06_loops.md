# 🎬 **EPISODE 06 – The Circle of Discipline: Loops & Iteration**

> “Mastery is not in the strike... but in how many times you swing the blade.”
> 

---

## 🌀 Scene 1: Enter the Looping Temple

In the heart of the temple, you see a scroll spinning in place — endlessly.

This is **Looping** — the discipline of doing something again… and again… and again.

Why?

Because in code, you’ll often want to repeat an action **without writing it 10,000 times.**

```
console.log("Train");
console.log("Train");
console.log("Train");
// 😮‍💨 No.

```

Instead, you write it once — and **let it repeat.**

---

## 🔁 Scene 2: The 4 Great Circles of Looping

Here are the 4 sacred forms:

---

### 1. **The For Loop – Blade of Discipline**

The classic. The sharpest. The most controlled.

```
for (let i = 1; i <= 5; i++) {
  console.log("Push-up", i);
}

```

🧠 *Start with `i = 1` → Check `i <= 5` → Run → Increase `i` → Repeat*

Perfect when you know **how many times** you want to repeat.

---

### 2. **The While Loop – Flow of Focus**

Repeat **as long as a condition is true**.

```
let energy = 3;

while (energy > 0) {
  console.log("Keep meditating...");
  energy--;
}

```

Useful when you don't know **how long** the loop will continue.

---

### 3. **The Do...While Loop – First Action, Then Check**

```
let mana = 0;

do {
  console.log("Drink potion");
  mana++;
} while (mana < 1);

```

This loop runs **at least once**, no matter the condition — because the **body comes first**.

---

### 4. **For...of Loop – Graceful Steps Through Arrays**

```
let techniques = ["Shadow", "Flame", "Wind"];

for (let tech of techniques) {
  console.log("Learned:", tech);
}

```

Simple, elegant — for walking through **collections** like arrays.

---

## 🧙 Scene 3: Beware the Infinite Circle ⚠️

A loop with no exit is like a warrior who never rests.

```
while (true) {
  console.log("AHHH I’M STUCK!");
}

```

🛑 Always ensure your loop **has a way to break free.**

---

## 🌀 BONUS: Break & Continue – Loop’s Secret Moves

### `break` – shatter the loop

```
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

```

### `continue` – skip one turn

```
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // skips 2
}

```

---

## ⚔️ Hidden Ability Unlocked: **Discipline Loop**

You now control:

- Repeated actions
- Conditional repetition
- Arrays as training routines
- Breaks and skips in the flow

> “One strike is power. A thousand strikes is mastery.”
> 

---

## 🛠️ Path of Action: Your Dojo Awaits

1. Build a loop that counts from 1 to 10
2. Create a `for...of` loop that says hello to your friends
3. Write a `while` loop that simulates a warrior training until energy hits 0
4. Use `break` to stop a loop early
5. Use `continue` to skip every even number

Scrolls to practice:

- `/2_Solve/06_loops.js`
- `/3_Build/Essence/concept-06.html`

---

## 📜 Final Scroll: Gwen’s Message

> “A samurai is forged in repetition.
> 
> 
> When you loop, you become faster. Sharper. Unstoppable.”
> 

---

## 🔥 Next Episode Tease:

### EPISODE 07 – The Inner Chamber: Arrays & Objects

*"To hold many things, you need structure. To remember, you need meaning."*

---
|| Hare Krishna ||