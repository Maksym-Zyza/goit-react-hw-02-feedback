import React from 'react';
// import Counter from "./components /Counter/Counter";
import Feedback from "./components /Feedback/Feedback";
import './styles.css';

class App extends React.Component {
  
  render() {
    return (
    <div>
      {/* <h1>Counter</h1>      
        <Counter initialValue={10} />  */}

      <h1>Please leave feedback</h1>      
        <Feedback /> 
    </div>
  );
   }
};

export default App;