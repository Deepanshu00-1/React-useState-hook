import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {initialItems} from './utils';

// interface DemoProps{}

function App(){
  const[count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find((items) => items.id === count),[items,count]);

  return(
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected items: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count+1)}>Increament</button>
    </div>
  );
}

export default App;
