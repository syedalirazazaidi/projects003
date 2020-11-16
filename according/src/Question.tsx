import React from "react";
import { AiOutLineMinus, AiOutLinePlus } from "react-icons/ai";
interface Typeprops {
  id?: number;
  title: string;
  info: string;
}
export const SingleQuestion = ({ title, info }: Typeprops) => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutLineMinus /> : <AiOutLinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
