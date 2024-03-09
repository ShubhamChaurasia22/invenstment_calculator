import { useState } from 'react';
import Title from "./components/Title";
import UserInput from './components/UserInput';
import ResultTable from "./components/ResultTable";

const INITIAL_INVESTMENT = {
  initial_investment: 15000,
  annual_investment: 1200,
  expected_return: 6,
  duration: 10, 
}

function App() {
  const [customInput, setCustomInput] = useState(INITIAL_INVESTMENT);
  const inputIsValid = customInput.duration >= 1;

  function handleUserInput(identifier, newValue) {
    setCustomInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue
      }
    });
  }

  return (
    <>
      <Title />
      <div className="container">
        <UserInput userValue={customInput} onUserInput={handleUserInput} />
        {inputIsValid ? <ResultTable input={customInput}/> : <p className='center'>Please enter duration greater than zero.</p>}
      </div>
    </>
  )
}

export default App
