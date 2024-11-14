import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./Feedback/Feedback.jsx";
import Title from "./Title/Title.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";

function App() {
  const [counter, setCounter] = useState(() => {
    const savedData = window.localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((counter.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(counter));
  }, [counter]);

  //копія існуючого об’єкту
  const updateFeedback = (option) => {
    setCounter((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const handleReset = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="wrap_app">
      <Title />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={counter}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
