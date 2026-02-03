import './App.css'
import Header from './components/Header'
import DecisionForm from './components/DecisionForm'
import DecisionList from './components/DecisionList'
import { useEffect, useState } from 'react'

/* a personal log to record important decisions, the reasoning behind them, and review outcomes over time 

  MVP
  1. add a decision with:
    title
    reason
    confidence level

  2. save with datein localStorage
  
  3. show list of past decisions



*/

function App() {

  const [decisions, setDecisions] = useState(
    () => {
      const saved = localStorage.getItem("decisions");
      return saved ? JSON.parse(saved) : [];
    }
  );

  const addDecision = (decision) => {
    setDecisions(prev => [...prev, decision]);
  }

  useEffect(() => {
    localStorage.setItem("decisions", JSON.stringify(decisions));
  }, [decisions]);

  return (
    <>
      <Header />
      <DecisionForm addDecision={addDecision}/>
      <DecisionList decisions={decisions} />
    </>
  )
}

export default App
