import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePost } from "./hooks/usePost";
import { usePrev } from "./hooks/usePrev";
import useDebounce from "./hooks/useDebounce";

//--------------------------useDebounce hook----------------------
function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation");
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  );
}

export default App;
//-------------------usePrev hook--------------------------

// function App() {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <div>
//       <p>{state}</p>
//       <button
//         onClick={() => {
//           setState((val) => val + 1);
//         }}
//       >
//         Click me
//       </button>
//       <p>The previous value was {prev}</p>
//     </div>
//   );
// }

// export default App;
// ------------------useFetch custom hook---------------------
// function App() {
//   const [currentPost, setCurrentPost] = useState(1);

//   const post = usePost();
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/" + currentPost,
//     5
//   );

//   if (loading) {
//     return <div>LOADING!!!!!!!!!!!</div>;
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={() => setCurrentPost(1)}>1</button>
//         <button onClick={() => setCurrentPost(2)}>2</button>
//         <button onClick={() => setCurrentPost(3)}>3</button>
//         <br />
//         {JSON.stringify(data)}
//       </div>
//     </div>
//   );
// }

// export default App;

// ------------------CUSTOM COUNTER HOOK----------------------
// import { useState } from "react";

// // custom hook
// function useCount() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(() => count + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount,
//   };
// }

// function Counter() {
//   const { count, increaseCount } = useCount();
//   return (
//     <div>
//       {count} <br />
//       <button onClick={increaseCount}>Increase Count</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// export default App;
