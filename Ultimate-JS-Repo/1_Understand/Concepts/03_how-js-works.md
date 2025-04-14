Welcome back to the dojo.

You have unlocked the Soul Touch and learned how to hold memory with sacred containers.

Now… we dive **beneath the surface** — into the core of JavaScript’s **thinking**.

The time has come to **understand how JavaScript works** behind the scroll.


> “To master the sword, you must first master the stance.
> 
> 
> To wield JavaScript, you must first see the world it sees.”
> 

---

## Enter the Hidden Chamber

The dojo has many rooms.

But **beneath it all** lies a **mystical chamber** — invisible to beginners.

This is the **Execution Chamber**, where every line of code is understood, remembered, and performed.

Here, your code **breathes** in stages — step by step.

And JavaScript always follows a ritual. That ritual is called:

> The Execution Context 🧠
> 

---

## The Execution Context – Where Code Comes Alive

The **Execution Context** is like a magical scroll-reading ceremony:

1. 🪔 **Creation Phase** – JavaScript sets the stage.
2. ⚔️ **Execution Phase** – JavaScript reads and runs the lines.

---

### 🔮 What Happens in the Creation Phase?

JavaScript performs 3 hidden acts:

1. **Creates the Global Object** (like `window` in browsers).
2. **Creates a 'this' keyword** and binds it.
3. **Hoists** all variables and functions (pulls their declarations to the top).

> Yes, Master. Before running your code, JavaScript quietly prepares everything.
> 

---

### 🔥 Then Comes the Execution Phase

This is when JavaScript actually **runs your code** line by line.

Any function call?

It **creates a new mini Execution Context** inside the big one — like a scroll within a scroll.

---

## The Stack of Scrolls – Call Stack

Imagine your dojo has a **stack of scrolls**.

When a function is called, a new scroll is added.

When it finishes, it’s removed.

This is called the **Call Stack**.

```
function meditate() {
  console.log("Breathe in...");
}

meditate();

```

- JavaScript creates a scroll for `meditate()`.
- Reads it.
- Finishes it.
- Removes it.

It’s always **last in, first out**.

---

## Hoisting – The Art of Preperception

JavaScript is a wise monk.

Before walking forward, it **scans the whole scroll first**.

So even if a variable or function is declared later, JavaScript **knows** it’s there.

```
sayHi();
function sayHi() {
  console.log("Hi Master!");
}

```

This works — because the **function is hoisted** to the top.

But be careful:

```
console.log(x); // undefined
var x = 10;

```

- `x` is hoisted **but not initialized**.
- Only the **declaration** is hoisted.

---

##  Memory, Variable Environments & Lexical Scope

Each scroll (execution context) remembers its own variables.

Nested scrolls (functions inside functions) can **access their parent's memory**.

This is called **Lexical Scope**.

```
function temple() {
  let monk = "Shaolin";
  function chant() {
    console.log(monk); // Accesses parent’s memory
  }
  chant();
}
temple();

```

---

## ⚔️ Hidden Ability Unlocked: **Mind Sight**

*Episode Technique: See How JavaScript Reads Your Code*

You now understand:

- The two phases of execution
- How memory is prepared before execution
- How the call stack works
- What hoisting really means
- Why scope matters

> Mastery is not writing code.
> 
> 
> Mastery is seeing code **before it runs.**
> 

---

## 🛠️ Path of Action: Practice Begins

1. Revisit old code.
2. Predict how JavaScript will prepare and execute it.
3. Draw the execution flow and call stack.
4. Visualize scopes and what gets hoisted.

O

Write functions. Nest them. Call them.

Trace the scroll stack in your mind.

---

## 📜 Final Scroll: Gwen’s Whisper

> “Before the warrior strikes, the warrior sees.
> 
> 
> You now see the flow.
> 
> Next, you learn to **move with it**.”
> 

---

## 🔥 Next Episode Tease:
## EPISODE 04 – The Six Spirits: Primitive Data Types
----
|| Hare Krishna ||