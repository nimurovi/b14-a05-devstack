Project Name:Dev Stack
Description:This project is very effective to practise with those topics like  Typescript, React-components,React-state,Tailwind,Daisy Ui. 
Technology:Ts,React-js,Html,Tailwind,Daisy UI 
Features: 1.It shows the all technology.
          2.We can select the technology in a stack.
          3.We can remove the technology from stack  


# React Questions & Answers

 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write **HTML-like code inside JavaScript/TypeScript**. It makes React components easier to write and understand.

 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

 3. What does the `useState` hook do, and where did you use it in this project?

useState lets a React component **store and update data**.
I used it to manage changing data such as the **selected technologies/stack** in this project.

 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to fetch/load the JSON technology data when the component starts.

 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify each item in a list. This allows React to update the list efficiently when something changes.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, I used it to show a message when the selected stack is empty:


{selectedStack.length === 0 && <p>Your stack is empty.</p>}


 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send data back by calling a function passed from the parent as a prop.

This way, the parent controls the data, while the child can notify the parent about an action.
