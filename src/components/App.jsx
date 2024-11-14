import { useEffect, useState } from 'react';
import './App.css';
import Feedback from './Footer/Feedback.jsx';
import Header from './Header/Description.jsx';
import Options from './Main/Options/Options.jsx';
import Notification from './Main/Notification/Notification .jsx';

function App() {
  // counter
  const [counter, setCounter] = useState(() => {
    // перевірка в useState на наявність данних в локальному всередині useState
    const saveData = window.localStorage.getItem("data");
    if (saveData !== null) {
      return JSON.parse(saveData);
    }
    return {
    good: 0,
    neutral: 0,
    bad: 0}
  });

    const handleReset = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

    // localStorage
  //  потрібна перевірка в useState на наявність данних
  // прокидування в локальне наявних при зміні дата
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(counter));
  }, [counter]);

  // totall
  const { good, neutral, bad } = counter;
  const totalFeedback = good + neutral + bad;

   const updateFeedback = feedbackType => {
    setCounter((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };
  
//  відкриття відбеку при змівні данних
  useEffect(() => { if (totalFeedback !== 0) { openFeedback(); } }, [counter])
  
  // Fedback
  const [isClick, setIsClick] = useState(true)
  const openFeedback = () => {
    setIsClick(false)
  }
  const closeFeedback = () => {
    setIsClick(true)
  }
  // change
  const positiveFeedback = totalFeedback == 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div className='wrap_app'>
      <Header />
      <Options counter={counter} updateFeedback={updateFeedback} handleReset={ handleReset} totalFeedback ={totalFeedback}/>
      <div onClick={openFeedback}>
        {isClick ? <Notification /> : <Feedback feedbackCounts={counter} totalFeedback = {totalFeedback} positiveFeedback= {positiveFeedback}/>}
      </div>
      </div>
  )
}

export default App
