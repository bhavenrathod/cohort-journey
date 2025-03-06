import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import { evenSelector } from "./store/selectors/evenSelector";

// ---------------------SELECTORS----------------------
function App() {
  return (
    <>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App;

// ------------------------MEMO--------------------------
// import { useState, useEffect, memo } from "react";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 3000);

//     // Cleanup function to clear the interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array ensures this runs only once after the initial render

//   return (
//     <div>
//       <CurrentCount count={count} />

//       <Increase setCount={setCount} />

//       <Decrease setCount={setCount} />
//     </div>
//   );
// }

// // Memoized CurrentCount component to prevent unnecessary re-renders
// const CurrentCount = memo(function ({ count }) {
//   return <h1>{count}</h1>;
// });

// // Memoized Decrease component that renders a button to decrease the count
// const Decrease = memo(function ({ setCount }) {
//   function decrease() {
//     setCount((c) => c - 1);
//   }

//   return <button onClick={decrease}>Decrease</button>;
// });

// // Memoized Increase component that renders a button to increase the count
// const Increase = memo(function ({ setCount }) {
//   function increase() {
//     setCount((c) => c + 1);
//   }

//   return <button onClick={increase}>Increase</button>;
// });

// export default App;

// -------------RECOIL---------------
// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);

//   return <div>{count}</div>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount((c) => c + 1);
//   }

//   return <button onClick={increase}>Increase</button>;
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount((c) => c - 1);
//   }
//   return <button onClick={decrease}>Decrease</button>;
// }
