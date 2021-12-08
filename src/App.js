import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Button  from './components/Button';

function App() {
  const [exp, setExp]= useState(0)
  const [result, setResult]= useState(0)

  function addSymbol(symbol){
    let newExp =exp+''+symbol;
    if(exp!=0){
      
      setExp(newExp) 
      try{
        setResult(eval(newExp));
      }catch(e){}
    }else{
      
      setExp(symbol)
      try{
        setResult(eval(symbol));
      }catch(e){}
    }
    
  }

  function delSymbol(){
    if(exp == 0 ) return;

    let newExp = exp;
    newExp=newExp.slice(0, -1)
    if(newExp){
      setExp(newExp)
    }else{
      newExp = 0;
      setExp(newExp)
    }
    try{
      setResult(eval(newExp));
    }catch(e){}
  }

  function clear(){
    setExp(0);
    setResult(0);
  }

  function count(){
    try{
      let result =eval(exp);
    
    setResult(result);
    setExp(result)
    }catch(e){
      setExp('Ошибка')
    }
  }
  return (
    <div className="wraper">
      <div className="expressionPanel">
        {exp}
      </div>
      <div className="resultPanel">
        {result}
      </div>
      <div className="btnsPanel">
        <div className="btnRow">
          <Button text="C"  style="colored" handler ={clear}/>
          <Button text="←" style="colored" handler={delSymbol}/>
          <Button text="/" handler={()=>{addSymbol('/')}}/>
          <Button text="*" handler={()=>{addSymbol('*')}}/>
          </div>
          <div className="btnRow">
          <Button text="7" handler={()=>{addSymbol('7')}}/>
          <Button text="8" handler={()=>{addSymbol('8')}}/>
          <Button text="9" handler={()=>{addSymbol('9')}}/>
          <Button text="-" handler={()=>{addSymbol('-')}}/>
          </div>
          <div className="btnRow">
          <Button text="4" handler={()=>{addSymbol('4')}}/>
          <Button text="5" handler={()=>{addSymbol('5')}}/>
          <Button text="6" handler={()=>{addSymbol('6')}}/>
          <Button text="+" handler={()=>{addSymbol('+')}}/>
          </div>
          <div className="btnRow">
          <Button text="1" handler={()=>{addSymbol('1')}}/>
          <Button text="2" handler={()=>{addSymbol('2')}}/>
          <Button text="3" handler={()=>{addSymbol('3')}}/>
          <Button text="=" handler={count} style="coloredBg"/>
          </div>
          <div className="btnRow">
          <Button text="." handler={()=>{addSymbol('.')}}/>
          <Button text="0" handler={()=>{addSymbol('0')}}/>
          <Button text="(" handler={()=>{addSymbol('(')}}/>
          <Button text=")" handler={()=>{addSymbol(')')}}/>
          </div>
      </div>
    </div>
  );
}

export default App;
