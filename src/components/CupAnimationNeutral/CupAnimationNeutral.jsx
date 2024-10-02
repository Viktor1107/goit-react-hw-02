import coffeNeutral from "..//../img/coffee-neutral.jpg";
import s from "./CupAnimationNeutral.module.css";
import { useEffect } from "react";

export default function RenderCupNeutral({
  neutral,
  setWasClicked,
  wasClicked,
}) {
  useEffect(() => {
    if (wasClicked && neutral > 0) {
      const timer = setTimeout(() => {
        setWasClicked(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [neutral, wasClicked, setWasClicked]);

  return (
    <>
      {wasClicked && (
        <div className={s.Wrap}>
          <h4>It's okay!</h4>
          <img
            src={coffeNeutral}
            alt="coffe-neutral"
            width={150}
            className={s.img}
          />
        </div>
      )}
    </>
  );
}
