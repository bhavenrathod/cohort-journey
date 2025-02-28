// -------------------------------RECOIL-------------------------------
import React, { createContext, useContext, useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

function Increase() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;

// ----------------------------STATE MANAGEMENT---------------------------
// import React, { createContext, useContext, useState } from "react";

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Decrease() {
//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Increase() {
//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value() {
//   const { count } = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// };

// export default App;

// ----------------------------------CONTEXT API----------------------------------
// import { useState, createContext, useContext } from "react";

// const BulbContext = createContext();

// function App() {
//   return (
//     <BulbProvider>
//       <LightBulb />
//     </BulbProvider>
//   );
// }

// // wrapper
// function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);
//   return (
//     <BulbContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
//       {children}
//     </BulbContext.Provider>
//   );
// }

// function LightBulb() {
//   return (
//     <div>
//       <BulbState />
//       <ToggleState />
//     </div>
//   );
// }

// function BulbState() {
//   const { bulbOn } = useContext(BulbContext);
//   return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
// }

// function ToggleState() {
//   const { bulbOn, setBulbOn } = useContext(BulbContext);
//   function toggle() {
//     setBulbOn((bulbOn) => !bulbOn);
//   }
//   return (
//     <div>
//       <button onClick={toggle}>Toggle bulb</button>
//     </div>
//   );
// }

// export default App;
