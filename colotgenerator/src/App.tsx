import React from "react";
import Values from "values.js";
import { SingleColor } from "./Single";
function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(0);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(error);
      console.log("hello", error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setColor(e.target.value)
            }
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">onclick</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color, "color");
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
