# 🎬 **EPISODE 14 – THE EXECUTION CONTEXT: The Battlefield of Code**

*"In every battle, there is a moment where everything aligns — when the forces of time, place, and purpose converge."* ⚔️

---

## 🌀 Scene 1: The Land of Code

The warrior stands before a vast battlefield. This battlefield is not one of physical combat, but one of logic and code. 

The sky is darkened by the swirling winds of execution, and in the distance, there is a **call stack** — where all the tasks are fought and resolved.

In this land, the **Execution Context** reigns supreme.

> “Before you strike, you must understand where you stand.” – Ancient Scroll

---

## 🧠 Scene 2: What is the Execution Context?

In the Way of the Web, an **Execution Context** is the environment in which JavaScript code is evaluated and executed.

It is the **"context"** in which the current function or script is running. Every time JavaScript code runs, it enters a specific execution context, and the **execution stack** keeps track of these contexts.

### There are three main types of execution contexts:

1. **Global Execution Context**:
   - This is the **default** context where all code runs when it’s not inside any function. When a script first runs, it enters the global execution context.
   - The global execution context creates two important things:
     - The **global object** (in the browser, it’s `window`).
     - The **`this`** value, which refers to the global object.
   
2. **Function Execution Context**:
   - Every time a function is called, a new execution context is created for that function. This context holds all the necessary information for executing the function (like variables, `this`, etc.).
   
3. **Eval Execution Context**:
   - This context is created when code inside an `eval()` function is executed. It's less commonly used but still part of JavaScript.

---

## 🧙‍♂️ Scene 3: The Structure of an Execution Context

An execution context contains **two main components**:

1. **The Creation Phase**:
   - **Global Context** (or function context):
     - The **Global Object** (`window` in browsers) is created.
     - **`this`** is assigned the value of the global object (`window`).
     - Variables and functions are hoisted and initialized.

2. **The Execution Phase**:
   - **Code is executed**, and the stack keeps track of what is running.
   - Local variables and functions are assigned their values.
   
Here’s how the **execution context** works:

---

## 🏰 Scene 4: The Call Stack and Execution Flow

When JavaScript runs, the **Call Stack** is used to keep track of function calls. Think of it as the stack of plates in the dojo: the topmost plate (or function) is the one that gets executed first.

### How it works:

1. **Global Execution Context** starts first, entering the stack.
2. A **function call** creates a new execution context, which is added to the top of the stack.
3. Once that function finishes, its execution context is popped off the stack, and the program continues with the next function or the global execution context.

Example:

```javascript
function one() {
  console.log('Inside one');
  two();  // Function call to 'two'
}

function two() {
  console.log('Inside two');
}

one();
```

### Execution Stack:

1. **Global Execution Context** → `one()`
2. **Function Execution Context for `one()`** → Calls `two()`
3. **Function Execution Context for `two()`** → `console.log('Inside two')`
4. After `two()` finishes, its context is popped off.
5. Back to the `one()` function → `console.log('Inside one')`

---

## 🧭 Scene 5: Lexical Environment & Variable Environment

In addition to the call stack, **Execution Context** also has **two environments** that manage variables and functions:

1. **Lexical Environment**:
   - This environment stores variable bindings and functions for the current execution context. It is essentially a scope where identifiers are mapped to values.
   - It helps determine **where** a variable was declared and **how** it should be accessed.
   - It’s tied to **closures** and helps understand how the function scope works.

2. **Variable Environment**:
   - The **Variable Environment** is part of the Lexical Environment. It contains the variable bindings for the current execution context.
   - For example, in the global context, all variables and functions declared globally are part of the **global variable environment**.

---

## ⚡ Scene 6: Hoisting — The Pre-Battle

Before the execution begins, variables and functions are **hoisted**. This means they are **moved to the top** of their respective scopes during the creation phase, so they are available for use, even if they’re called before their declaration.

### Example of Hoisting:

```javascript
console.log(a); // undefined (due to hoisting)
var a = 5;
```

What happens here?

- **Hoisting** moves the declaration (`var a;`) to the top, but not the initialization (`a = 5`).
- As a result, `a` is **undefined** when logged, because only the declaration (not the assignment) is hoisted.

---

## 🧘‍♂️ Shaolin Wisdom: Understanding the Flow

> "To fight in the present, one must know the past and the future. Execution Context is the land where **time, space, and purpose** converge. Understanding it is the key to knowing where your sword strikes and when it strikes."

---

## 🧘‍♂️ Hidden Ability Unlocked: **Mastery of Contextual Control**

With the mastery of **Execution Context**, you now:

- Understand how the **call stack** works and how functions are executed.
- Control **hoisting** and anticipate the order of execution.
- Manage **global and function execution contexts**, knowing how variables and functions are accessed.
- Understand how **Lexical and Variable Environments** store and manage data during execution.

> “The warrior who understands the flow of time can strike precisely when the moment arrives.”

---

|| Hare Krishna ||