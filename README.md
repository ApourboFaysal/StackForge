<div align="center">

# ⚡ StackForge

**Explore technologies. Build your own dev stack.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)

</div>

---

## 📖 Description

StackForge is a small website where you can explore different technologies and build your own dev stack. You can pick the technologies you like and see them in the "Your Stack" box.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| **JavaScript** | Main programming language |
| **React** | Building the user interface |
| **Tailwind CSS** | Styling and responsive design |
| **react-hot-toast** | Toast notifications |
| **lucide-react** | Icons |
| **JSON file** | Data for all technologies |

---

## ✨ Features

| | Feature | Details |
| --- | --- | --- |
| ➕ | **Easy stack building** | Add any technology with one click, and remove one or all of them anytime. |
| ⚠️ | **No duplicates** | Same technology cannot be added twice, a warning toast comes if you try again. |
| 📱 | **Fully responsive** | Works on all screen sizes with a sticky navbar and a mobile menu. |

---

## ❓ React Questions

<details>
<summary><b>1. What is JSX, and why is it used in React?</b></summary>

<br>

JSX is a syntax where we write HTML inside JavaScript. It is used so we can make the UI easily and see the design and logic in one place.

</details>

<details>
<summary><b>2. What is the difference between props and state?</b></summary>

<br>

Props are the data which come from the parent component, and we cannot change them in the child. State is the data inside the component itself, and it can change.

</details>

<details>
<summary><b>3. What does the <code>useState</code> hook do, and where did you use it in this project?</b></summary>

<br>

`useState` is used to store a value which can change, and the page updates when it changes. I used it in `AllThing.jsx` for the stack list and in `Navber.jsx` for opening and closing the mobile menu.

</details>

<details>
<summary><b>4. What does the <code>useEffect</code> hook do, and why did you need it to load the JSON data?</b></summary>

<br>

`useEffect` runs some code after the page is shown, like fetching data from a file or API. In this project I used the `use` hook with `Suspense` for loading the JSON data, so I did not need `useEffect`.

</details>

<details>
<summary><b>5. Why does every item in a <code>.map()</code> list need a unique <code>key</code> prop?</b></summary>

<br>

The key helps React to know which item is changed, added or removed. Without it React can get confused and the list can show wrong things.

</details>

<details>
<summary><b>6. What is conditional rendering? Show one place you used it.</b></summary>

<br>

Conditional rendering means showing different things on the screen based on a condition. I used it in `YourStack.jsx`: if the stack is empty it shows "Your stack is empty.", otherwise it shows the selected technologies.

```jsx
{stack.length === 0 ? <p>Your stack is empty.</p> : stack.map(...)}
```

</details>

<details>
<summary><b>7. How do you pass data from a parent to a child, and how does a child send something back?</b></summary>

<br>

Parent sends data to the child using props, like `<Technologies stack={stack} />`. Child sends something back by calling a function which the parent gave in props, like `onAdd(tech)`.

</details>

---

<div align="center">

Made with ❤️ using React and Tailwind CSS

</div>
