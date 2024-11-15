import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./Feedback/Feedback.jsx";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = window.localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  // копія
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(feedback));
  }, [feedback]);

  // актуалізація розрахунків
  const updateFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  // ресет
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="wrap_app">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedback}
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
