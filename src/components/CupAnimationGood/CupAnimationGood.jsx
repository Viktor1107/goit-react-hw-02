import coffeGood from "../../img/coffe-good.jpg";
import s from "./CupAnimationGood.module.css";
import { useEffect } from "react";

export default function RenderCupGood({ good, setWasClicked, wasClicked }) {
  useEffect(() => {
    if (wasClicked && good > 0) {
      const timer = setTimeout(() => {
        setWasClicked(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [good, wasClicked, setWasClicked]);

  return (
    <>
      {wasClicked && (
        <div className={s.Wrap}>
          <h4>Yuuhuuu!</h4>
          <img src={coffeGood} alt="coffe-good" width={150} className={s.img} />
        </div>
      )}
    </>
  );
}
