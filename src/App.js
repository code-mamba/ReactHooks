import './App.css';
import ClassCount from './components/ClassCount';
import Counter from './components/classCount';
import CountHooks2 from './components/HooksExamples';
import HookCountInc from './components/UseEffect';
import UsingEffect from './components/UseEffect';

import IncreDecreCounter from './components/UseState';
function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
     
      {/* <IncreDecreCounter></IncreDecreCounter>
      <CountHooks2></CountHooks2>
      <UsingEffect></UsingEffect> */}
      <ClassCount></ClassCount>
      <HookCountInc></HookCountInc>
    </div>
  );
}

export default App;
