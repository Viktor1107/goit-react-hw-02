import { useEffect } from "react";
import coffeBad from "../../img/caffe-bad.png";
import s from "./CupAnimationBad.module.css";

export default function RenderCupBad({ bad, setWasClicked, wasClicked }) {
  useEffect(() => {
    if (wasClicked && bad > 0) {
      const timer = setTimeout(() => {
        setWasClicked(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [bad, wasClicked, setWasClicked]);

  return (
    <>
      {wasClicked && (
        <div className={s.Wrap}>
          <h4>Oopss! I'm sorry!</h4>
          <img src={coffeBad} alt="coffe-bad" width={150} className={s.img} />
        </div>
      )}
    </>
  );
}
