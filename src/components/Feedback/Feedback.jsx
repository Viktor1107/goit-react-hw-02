import s from "./Feedback.module.css";
import { ImHappy } from "react-icons/im";
import { ImNeutral } from "react-icons/im";
import { ImSad } from "react-icons/im";
import { ImTree } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <ul>
          <li>
            <ImHappy /> Good: {good}
          </li>
          <li>
            <ImNeutral /> Neutral: {neutral}
          </li>
          <li>
            <ImSad /> Bad: {bad}
          </li>
          <li>
            <ImTree /> Total: {total}
          </li>
          <li>
            <ImStatsDots /> Positive: {positive}%
          </li>
        </ul>
      </div>
    </div>
  );
}
