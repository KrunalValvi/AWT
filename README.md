# Advanced Web Technology (AWT)

A collection of class notes and lab assignments covering modern JavaScript (ES6+), TypeScript, and React.

---

## 📁 Project Structure

```
AWT/
├── CLASS/
│   └── Unit-1/
│       ├── ES6-Basics/       → JS fundamentals (functions, arrays, objects, arrow, spread/rest)
│       ├── Promises-Async/   → Promises, async/await, chaining
│       ├── Modules/          → ES6 import/export, module system
│       └── TS/               → TypeScript basics (types, interfaces, classes, generics)
│
└── LAB/
    ├── Lab-1/                → TypeScript Task Manager (interfaces, modules, ESM)
    ├── Lab-2/
    │   ├── Comp-State-Prop/  → React Components, Props, State (Class & Function)
    │   └── Weather/          → React Weather App
    └── Lab-3/
        └── Tasks/            → React Task Management App
```

---

## 📘 CLASS — Unit 1 Topics

### ES6-Basics
| File | Topic |
|------|-------|
| `function.html` | Function declarations & expressions |
| `arrow.html` | Arrow function syntax |
| `arrow-functions.html` | Arrow function patterns |
| `object.html` | Object literals & destructuring |
| `array.html` | Array methods |
| `print.html` | Template literals |
| `restparam-spreadoperator.html` | Rest parameters & Spread operator |

### Promises-Async
| File | Topic |
|------|-------|
| `promise-basic.html` | Promise basics (resolve/reject) |
| `promise-syntax.html` | Promise syntax |
| `promise-addition.html` | Promise chaining with addition |
| `promiseoddeven.html` | Odd/Even with Promise |
| `promisepositivenegative.html` | Positive/Negative check |
| `foodOrder.html` | Real-world promise chain (food order) |
| `async.html` | async / await |

### Modules
| File | Topic |
|------|-------|
| `import.js` / `export.js` | Named & default exports |
| `modules-data.js` | Module state management |
| `modules-demo.js` | Module usage demo |
| `modules-overview.html` | Module overview |

### TypeScript (TS/)
| File | Topic |
|------|-------|
| `basic.ts` | Basic types |
| `dtype.ts` | Data types |
| `interface.ts` / `interface2.ts` | Interfaces |
| `class.ts` / `class2.ts` | Classes |
| `generic.ts` | Generics |

---

## 🔬 LAB Assignments

### Lab-1 — TypeScript Task Manager
> **Concepts:** TypeScript interfaces, modules, ESM, type-safe functions

**Structure:**
```
Lab-1/
├── index.html
├── tsconfig.json
└── src/
    ├── app.ts              → Entry point
    ├── models/
    │   └── tasks.ts        → Task interface
    └── utils/
        ├── taskCalculator.ts  → getTotalTasks, getCompletedTasks, getPendingTasks
        └── dataFormatter.ts   → formatSummary
```

**Run:**
```bash
cd LAB/Lab-1
npx tsc          # compile TypeScript
# open index.html with Live Server
# check browser console for output
```

**Output:**
```
Tasks Summary
-------------------
Total Tasks    : 5
Pending Tasks  : 2
Completed Tasks: 3
```

---

### Lab-2 — React Components, State & Props
> **Concepts:** Function components, Class components, Props, State, useState, setState

#### Comp-State-Prop
```
Comp-State-Prop/
└── src/
    ├── App.jsx    → Car component with props (arrays + objects)
    └── main.jsx   → Renders Car with model, name, year, carinfo props
```

**Run:**
```bash
cd LAB/Lab-2/Comp-State-Prop
npm install
npm run dev
# open http://localhost:5173
```

#### Weather
React weather app using API data and component-based UI.

---

### Lab-3 — React Task App
> **Concepts:** React state management, component communication, lists & events

```bash
cd LAB/Lab-3/Tasks
npm install
npm run dev
```

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML / CSS / JS | Basics, DOM, ES6 |
| TypeScript | Typed JavaScript, interfaces, classes |
| React + Vite | Component-based UI, SPA |
| Node.js / npm | Package management |

---

## 🚀 Getting Started

**Clone the repo:**
```bash
git clone https://github.com/YOUR-USERNAME/AWT-Lab.git
cd AWT-Lab
```

**For React projects, install dependencies:**
```bash
cd LAB/Lab-2/Comp-State-Prop
npm install
npm run dev
```

**For TypeScript projects:**
```bash
cd LAB/Lab-1
npx tsc
```

---

## 👤 Author

**Krunal Valvi**  
Advanced Web Technology — MCA
