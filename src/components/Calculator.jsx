import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator(){
    const[num, setNum] = useState(0);
    const[operator, setOperator] = useState();
    const[oldNum, setOldNum] = useState(0);

    function inputNum(e){
        var input = e.target.value;

        if(num==0){
            setNum(input);
        }

        else{
            setNum(num + input);

        }
       
    }

    function clear(){
        setNum(0);
    }
   
    function porcentage(){
       setNum(num/100);
   }

   function changeSign(){
       setNum(-num); 
   }

   function DefineOperator(e){
       var inputOperator = e.target.value;
       setOperator(inputOperator);
       setOldNum(num);
       setNum(0);
   }



   function calculate(){
    if(operator == "+"){
        setNum(parseFloat(oldNum) + parseFloat(num));
    }

    else if(operator == "-"){
        setNum(oldNum - num);
    }

    else if(operator == "/"){
        setNum(oldNum / num);
    }

    else if(operator == "*"){
        setNum(oldNum * num);
    }
   }


   
    return(
        
        
       <div>  
         <Box m={20}/>
         <Container maxWidth="xs">
            <div className="wrapper">
                <Box m={10}/>
                <h1 className="resultado">{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>
                <button className="green" onClick={DefineOperator} value={"/"}>/</button>
                <button className="gray" onClick={inputNum} value={7}>7</button>
                <button className="gray" onClick={inputNum} value={8}>8</button>
                <button className="gray" onClick={inputNum} value={9}>9</button>
                <button className="green" onClick={DefineOperator} value={"*"}>X</button>
                <button className="gray" onClick={inputNum} value={4}>4</button>
                <button className="gray" onClick={inputNum} value={5}>5</button>
                <button className="gray" onClick={inputNum} value={6}>6</button>
                <button className="green" onClick={DefineOperator} value={"-"}>-</button>
                <button className="gray" onClick={inputNum} value={1}>1</button>
                <button className="gray" onClick={inputNum} value={2}>2</button>
                <button className="gray" onClick={inputNum} value={3}>3</button>
                <button className="green" onClick={DefineOperator} value={"+"}>+</button>
                <button className="gray" onClick={inputNum} value={0}>0</button>
                <button className="hidden">hidden</button>
                <button className="gray" onClick={inputNum} value={"."}>.</button>
                <button className="gray" onClick={calculate}>=</button>
            </div>
        </Container>
    </div>
    )
}