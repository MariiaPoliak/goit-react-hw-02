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

  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const handleReset = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(counter));
  }, [counter]);

  const { good, neutral, bad } = counter;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  // Update feedback count based on type
  const updateFeedback = (type) => {
    setCounter((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  useEffect(() => {
    if (totalFeedback !== 0) {
      setIsFeedbackVisible(true);
    }
  }, [totalFeedback]);

  return (
    <div className="wrap_app">
      <Title />
      <Options
        counter={counter}
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      <div onClick={() => setIsFeedbackVisible(true)}>
        {isFeedbackVisible ? (
          <Feedback
            feedbackCounts={counter}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
