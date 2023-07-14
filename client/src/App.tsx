import React,{useState} from 'react';

import './App.css';

function App() {
  const [nickName,setNickName] = useState('주늬요');

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
