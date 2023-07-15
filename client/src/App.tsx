import React,{useState,useEffect} from 'react';

import './App.css';

function App() {
  const [nickName,setNickName] = useState('주늬요');

  useEffect(()=>{
  console.log("마운트가 되었을 때");
  })

  useEffect(()=>{
    console.log("의존성 빈 배열 버전");
    },[])
    
    useEffect(()=>{
      console.log("의존성 배열에 값을 넣은 버전");
      },[nickName])
      
  const togle = () => {
    setNickName('행복한 원숭이')
  }

  return (
    <div className="App">
      <button onClick={togle}> {nickName}</button>
    
    </div>
  );
}

export default App;
