import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <Counter count={count}></Counter>
      <button onClick={increaseCount}>Increase count</button>
    </>
  );
}

// mount, re-render, unmount
function Counter(props) {
  useEffect(function () {
    console.log("on mount");
    // logic

    return function () {
      console.log("on unmount");
    };
  }, []); // if nothing changes then run this atleast once

  // will only run if depedency array changes(here props.count)
  useEffect(
    function () {
      console.log("count has changed");

      return function () {
        console.log("cleanup");
      };
    },
    [props.count]
  );

  return <div>Counter {props.count}</div>;
}

export default App;
