import "./App.css";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import CupAnimationGood from "./components/CupAnimationGood/CupAnimationGood";
import CupAnimationNeutral from "./components/CupAnimationNeutral/CupAnimationNeutral";
import CupAnimationBad from "./components/CupAnimationBad/CupAnimationBad";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(function () {
    const saveFeedback = localStorage.getItem("feedback");
    if (saveFeedback === null) {
      return { good: 0, neutral: 0, bad: 0 };
    } else {
      return JSON.parse(saveFeedback);
    }
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleChangeFeedback = (variant) => {
    console.log(variant);

    if (variant === "good") {
      setFeedback((prev) => {
        return { ...prev, good: prev.good + 1 };
      });
      setWasClickedGood(true);
    }
    if (variant === "neutral") {
      setFeedback((prev) => {
        return { ...prev, neutral: prev.neutral + 1 };
      });
      setWasClickedNeutral(true);
    }

    if (variant === "bad") {
      setFeedback((prev) => {
        return { ...prev, bad: prev.bad + 1 };
      });
      setWasClickedBad(true);
    }
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const [wasClickedGood, setWasClickedGood] = useState(false);
  const [wasClickedNeutral, setWasClickedNeutral] = useState(false);
  const [wasClickedBad, setWasClickedBad] = useState(false);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  const handleRender = () => {
    if (total > 0) {
      return (
        <>
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positive={positive}
          />
        </>
      );
    } else {
      return <Notification />;
    }
  };

  return (
    <>
      {handleRender()}
      <Options
        changeFeedback={handleChangeFeedback}
        reset={handleReset}
        total={total}
      />
      <Description />
      <CupAnimationGood
        good={feedback.good}
        setWasClicked={setWasClickedGood}
        wasClicked={wasClickedGood}
      />
      <CupAnimationNeutral
        neutral={feedback.neutral}
        setWasClicked={setWasClickedNeutral}
        wasClicked={wasClickedNeutral}
      />
      <CupAnimationBad
        bad={feedback.bad}
        setWasClicked={setWasClickedBad}
        wasClicked={wasClickedBad}
      />
    </>
  );
}
