import React from "react";
// ------------ERROR BOUNDARY------------------

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>

      <Card2 />
    </div>
  );
};

function Card1() {
  throw new Error("something wrong");
  return (
    <div
      style={{
        background: "black",
        padding: 20,
        color: "white",
        borderRadius: 20,
      }}
    >
      hello
    </div>
  );
}
function Card2() {
  return (
    <div
      style={{
        background: "black",
        padding: 20,
        margin: 10,
        color: "white",
        borderRadius: 20,
      }}
    >
      hello
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: "black",
            padding: 20,
            margin: 10,
            color: "white",
            borderRadius: 20,
          }}
        >
          Something went wrong
        </div>
      );
    }

    return this.props.children;
  }
}

export default App;

// -------------------LIST AND KEYS--------------------------

// const App = () => {
//   const todos = [
//     {
//       title: "go to gym",
//       done: "false",
//     },
//     { title: "go to school", done: "true  " },
//   ];

//   const todoComponents = todos.map((todo) => (
//     <Todo key={todo.title} title={todo.title} done={todo.done} />
//   ));

//   return <div>{todoComponents}</div>;
// };

// function Todo({ title, done }) {
//   return (
//     <div>
//       {title} - {done.trim() === "true" ? "Done" : "Not Done !!!"}
//     </div>
//   );
// }

// export default App;

// ------------------------CHILDREN---------------------------
// function App() {
//   return (
//     <div style={{ display: "flex", background: "gray" }}>
//       <Card children={<div>Hello</div>} />
//       <Card>
//         <div>
//           What do you want to add? <br />
//           <br />
//           <input type="text" />
//         </div>
//       </Card>
//     </div>
//   );
// }

// function Card({ children }) {
//   return (
//     <div
//       style={{
//         background: "white",
//         borderRadius: 10,
//         color: "black",
//         padding: 10,
//         margin: 10,
//       }}
//     >
//       up
//       {children}
//       down
//     </div>
//   );
// }

// export default App;
