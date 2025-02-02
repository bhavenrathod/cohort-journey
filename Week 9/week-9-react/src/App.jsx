import { useState, useEffect } from "react";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setCounterVisible((counterVisible = !counterVisible));
    }, 5000);
  }, []);
  return (
    <>
      <b>hello world</b>
      {/*Conditional rendering */}
      {counterVisible ? <Counter></Counter> : null}
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0); // state defined here

  // hooking into the lifecycle of the events of react

  // mounting
  // prevents the setInterval from re-rendering again and again
  useEffect(function () {
    console.log("on mount");
    let clock = setInterval(function () {
      console.log("inside the setInterval");
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);

    // cleanup function
    return function () {
      clearInterval(clock); // unmount
      console.log("on unmount");
    };
  }, []);

  // function increaseCount() {
  //   setCount(count + 1);
  // }
  // function decreaseCount() {
  //   setCount(count - 1);
  // }
  // function resetCount() {
  //   setCount(0);
  // }

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset count</button>  */}
    </>
  );
}
export default App;
