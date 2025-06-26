import './App.css'; 
import Lottery from './Lottery';
import {sum} from "./helper";

function App() {
  let winCondition = (ticket)=>{
    // return sum(ticket)===15;           //sum of all digit is 15 
    return ticket.every((num)=>num ===ticket[0]);     // all digits are equal 
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;
