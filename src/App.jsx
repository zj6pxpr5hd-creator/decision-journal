import './App.css'
import Header from './components/Header'
import DecisionForm from './components/DecisionForm'
import DecisionList from './components/DecisionList'
import { useState } from 'react'

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

  const [decisions, setDecisions] = useState([]);

  const addDecision = (decision) => {

    setDecisions(prev => [...prev, decision]);

  }

  return (
    <>
      <Header />
      <DecisionForm addDecision={addDecision}/>
      <DecisionList decisions={decisions} />
    </>
  )
}

export default App
