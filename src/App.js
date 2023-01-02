import { createContext } from 'react';
import './App.css';
import AutoInc from './components/ClassIncreament';
import FuncUseEffect3 from './components/fucUseEffect3';
import HookCounter from './components/HookCounter';
// import ClassCount from './components/ClassCount';
// import Counter from './components/classCount';
// import CountHooks2 from './components/HooksExamples';
// import HookCountInc from './components/UseEffect';
// import UsingEffect from './components/UseEffect';
import Useeffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import UserInput from './customHookForm';
import FuncIncrement from './functIncrement';
import Counter from './reduceHook1';

// import IncreDecreCounter from './components/UseState';



function App() {
   

  return (
    <div className="App">
      {/* <Counter></Counter> */}
     
      {/* <IncreDecreCounter></IncreDecreCounter>
      <CountHooks2></CountHooks2>
      <UsingEffect></UsingEffect> */}
      {/* <ClassCount></ClassCount> */}
      {/* <HookCountInc></HookCountInc> */}
      {/* <Useeffect2></Useeffect2>
      <UseEffect3></UseEffect3> */}
      {/* <FuncUseEffect3></FuncUseEffect3>
      <HookCounter></HookCounter>
      <AutoInc></AutoInc>
      <FuncIncrement></FuncIncrement> */}
      <Counter></Counter>
      <UserInput></UserInput>

    </div>
  );
}

export default App;
