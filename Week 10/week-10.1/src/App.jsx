import { useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

// ------------------------CLOCK-------------------------
function App() {
  const [currentState, updateState] = useState(0);
  const timer = useRef();

  function startTimer() {
    let value = setInterval(() => {
      updateState((currentState) => currentState + 1);
    }, 1000);
    timer.current = value;
  }

  function stopTimer() {
    console.log(timer);

    clearInterval(timer.current);
  }

  return (
    <div>
      {currentState}
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;
// ---------------------------useRef--------------------------------
// function App() {
//   const inputRef = useRef();

//   function focusOnInput() {
//     // document.getElementById("name").focus();
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       Signup
//       <input ref={inputRef} id="name" type="text" />
//       <input id="password" type="text" />
//       <button onClick={focusOnInput}>Submit</button>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<LandingComponent />} />
//           <Route
//             path="/neet/online-coaching-class-11"
//             element={<Class11Program />}
//           />
//           <Route
//             path="/neet/online-coaching-class-12"
//             element={<Class12Program />}
//           />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Layout() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <Header />
//       <div style={{ height: "50vh" }}>
//         <Outlet />
//       </div>
//       Footer
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div>
//       <Link to="/neet">Allen Landing</Link> |
//       <Link to="/neet/online-coaching-class-11">Class 11</Link> |
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//     </div>
//   );
// }

// function NotFound() {
//   return <div>NOT FOUND</div>;
// }

// function LandingComponent() {
//   return <div>Landing Page</div>;
// }

// function Class11Program() {
//   return <div>NEET programs for Class 11</div>;
// }
// function Class12Program() {
//   const navigate = useNavigate(); // navigate to any part of page
//   function redirectUser() {
//     navigate("/"); // destination path
//   }

//   return (
//     <div>
//       NEET programs for Class 12 <br />
//       <button onClick={redirectUser}>Go to landing page</button>
//     </div>
//   );
// }

// export default App;
