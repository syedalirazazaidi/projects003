import React from "react";
import { SingleQuestion } from "./Question";
import { QuestionType } from "./Types/type";
import questions from "./data";
function App() {
  const [question, setQuetion] = React.useState(questions);

  return (
    <main>
      <div className="container">
        <h3>question and answer about login</h3>
        <section className="info">
          {question.map((question: QuestionType) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
