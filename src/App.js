
import { useState } from 'react';
import './App.css';
import { BtnArea } from './components/BtnArea';
import { Display } from './components/Display';
const operators = ['+','-','*','/','%']

const  App = () => {
  const [strToDisplay, setStringToDisplay]= useState("");
  const[lastOperator, setLastOperator]= useState("");

  const handleOnButtonClick =(val)=>{
    console.log(val);
    if(val === "C"){
      // const str = strToDisplay.slice(0, -1);
      return setStringToDisplay(strToDisplay.slice(0, -1));
    }
    if(val === "AC"){
      return setStringToDisplay("");
      // console.log("reset display content");
    }
    if(val === "="){
      const lastChar = strToDisplay[strToDisplay.length-1];
      let temStr = strToDisplay;
      if(operators.includes(lastChar)){
        temStr = strToDisplay.slice(0,-1);
      }
      // const total = eval(strToDisplay).toString();
      return setStringToDisplay(eval(temStr).toString());
    }


    if(operators.includes(val)){
      console.log("you clicked operators")
      if(!strToDisplay){
          return;
      }

      let temStr = strToDisplay
      const lastChar = strToDisplay[strToDisplay.length-1];
      if(operators.includes(lastChar)){
          temStr=strToDisplay.slice[0,-1];
      }
       setStringToDisplay(temStr+val);
       setLastOperator(val);
       return;
    
  } 

   if (val === "."){
    if(lastOperator){
      const operatorIndex =  strToDisplay.lastIndexOf(lastOperator);
      const numberAfterLastOperator = strToDisplay.slice(operatorIndex);
      if(numberAfterLastOperator.includes(".")){
        return;
      }
    }
    if(!lastOperator && strToDisplay.includes(".")){
      return;
    }
   }
  
    setStringToDisplay(strToDisplay + val);
};
  return (
    <div className ="wrapper">
      <div className="circle"></div>
      <div className="calculator">
        <Display strToDisplay = {strToDisplay}/>
        <BtnArea handleOnButtonClick={handleOnButtonClick}/>
      </div>
    </div>
  );
}

export default App;
