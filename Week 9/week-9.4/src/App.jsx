function App() {
  return (
    <div style={{ display: "flex", background: "gray" }}>
      <Card children={<div>Hello</div>} />
      <Card>
        <div>
          What do you want to add? <br />
          <br />
          <input type="text" />
        </div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        color: "black",
        padding: 10,
        margin: 10,
      }}
    >
      up
      {children}
      down
    </div>
  );
}

export default App;
