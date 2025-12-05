import { useState, useEffect, useMemo } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    try {
      const saved = localStorage.getItem("feedback");
      return saved
        ? JSON.parse(saved)
        : { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      console.error("Ошибка чтения из localStorage:", error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    } catch (error) {
      console.error("Ошибка сохранения в localStorage:", error);
    }
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  
  const positivePercentage = useMemo(() => {
    return totalFeedback > 0 
      ? Math.round((good / totalFeedback) * 100)
      : 0;
  }, [good, totalFeedback]);

  return (
    <div className="appContainer">
      <div className="appCard">
        <div className="goldenHeader">
          <h1>Sip Happens Café</h1>
        </div>
        
        <p className="subtitle">
          Please leave your feedback about our service by selecting one of the options below.
        </p>

        <Options
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />

        <div className="resultsContainer">
          {totalFeedback > 0 ? (
            <Feedback 
              feedback={feedback}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given yet." />
          )}
        </div>
      </div>
    </div>
  );
}