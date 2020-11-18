import React from "react";
import data from "./data";
function App() {
  const [count, setCount] = React.useState<number>(0);
  const [text, setText] = React.useState<string[]>([]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let amount: number = count;
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 0) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  console.log(count, "ll");
  return (
    <section className="section-center">
      <h3>tired of boring lorem pixels?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>

        <input
          type="number"
          name="number"
          id="amount"
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCount(Number(e.target.value))
          }
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
