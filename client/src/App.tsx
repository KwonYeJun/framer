// import React,{useState,useEffect} from 'react';

// import './App.css';

// function App() {
//   const [nickName,setNickName] = useState('주늬요');

//   useEffect(()=>{
//   console.log("마운트가 되었을 때");
//   })

//   useEffect(()=>{
//     console.log("의존성 빈 배열 버전");
//     },[])
    
//     useEffect(()=>{
//       console.log("의존성 배열에 값을 넣은 버전");
//       },[nickName])
      
//   const togle = () => {
//     setNickName('행복한 원숭이')
//   }

//   return (
//     <div className="App">
//       <button onClick={togle}> {nickName}</button>
    
//     </div>
//   );
// }

import React from 'react';
import useSWR, { SWRResponse } from 'swr';

interface Item {
  id: number;
  name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const App: React.FC = () => {
  const { data, error }: SWRResponse<Item[], any> = useSWR('/api/data', fetcher, {
    refreshInterval: 5000, // 5 seconds
    revalidateOnFocus: true,
  });

  if (error){
    console.log(error,'error')
    return <div>Failed to load data</div>;
  } 
  if (!data){
    console.log(data,'data')
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;
