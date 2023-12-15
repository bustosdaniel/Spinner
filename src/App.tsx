import "./App.css";

function App() {
  return (
    <div>
      <div
        className="spinner"
        style={{
          border: "4px solid rgba(0, 0, 0, .1)",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          borderLeftColor: "transparent",

          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  );
}

export default App;
