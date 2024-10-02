import s from "./Options.module.css";

export default function Options({ changeFeedback, reset, total }) {
  return (
    <div className={s.btnContainer}>
      <button onClick={() => changeFeedback("good")}>Good</button>
      <div>
        <button onClick={() => changeFeedback("neutral")}>Neutral</button>
      </div>
      <button onClick={() => changeFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={() => reset("reset")}>Reset</button>}
    </div>
  );
}
