import "./styles.css";

export default function App() {
  function handleClick(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <h1>Event Handling</h1>
      {/*with value i will see undefined, beacause the button doesn't have any value */}
      <button id="button1" onClick={handleClick}>
        Click me
      </button>

      <button
        id="ButtonElement"
        onClick={(e) => console.log(e.target.id)}
        onMouseEnter={(e) => console.log("Mouse Enter")}
        onMouseLeave={(e) => console.log("Mouse Leave")}
      >
        Secondo button esempio
      </button>

      {/*Ubung 2 --> True / false*/}
      <input type="checkbox"
        onChange={(e) => console.log(e.target.checked)}
      />
      {/*Ubung 3 --> logs witch button that you pressed */}
      <input type="text"
        onKeyDown={(e) => console.log(e.key)}
      />
    </div>
  );
}